import React, { useEffect, useRef, useState } from 'react'
import ReactTyped from 'react-typed'
import { Works } from '../../data/works'
import WorkCard from './WorkCard'
import workingImage from '../../assets/images/working.jpg'
import workingTableImage from '../../assets/images/workingTable.jpg'
import DownArrow from '../Arrows/downArrow'


const Work = ({ parentDiv }) => {
    const intro = useRef()
    const [bgColor, setBgColor] = useState('dark-300')
    const handleScroll = () => {
        if (intro.current && parentDiv.current) {
            if (intro.current.getBoundingClientRect().height - parentDiv.current.scrollTop < 50) {
                setBgColor('light-200')
            } else {
                setBgColor('dark-300')
            }
        }
    }
    useEffect(() => {
        parentDiv.current.addEventListener('scroll', handleScroll)
    })
    const handleBgChange = (isVisible) => {
        console.log('shdghsgdfsdhgf')
        if (isVisible)
            console.log('visible')
    }

    const handleScrollDown = () => {
        parentDiv.current.scrollTo({
            top: 500,
            left: 0,
            behavior: 'smooth'
        })
    }
    return (
        <div className={`w-full transition-colors duration-1000 pt-10  bg-${bgColor}`}  >

            <div ref={intro} className='flex justify-center items-center flex-col lg:flex-row-reverse'>
                <img src={workingTableImage.src} className="w-[60%] p-10 hover:-translate-y-10 transition-all duration-500"></img>
                <div className='w-[40%] text-zinc-100 flex flex-col items-center'>
                    <h2 className='px-20 text-8xl font-normal m-3 py-5'>
                        Featured
                        <br />
                        <ReactTyped
                            strings={[
                                "<span class='text-7xl text-lime-400 font-bold'>Works</span>",
                                "<span class='text-7xl text-lime-400 font-bold'>Projects</span></span>"
                            ]}
                            typeSpeed={100}
                            backSpeed={50}
                            backDelay={1}
                            loop
                            smartBackspace
                        />
                    </h2>
                    <p className='p-10 text-3xl w-full text-left'>
                        Experiences on
                        <br />
                        <ReactTyped
                            strings={[
                                "<span class='text-pink-400 font-bold'>Full Stack Development</span>",
                                "<span class='text-pink-400 font-bold'>Android Development</span></span>",
                                "<span class='text-pink-400 font-bold'>and Others</span>",
                            ]}
                            typeSpeed={50}
                            backSpeed={50}
                            backDelay={1}
                            loop
                            smartBackspace
                        />
                    </p>
                    <div onClick={handleScrollDown} className='w-20 h-20 opacity-60 hover:opacity-90 animate-bounce' >
                        <DownArrow />
                    </div>
                </div>
            </div>
            <div className='flex flex-col align-center items-center'>
                {
                    Works.data.map((item, key) => (
                        <WorkCard parentDiv={parentDiv} work={item} total={Works.total} index={key + 1} key={key} />
                    ))
                }
            </div>
        </div>
    )
}

export default Work