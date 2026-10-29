import Link from 'next/link'
import React from 'react'

// Shortcuts to the side panes before the goodbye; each tile echoes its pane's own heading
const panes = [
    { href: '/work', small: 'Featured', big: 'Work', note: 'JPMorgan projects & college side projects' },
    { href: '/skill', small: 'What I Know', big: 'Skills', note: 'Languages, frameworks, data, AI & cloud' },
    { href: '/contact', small: 'Ask Me Anything', big: 'Contact', note: 'Say Hello, Namaste or Bonjour' }
]

const QuickLinks = () => {
    return (
        <div className='w-full px-[5vw] pt-[2.5vw]'>
            <h2 className='text-[length:max(28px,4vw)] font-thin mb-[1.5vw]'>Before you go...</h2>
            <div className='flex flex-col sm:flex-row gap-[max(16px,2vw)]'>
                {
                    panes.map((pane, key) => (
                        <Link href={pane.href} key={key} scroll={false}>
                            <a className='group flex-1 flex flex-col bg-dark-300 text-white rounded-lg p-[max(20px,2vw)] shadow-lg hover:-translate-y-2 hover:shadow-xl transition-all duration-500'>
                                <span className='text-[length:max(16px,1.5vw)] font-thin text-neutral-400'>{pane.small}</span>
                                <span className='text-[length:max(36px,4.5vw)] leading-none font-bold text-highlight-100 my-[max(8px,.75vw)]'>{pane.big}</span>
                                <span className='mt-auto flex flex-row items-center justify-between text-[length:max(14px,1.1vw)] text-neutral-300'>
                                    {pane.note}
                                    <svg xmlns="http://www.w3.org/2000/svg" className="shrink-0 ml-3 w-[max(28px,2.5vw)] h-[max(28px,2.5vw)] text-neutral-500 group-hover:text-lime-300 group-hover:translate-x-1 transition-all duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </span>
                            </a>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default QuickLinks
