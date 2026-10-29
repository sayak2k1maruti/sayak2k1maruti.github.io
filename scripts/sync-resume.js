// Parses the resume PDF and writes data/resume.json, which the portfolio renders from.
// Usage: npm run sync-resume -- [path/to/resume.pdf]   (default: ~/Downloads/Sayak_Das.pdf)
const fs = require('fs')
const os = require('os')
const path = require('path')
const pdfjs = require('pdfjs-dist/legacy/build/pdf.js')

const pdfPath = process.argv[2] || path.join(os.homedir(), 'Downloads', 'Sayak_Das.pdf')
const outPath = path.join(__dirname, '..', 'data', 'resume.json')

const MONTHS = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec']
const DATE_RANGE = /^([A-Za-z]+\.? \d{4}|\d{4})\s*[–-]\s*([A-Za-z]+\.? \d{4}|\d{4}|Present)$/

// "June 2023" -> "2023-06", "2019" -> "2019", "Present" -> null
const toISO = (str) => {
    if (/present/i.test(str)) return null
    const [a, b] = str.split(' ')
    if (!b) return a
    return `${b}-${String(MONTHS.indexOf(a.slice(0, 3).toLowerCase()) + 1).padStart(2, '0')}`
}

// Split on commas that are not inside parentheses: "AWS (Glue, S3), Kubernetes" -> ["AWS (Glue, S3)", "Kubernetes"]
const splitTopLevel = (str) => {
    const parts = []
    let depth = 0, cur = ''
    for (const ch of str) {
        if (ch === '(') depth++
        if (ch === ')') depth--
        if (ch === ',' && depth === 0) { parts.push(cur); cur = '' } else cur += ch
    }
    parts.push(cur)
    return parts.map(p => p.replace(/^\s*and\s+/, '').trim()).filter(Boolean)
}

