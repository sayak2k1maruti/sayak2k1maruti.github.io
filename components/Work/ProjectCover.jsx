import React from 'react'
import Terminal from '../Terminal/Terminal'

// Cover art for projects that have no screenshot: a dark terminal window built from the resume entry
const ProjectCover = ({ work }) => {
    const slug = work.title.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
    return (
        <Terminal title={`~/jpmc/${slug}`} className='w-full aspect-[16/10]'>
            <div className='flex-1 flex flex-col justify-center px-[max(24px,2.5vw)] text-neutral-300'>
                <p className='text-[length:max(12px,.95vw)] text-neutral-500'>$ cat impact.txt</p>
                <p className='text-[length:max(20px,2.4vw)] leading-tight font-bold text-lime-400 my-[.6vw]'>
                    {work.metrics[0] || work.tag || work.title}
                </p>
                {
                    work.stack.length ?
                        <>
                            <p className='text-[length:max(12px,.95vw)] text-neutral-500'>$ ls stack/</p>
                            <p className='text-[length:max(12px,1vw)] leading-[max(20px,1.5vw)] text-pink-400'>{work.stack.join('  ')}</p>
                        </>
                        :
                        <p className='text-[length:max(12px,1vw)] leading-[max(20px,1.5vw)] text-pink-400'>{work.title}</p>
                }
                <span className='animate-pulse text-neutral-300'>_</span>
            </div>
        </Terminal>
    )
}

export default ProjectCover
