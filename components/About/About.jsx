import React from 'react'
import minion from '../../assets/images/minion.png'
import selfie from '../../assets/images/selfie.jpg'
import { resumeURL, Info, aboutMe, Profile } from '../../data/data'
import SocialAccounts from '../Contact/SocialAccounts'
import ProfileCard from './ProfileCard'


const About = () => {
    return (
        <div className='p-[5vw] w-full flex flex-col'>
            <h1 className='my-[1.25vw] text-[length:max(36px,6vw)] font-thin'>
                About Me
            </h1>
            <div className='p-[1.25vw] flex flex-col sm:flex-row leading-none w-full items-center'>
                <div className='w-full sm:w-1/2'>
                    <h2 className='my-[.75vw] text-[length:max(36px,9vw)] font-bold'>
                        Hello There
                    </h2>
                    <div className='p-[.5vw] px-[1.5vw] leading-[max(28px,2.5vw)] font-thin text-left sm:text-justify text-[length:max(16px,1.7vw)]'>
                        {
                            aboutMe.map((paragraph, key) => (
                                <p key={key} className='mb-[max(12px,1.2vw)]'>{paragraph}</p>
                            ))
                        }
                        <SocialAccounts />
                    </div>
                </div>
                <img alt='Minion figurine' className='hidden sm:block w-full sm:w-1/2 mt-6 sm:mt-0 hover:-translate-y-10 transition-all duration-500 shadow-sm' src={minion.src}></img>
            </div>
            <div className='p-[1.25vw] my-[2.5vw] flex flex-col sm:flex-row w-full items-center'>
                <div className='w-full sm:w-[35%] hover:-translate-y-10 transition-all duration-500 flex flex-row items-center justify-center'>
                    <img className='rounded-full object-cover w-[max(200px,30vw)] h-[max(200px,30vw)]' alt="Sayak Das" src={selfie.src} />
                </div>
                <div className='w-full sm:w-[65%] flex flex-col mt-6 sm:mt-0 sm:pl-[5vw] justify-center'>
                    <ProfileCard fields={Info} />
                    <a rel="noreferrer" className='w-[12em] font-bold mt-[2.5vw] bg-highlight-200  text-[length:max(14px,1.25vw)] text-white hover:bg-green-700 transition-colors cursor-pointer duration-500 rounded-lg px-[2.5vw] py-[.5vw]' href={resumeURL} target='_blank'>
                        Download CV
                    </a>
                </div>
            </div>
            <p className='leading-[max(26px,2.6vw)] text-[length:max(16px,1.8vw)] w-full'>
                Thanks for scrolling this far! The quickest way to reach me is <a href={`mailto:${Profile.email}`} className="text-blue-500">{Profile.email}</a>, and I promise to reply faster than those reports used to run.
            </p>
        </div>
    )
}

export default About