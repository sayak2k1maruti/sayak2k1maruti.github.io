import React, { useRef } from 'react'
import DownArrow from '../Arrows/downArrow'
import Badge from '../Skills/badge'
import Discover from './discover'
import ProjectCover from './ProjectCover'

const WorkCard = ({ work, index, total, parentDiv }) => {
    const thisDiv = useRef()
    const handleScrollDown = () => {
        const currScroll = parentDiv.current.scrollTop
        const divHeight = thisDiv.current.getBoundingClientRect().height
        parentDiv.current.scrollTo({
            top: currScroll + divHeight,
            left: 0,
            behavior: 'smooth'
        })
    }
    return (
        <div ref={thisDiv} className='flex w-full flex-col sm:flex-row sm:odd:flex-row-reverse p-[2.6vw] mb-5 justify-center items-center'>
            {
                (index !== total) ?
                    <div onClick={handleScrollDown} className='hidden sm:block w-20 h-20 opacity-50 animate-bounce'>
                        <DownArrow />
                    </div>
                    :
                    ""
            }
            <div className='w-full sm:w-[50%] h-auto shadow-lg overflow-hidden'>
                {
                    work.img ?
                        <img className="scale-110 w-full transition duration-300 hover:scale-100" src={work.img} alt={`Screenshot of ${work.title}`}></img>
                        :
                        <div className='scale-110 transition duration-300 hover:scale-100'>
                            <ProjectCover work={work} />
                        </div>
                }
            </div>
            <div className='w-full sm:w-[50%] p-[2.5vw] pt-4 sm:pt-[2.5vw]'>
                <p className='text-[length:max(12px,.87vw)] text-zinc-600 font-bold'>{index}/{total}</p>
                <h3 className='font-normal text-zinc-700 text-[length:max(28px,4vw)] leading-none py-[.7vh]'>{work.title}</h3>
                {work.tag ? <p className='text-[length:max(14px,1.1vw)] font-semibold text-pink-500 pt-[.5vw]'>{work.tag}</p> : ''}
                <p className='py-5 text-[length:max(14px,1.2vw)] opacity-60 hover:opacity-100 transition-opacity duration-300'>{work.description}</p>
                {
                    work.stack ?
                        <div className='flex flex-row flex-wrap -mx-[1.25vw] mb-[1vw]'>
                            {work.stack.map((tech, i) => <Badge name={tech} key={i} />)}
                        </div>
                        :
                        ''
                }
                {work.url ? <Discover url={work.url} /> : ''}
            </div>
        </div>
    )
}

export default WorkCard
