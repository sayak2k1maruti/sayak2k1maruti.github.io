import React, { useEffect, useRef, useState } from 'react'
import ReactTyped from 'react-typed'
import { Works } from '../../data/works'
import { Experience, Publication } from '../../data/data'
import WorkCard from './WorkCard'
import workingImage from '../../assets/images/working.jpg'
import workingTableImage from '../../assets/images/workingTable.jpg'
import DownArrow from '../Arrows/downArrow'


const professional = Experience.highlights
const college = Works.data
const total = professional.length + college.length

const SectionTitle = ({ small, big, children }) => (
    <div className='w-full px-[5vw] pt-[5vw] pb-[1vw] leading-none text-zinc-700'>
        <h2 className='text-[length:max(20px,3vw)] font-thin'>{small}</h2>
        <h3 className='text-[length:max(36px,6vw)] font-bold my-[.75vw]'>{big}</h3>
        {children}
    </div>
)

const Work = ({ parentDiv }) => {
    const intro = useRef()
    const [bgColor, setBgColor] = useState('dark-300')
    const handleScroll = () => {
        if (intro.current && parentDiv.current) {
            if (intro.current.getBoundingClientRect().bottom < window.innerHeight / 2) {
                setBgColor('light-200')
            } else {
                setBgColor('dark-300')
            }
        }
    }
    useEffect(() => {
        parentDiv.current.addEventListener('scroll', handleScroll)
    })
    const handleScrollDown = () => {
        parentDiv.current.scrollTo({
            top: intro.current.getBoundingClientRect().height + 100,
            left: 0,
            behavior: 'smooth'
        })
    }
    return (
        <div className={`w-full transition-colors duration-1000 pt-10  bg-${bgColor}`}  >

            <div ref={intro} className='flex h-screen justify-center items-center flex-col lg:flex-row-reverse'>
                <img src={workingTableImage.src} alt="Laptops on a work table" className="w-full lg:w-[60%] p-[2.5vw] hover:-translate-y-10 transition-all duration-500"></img>
                <div className='w-full lg:w-[40%] leading-none text-zinc-100 flex flex-col items-center'>
                    <h2 className='px-6 sm:px-20 text-[length:max(36px,8vw)] font-normal m-[.8vw] py-[1.25vw]'>
                        Featured
                        <br className='text-8xl' />
                        <span className='text-[length:max(36px,7vw)] text-lime-400 font-bold'>Work</span>
                    </h2>
                    <p className='p-[2.5vw] text-[length:max(20px,2.5vw)] w-full text-left'>
                        Experiences on
                        <br />
                        <ReactTyped
                            strings={[
                                "<span class='text-pink-400 font-bold'>Distributed Systems</span>",
                                "<span class='text-pink-400 font-bold'>Data Engineering</span>",
                                "<span class='text-pink-400 font-bold'>Agentic AI</span>",
                                "<span class='text-pink-400 font-bold'>Full Stack Development</span>",
                            ]}
                            typeSpeed={50}
                            backSpeed={50}
                            backDelay={1}
                            loop
                            smartBackspace
                        />
                    </p>
                    <div onClick={handleScrollDown} className='w-[5vw] h-[5vw] opacity-60 hover:opacity-90 animate-bounce' >
                        <DownArrow />
                    </div>
                </div>
            </div>
            <SectionTitle small='Professional' big={Experience.company}>
                <div className='flex flex-row flex-wrap mt-[2vw]'>
                    {
                        Experience.roles.map((role, key) => (
                            <div key={key} className='border-l-4 border-highlight-100 pl-[1vw] mr-[4vw] mb-[1vw]'>
                                <p className='text-[length:max(16px,1.6vw)] font-bold'>{role.title}</p>
                                <p className='text-[length:max(14px,1.1vw)] text-zinc-500 mt-[.4vw]'>{role.duration}</p>
                            </div>
                        ))
                    }
                </div>
            </SectionTitle>
            <div className='flex flex-col align-center items-center'>
                {
                    professional.map((item, key) => (
                        <WorkCard parentDiv={parentDiv} work={item} total={total} index={key + 1} key={key} />
                    ))
                }
            </div>
            <SectionTitle small='From college days' big='Side Projects' />
            <div className='flex flex-col align-center items-center'>
                {
                    college.map((item, key) => (
                        <WorkCard parentDiv={parentDiv} work={item} total={total} index={professional.length + key + 1} key={key} />
                    ))
                }
            </div>
            <SectionTitle small='Research' big='Publication'>
                <p className='text-[length:max(14px,1.4vw)] leading-[max(24px,2vw)] font-normal mt-[1.5vw] pb-[5vw]'>
                    {Publication.authors}, <a rel="noreferrer" href={Publication.url} target='_blank' className='font-bold hover:opacity-70 transition-opacity duration-300'>&ldquo;{Publication.title}&rdquo;</a>, <i>{Publication.venue}</i>, {Publication.year}.
                </p>
            </SectionTitle>
        </div>
    )
}

export default Work