import React, { useRef, useState, useEffect } from 'react'
import skillImg from '../../assets/images/skills.jpg'
import Badge from './badge'
import SkillGroup from './skillGroup'
import { Interests, Skills as SkillGroups, resumeURL } from '../../data/data'


const Skills = ({ parentDiv }) => {
    const intro = useRef()
    const [bgColor, setBgColor] = useState('white')
    const handleScroll = () => {
        if (intro.current && parentDiv.current) {
            if (intro.current.getBoundingClientRect().bottom < window.innerHeight / 2) {
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
        <div className={`p-6 sm:p-20 transition-colors leading-none duration-1000 w-full flex flex-col bg-${bgColor}`}>
            <h1 className='my-5 text-[length:max(36px,5.5vw)] font-thin'>
                What I Know
            </h1>
            <div ref={intro} className='p-[1.25vw] flex flex-col sm:flex-row w-full items-center'>
                <div className='w-full sm:w-1/2'>
                    <h2 className='my-[.75vw]  text-[length:max(36px,10vw)] font-bold'>
                        My Skills
                    </h2>
                    <p className='p-[.5vw] text-[length:max(16px,1.8vw)] leading-[max(24px,2vw)]'>
                        Here are the key skills I use day to day building trading, data and AI platforms. For more details and find everything please go through my <a rel="noreferrer" href={resumeURL} target="_blank" className='font-bold hover:opacity-70 transition-opacity duration-300'>Resume</a>
                    </p>

                </div>
                <img alt='Love to learn sign' className='w-full sm:w-1/2 mt-6 sm:mt-0 shadow-sm' src={skillImg.src}></img>

            </div>
            <div className='flex flex-row flex-wrap  my-[2.5vw]' >
                {
                    SkillGroups.map((group, key) =>
                        <SkillGroup category={group.category} items={group.items} key={key} />
                    )
                }
            </div>

            <div className='my-[2.5vw]'>
                <h1 className='my-[1.25vw] text-neutral-100 text-[length:max(36px,6vw)] font-thin'>
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