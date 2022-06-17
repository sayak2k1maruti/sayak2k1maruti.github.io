import React, { useRef } from 'react'
import DownArrow from '../Arrows/downArrow'
import Discover from './discover'

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
        <div ref={thisDiv} className='flex w-full flex-row odd:flex-row-reverse p-[2.6vw] mb-5 justify-center items-center'>
            {
                (index !== total) ?
                    <div onClick={handleScrollDown} className='w-20 h-20 opacity-50 animate-bounce'>
                        <DownArrow />
                    </div>
                    :
                    ""
            }
            <div className='w-[50%] h-auto shadow-lg overflow-hidden'>
                <img className="scale-110 w-full transition duration-300 hover:scale-100" src={work.img} alt={`representative image`}></img>
            </div>
            <div className='w-[50%] p-[2.5vw]'>
                <p className='text-[.87vw] text-zinc-600 font-bold'>{index}/{total}</p>
                <h3 className='font-normal text-zinc-700 text-[4vw] py-[.7vh]'>{work.title}</h3>
                <p className='py-5 text-[1.2vw] opacity-60 hover:opacity-100 transition-opacity duration-300'>{work.description}</p>
                <Discover url={work.url} />
            </div>
        </div>
    )
}

export default WorkCard