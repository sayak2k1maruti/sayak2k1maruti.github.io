import React from 'react'
import DownArrow from '../Arrows/downArrow'
import Discover from './discover'

const WorkCard = ({ work, index, total, parentDiv }) => {
    const handleScrollDown = () => {
        const currScroll = parentDiv.current.scrollTop
        const divHeight = 500
        parentDiv.current.scrollTo({
            top: currScroll + divHeight,
            left: 0,
            behavior: 'smooth'
        })
    }
    return (
        <div className='flex flex-row odd:flex-row-reverse p-10 mb-5 justify-center items-center'>
            {
                (index !== total) ?
                    <div onClick={handleScrollDown} className='w-20 h-20 opacity-50 animate-bounce'>
                        <DownArrow />
                    </div>
                    :
                    ""
            }
            <div className='w-[60%] shadow-lg overflow-hidden'>
                <img className="scale-110 w-full transition duration-300 hover:scale-100" src={work.img} alt={`representative image`}></img>
            </div>
            <div className='w-[40%] p-10'>
                <p className='text-sm text-zinc-600 font-bold'>{index}/{total}</p>
                <h3 className='font-normal text-zinc-700 text-5xl py-5'>{work.title}</h3>
                <p className='py-5 opacity-60 hover:opacity-100 transition-opacity duration-300'>{work.description}</p>
                <Discover url={work.url} />
            </div>
        </div>
    )
}

export default WorkCard