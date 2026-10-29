// Resume-backed data comes from data/resume.json, generated from the resume PDF by `npm run sync-resume`.
import resume from './resume.json'

const navigations = ["Work", "Skill", "Contact"]

// Not part of the resume, maintained by hand
const Interests = [
    'Distributed Systems',
    'Data Engineering',
    'Agentic AI & LLMs',
    'Low-Latency Trading Systems',
    'Cloud Architecture',
    'Full Stack Web Development'
]

const [currentJob] = resume.experience
const [currentRole] = currentJob.roles
const [education] = resume.education

// Experience counted from the earliest role start, in half-year steps: "3.5+ Years"
const yearsOfExperience = (() => {
    const starts = resume.experience.flatMap(job => job.roles.map(role => role.start))
    const [year, month] = starts.sort()[0].split('-').map(Number)
    const now = new Date()
    const months = (now.getFullYear() - year) * 12 + (now.getMonth() + 1 - month)
    return `${Math.floor(months / 6) / 2}+ Years`
})()

const city = currentJob.location.split(',')[0]

const Profile = {
    name: resume.name,
    firstName: resume.name.split(' ')[0],
    role: currentRole.title,
    company: currentJob.company,
    experience: yearsOfExperience,
    email: resume.contact.email,
    github: `https://${resume.contact.github}`,
    linkedin: `https://www.${resume.contact.linkedin}`
}

// The About profile, printed as `cat sayak.json`
const shortInstitution = (education.institution.match(/\((\w+)\)\s*(\w+)/) || []).slice(1).join(' ') || education.institution
const Info = [
    { key: 'name', value: resume.name },
    { key: 'role', value: currentRole.title },
    { key: 'company', value: currentJob.company },
    { key: 'experience', value: yearsOfExperience.toLowerCase() },
    { key: 'based_in', value: resume.contact.location },
    { key: 'education', value: `${education.degree} ${education.major.split(/\s+/).filter(w => /^[A-Z]/.test(w)).map(w => w[0]).join('')} @ ${shortInstitution} '${education.duration.slice(-2)}${education.cgpa ? `, CGPA ${parseFloat(education.cgpa)}` : ''}` },
    { key: 'email', value: resume.contact.email, href: `mailto:${resume.contact.email}` }
]

const Experience = currentJob

// Each skill lists the resume projects that mention it, e.g. "AWS (Glue, S3, SQS)" -> ["Cloud Data Lakehouse & Orchestration"]
const mentions = (text, term) => new RegExp(`(^|[^\\w])${term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}([^\\w]|$)`).test(text)
const Skills = resume.skills.map(group => ({
    category: group.category,
    items: group.items.map(item => {
        const inner = (item.match(/\((.*)\)/) || [])[1]
        const terms = [item.replace(/\s*\(.*\)/, ''), ...(inner ? inner.split(',').map(t => t.trim()) : [])]
        return {
            name: item,
            usedIn: resume.experience.flatMap(job => job.highlights)
                .filter(h => terms.some(t => h.stack.some(s => mentions(s, t)) || mentions(h.description, t)))
                .map(h => h.title)
        }
    })
}))

const Publication = resume.publications[0]

const resumeURL = 'https://drive.google.com/drive/folders/1pBx5NCZQHfO03B6_KwW0ZucMvpU2-8tG?usp=sharing'

// Hand-written; role and company come from the resume so a promotion updates them
const aboutMe = [
    `I am ${Profile.firstName}. By day (and occasionally during release weeks, by night) I am a ${currentRole.title} at ${currentJob.company} in ${city}, building the systems behind equity trading and risk.`,
    `My favourite kind of work is making slow things embarrassingly fast. A regulatory report that used to take 2 hours now finishes in 2 minutes, and audit evidence that ate up two whole days now shows up in five minutes, courtesy of an AI agent that, unlike me, never needs a coffee break.`,
    `I trained as an Electronics engineer at NIT Durgapur, wandered into software through a hackathon, and never found the exit. Outside of work I am still the same social person who loves new challenges, new people, and debating tabs vs spaces with anyone who has five minutes.`
]
export { navigations, Skills, Interests, resumeURL, Info, aboutMe, Experience, Publication, Profile }
