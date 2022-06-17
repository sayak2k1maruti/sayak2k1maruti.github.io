import React, { useRef, useState, useEffect } from 'react'
import skillImg from '../../assets/images/skills.jpg'
import Badge from './badge'
import SkillBar from './skillBar'
import { Interests, KeySkills } from '../../data/data'


const Skills = ({ parentDiv }) => {
    const intro = useRef()
    const [bgColor, setBgColor] = useState('white')
    const handleScroll = () => {
        if (intro.current && parentDiv.current) {
            if (intro.current.getBoundingClientRect().height - parentDiv.current.scrollTop < 100) {
                setBgColor('dark-300')
            } else {
                setBgColor('white')
            }
        }
    }
    useEffect(() => {
        parentDiv.current.addEventListener('scroll', handleScroll)
    })
    return (
        <div className={`p-20 transition-colors leading-none duration-1000 w-full flex flex-col bg-${bgColor}`}>
            <h1 className='my-5 text-[5.5vw] font-thin'>
                What I Know
            </h1>
            <div ref={intro} className='p-[1.25vw] flex flex-row  w-full items-center'>
                <div className='w-1/2'>
                    <h2 className='my-[.75vw]  text-[10vw] font-bold'>
                        My Skills
                    </h2>
                    <p className='p-[.5vw] text-[1.8vw] leading-[2vw]'>
                        Here are some key skills that I have. For more details and find everything please go through my <a rel="noreferrer" href='https://docs.google.com/document/d/1awwHGpyhRx_0ocPTWBBQbTb2IhQZgLTU/' target="_blank" className='font-bold hover:opacity-70 transition-opacity duration-300'>Resume</a>
                    </p>

                </div>
                <img className='w-1/2 shadow-sm' src={skillImg.src}></img>

            </div>
            <div className='flex flex-row flex-wrap  my-[2.5vw]' >
                {
                    KeySkills.map((item, key) =>
                        <SkillBar name={item.name} progress={item.progress} key={key} />
                    )
                }
            </div>

            <div className='my-[2.5vw]'>
                <h1 className='my-[1.25vw] text-neutral-100 text-[6vw] font-thin'>
                    Interests
                </h1>
                <div className='flex flex-row flex-wrap my-[1.25vw]'>
                    {
                        Interests.map((item, key) =>
                            <Badge name={item} key={key} />
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Skills