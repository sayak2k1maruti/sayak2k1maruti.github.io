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
        <div className={`p-20 transition-colors duration-1000 w-full flex flex-col bg-${bgColor}`}>
            <h1 className='my-5 text-6xl font-thin'>
                What I Know
            </h1>
            <div ref={intro} className='p-5 flex flex-row w-full items-center'>
                <div className='w-1/2'>
                    <h2 className='my-3  text-9xl font-bold'>
                        My Skills
                    </h2>
                    <p className='p-2 text-2xl'>
                        Here are some key skills that I have. For more details and find everything please go through my <a rel="noreferrer" href='https://docs.google.com/document/d/1awwHGpyhRx_0ocPTWBBQbTb2IhQZgLTU/' target="_blank" className='font-bold hover:opacity-70 transition-opacity duration-300'>Resume</a>
                    </p>

                </div>
                <img className='w-1/2 shadow-sm' src={skillImg.src}></img>

            </div>
            <div className='flex flex-row flex-wrap  my-10' >
                {
                    KeySkills.map((item, key) =>
                        <SkillBar name={item.name} progress={item.progress} key={key} />
                    )
                }
            </div>

            <div className='my-10'>
                <h1 className='my-5 text-neutral-100 text-6xl font-thin'>
                    Interests
                </h1>
                <div className='flex flex-row flex-wrap my-5'>
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