// Joins text across a line break, undoing LaTeX hyphenation ("ex-" + "ternal") but keeping real hyphens ("team-" + "led")
const joinLines = (prev, next) => {
    if (!prev) return next
    if (!prev.endsWith('-')) return `${prev} ${next}`
    const fragment = prev.slice(0, -1).split(/[\s(]/).pop()
    const isSplitWord = /^[a-z]/.test(next) && (fragment.length <= 3 || /^[A-Z][a-z]+$/.test(fragment))
    return isSplitWord ? prev.slice(0, -1) + next : prev + next
}

const readLines = async () => {
    const doc = await pdfjs.getDocument({ data: new Uint8Array(fs.readFileSync(pdfPath)), verbosity: 0 }).promise
    const lines = []
    for (let p = 1; p <= doc.numPages; p++) {
        const page = await doc.getPage(p)
        const { items } = await page.getTextContent()
        const byY = new Map()
        for (const it of items) {
            if (!it.str.trim()) continue
            const y = Math.round(it.transform[5])
            if (!byY.has(y)) byY.set(y, [])
            byY.get(y).push({ x: it.transform[4], width: it.width, font: it.fontName, str: it.str })
        }
        ;[...byY.entries()].sort((a, b) => b[0] - a[0]).forEach(([, runs]) => lines.push(runs.sort((a, b) => a.x - b.x)))
    }
    return lines
}

// Groups runs into segments: a big horizontal gap starts a new segment (left text vs right-aligned dates)
const segmentsOf = (runs) => {
    const segs = []
    let prev
    for (const r of runs) {
        const gap = prev ? r.x - (prev.x + prev.width) : 0
        if (!prev || gap > 40) segs.push({ x: r.x, runs: [] })
        segs[segs.length - 1].runs.push({ ...r, space: prev && gap > 1.5 && gap <= 40 })
        prev = r
    }
    return segs.map(s => ({ x: s.x, runs: s.runs, text: s.runs.map(r => (r.space ? ' ' : '') + r.str).join('').trim() }))
}

const main = async () => {
    const lines = (await readLines()).map(segmentsOf)
    const lineText = (segs) => segs.map(s => s.text).join(' ')

    // Section headings are all-caps lines; their font is also the bold font used in the body
    const isHeading = (segs) => segs.length === 1 && segs[0].runs.length === 1 && /^[A-Z][A-Z &]{3,}$/.test(segs[0].text)
    const headingIdx = lines.map((s, i) => (isHeading(s) ? i : -1)).filter(i => i >= 0)
    const boldFont = lines[headingIdx[0]][0].runs[0].font
    const sections = {}
    headingIdx.forEach((start, n) => {
        sections[lines[start][0].text] = lines.slice(start + 1, headingIdx[n + 1] ?? lines.length)
    })
    const section = (name) => sections[Object.keys(sections).find(k => k.includes(name))] || []

    // Bullets: a line starting with "•" opens a bullet; following lines continue it.
    // Each bullet is a list of { text, bold } chunks with line breaks already joined.
    const bulletsOf = (sectionLines) => {
        const bullets = []
        for (const segs of sectionLines) {
            const runs = segs.flatMap(s => s.runs)
            const isNew = runs[0].str.trim() === '•'
            if (isNew) bullets.push({ chunks: [], right: [] })
            const bullet = bullets[bullets.length - 1]
            if (!bullet) continue
            // right-aligned segments (dates, locations) are kept separately
            if (segs.length > 1) bullet.right.push(segs.slice(1).map(s => s.text).join(' '))
            const body = (segs.length > 1 ? segs[0].runs : runs).filter(r => r.str.trim() !== '•')
            body.forEach((r, i) => {
                const symbolOnly = !/[A-Za-z0-9]/.test(r.str) && r.str.trim().length === 1 && body[i + 1]
                const bold = r.font === boldFont || (symbolOnly && body[i + 1].font === boldFont && !/[,.()“”]/.test(r.str))
                const last = bullet.chunks[bullet.chunks.length - 1]
                const lineStart = i === 0 && !isNew
                if (last && last.bold === bold) {
                    last.text = lineStart ? joinLines(last.text, r.str) : last.text + (r.space ? ' ' : '') + r.str
                } else {
                    if (last && lineStart) last.text = joinLines(last.text, '').trimEnd()
                    const lead = last && (r.space || (lineStart && !last.text.endsWith('-'))) ? ' ' : ''
                    bullet.chunks.push({ bold, text: lead + r.str })
                }
            })
        }
        return bullets.map(b => ({ ...b, text: b.chunks.map(c => c.text).join('').replace(/\s+/g, ' ').trim() }))
    }

    // Header: name + contact links (phone number intentionally left out)
    const header = lines.slice(0, headingIdx[0]).map(lineText).join(' | ')
    const find = (re) => (header.match(re) || [])[0]
    const contact = {
        email: find(/[\w.+-]+@[\w-]+\.[\w.]+/),
        website: find(/[\w-]+\.github\.io/),
        github: find(/github\.com\/[\w-]+/),
        linkedin: find(/linkedin\.com\/in\/[\w-]+/),
        location: header.split('|').map(s => s.trim()).pop()
    }

    // Skills: "Category: a, b, c"
    const skills = bulletsOf(section('SKILL')).map(b => {
        const [category, ...rest] = b.text.split(':')
        return { category: category.trim(), items: splitTopLevel(rest.join(':')) }
    })
    const skillTokens = skills.flatMap(s => s.items).flatMap(item => {
        const inner = item.match(/\((.*)\)/)
        return [item.replace(/\s*\(.*\)/, ''), ...(inner ? splitTopLevel(inner[1]) : [])]
    })
    const isSkill = (term) => skillTokens.some(s => s === term || s.startsWith(term + ' ') || term.endsWith(' ' + s))

    // Experience: company line (bold, location on the right), role lines (dates on the right), then bullets
    const marginX = lines[headingIdx[0]][0].x
    const experience = []
    for (const segs of section('EXPERIENCE')) {
        const job = experience[experience.length - 1]
        const right = segs.length > 1 ? segs[segs.length - 1].text : ''
        const atMargin = Math.abs(segs[0].x - marginX) < 2
        if (atMargin && DATE_RANGE.test(right)) {
            const [, from, to] = right.match(DATE_RANGE)
            job.roles.push({ title: segs[0].text, duration: right, start: toISO(from), end: toISO(to) })
        } else if (atMargin && segs[0].runs[0].font === boldFont) {
            experience.push({ company: segs[0].text, location: right, roles: [], highlights: [], lines: [] })
        } else if (job) {
            job.lines.push(segs)
        }
    }
    experience.forEach(job => {
        job.highlights = bulletsOf(job.lines).map(b => {
            const [titleChunk, ...rest] = b.chunks
            const heading = titleChunk.text.replace(/:\s*$/, '').trim()
            const tag = (heading.match(/\(([^)]*)\)\s*$/) || [])[1] || null
            const bold = rest.filter(c => c.bold).map(c => c.text.trim())
            // a metric is bold text with a standalone number ("5x", "98%", "$50M+"), not a name like "Amazon S3"
            const isMetric = (t) => /(^|[\s$(])\d/.test(t) && /[A-Za-z%]/.test(t)
            const terms = bold.filter(t => !isMetric(t)).flatMap(splitTopLevel).filter(isSkill)
            // skills named in plain text, unless already covered by a bold term ("AWS" in "AWS Glue")
            const literal = skills.flatMap(s => s.items).map(item => item.replace(/\s*\(.*\)/, ''))
                .filter(s => new RegExp(`(^|[^\\w])${s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}([^\\w]|$)`).test(b.text))
                .filter(s => !terms.some(t => t.split(' ').includes(s)))
            return {
                title: heading.replace(/\s*\([^)]*\)\s*$/, ''),
                tag,
                metrics: bold.filter(isMetric),
                description: rest.map(c => c.text).join('').replace(/\s+/g, ' ').trim(),
                stack: [...new Set([...terms, ...literal])]
            }
        })
        delete job.lines
    })

    // Education: institution + years on the first line, "Degree in Major; CGPA: x / y" + city on the second
    const education = bulletsOf(section('EDUCATION')).map(b => {
        const institution = b.chunks.find(c => c.bold).text.trim()
        const details = b.text.slice(b.text.indexOf(institution) + institution.length).trim()
        const [degreeLine] = details.split(';')
        const [degree, major] = degreeLine.split(/\s+in\s+/)
        return {
            institution,
            degree: degree.trim(),
            major: (major || '').trim(),
            cgpa: (details.match(/CGPA:\s*([\d.]+\s*\/\s*[\d.]+)/) || [])[1] || null,
            duration: b.right.find(r => /\d{4}/.test(r)) || null,
            location: b.right.find(r => !/\d{4}/.test(r)) || null
        }
    })

    // Publications: Authors, “Title,” Venue, pp. x–y, doi: ...
    const publications = bulletsOf(section('PUBLICATION')).map(b => {
        const m = b.text.match(/^(.*?),\s*“(.*?),?”\s*(.*?),\s*(\d{4}),.*?doi:\s*(\S+?)\.?$/)
        return {
            authors: m[1].trim(),
            title: m[2].replace(/,$/, ''),
            venue: m[3].replace(/,\s*$/, ''),
            year: m[4],
            doi: m[5],
            url: `https://doi.org/${m[5]}`
        }
    })

    const resume = { name: lineText(lines[0]), contact, experience, skills, education, publications }
    fs.writeFileSync(outPath, JSON.stringify(resume, null, 4) + '\n')
    console.log(`Wrote ${path.relative(process.cwd(), outPath)} from ${pdfPath}`)
}

main().catch((err) => {
    console.error(err)
    process.exit(1)
})
