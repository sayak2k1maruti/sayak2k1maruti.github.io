import React, { useRef } from 'react'
import ReactTyped from 'react-typed'
import DownArrow from '../Arrows/downArrow'
import { Profile } from '../../data/data'
const Landing = () => {
    const thisDiv = useRef()
    const handleScrollToNext = () => {
        window.scrollTo({
            top: thisDiv.current.getBoundingClientRect().height,
            behavior: 'smooth',
        });
    }
    return (
        <div ref={thisDiv} className='w-full flex flex-col align-center justify-center items-center h-screen'>
            <div className='flex-flex-col leading-none text-light-100 w-full sm:w-auto px-6 sm:px-0 mt-[-15%] align-center justify-center'>
                <p className='text-white text-[length:max(28px,5vw)] font-bold font-mono'>
                    Hi, I am {Profile.firstName}
                </p>
                <p className='text-white font-serif font-normal sm:w-[14em] whitespace-nowrap text-left py-[2.5vw] text-[22px] sm:text-[length:max(28px,4vw)]'>
                    I am a &nbsp;
                    <ReactTyped
                        strings={[
                            "<span class='text-highlight-100 font-extrabold'>Software Engineer</span>",
                            "<span class='text-highlight-100 font-extrabold'>Python Developer</span>",
                            "<span class='text-highlight-100 font-extrabold'>Backend Developer</span>",
                            "<span class='text-highlight-100 font-extrabold'>Problem Solver</span>",
                            "<span class='text-highlight-100 font-extrabold'>AI Builder</span>",
                            "<span class='text-highlight-100 font-extrabold'>Coder</span>",
                        ]}
                        typeSpeed={100}
                        backSpeed={50}
                        backDelay={1}
                        loop
                        smartBackspace
                    />
                </p >
                <p className='text-neutral-400 font-mono text-[14px] leading-snug sm:leading-none sm:text-[length:max(16px,1.6vw)]'>
                    {Profile.role} @ {Profile.company} &middot; {Profile.experience.toLowerCase()}
                </p>
                <button onClick={handleScrollToNext} className='group mt-[max(28px,3vw)] flex flex-row items-center gap-3 rounded-full border border-highlight-100 px-[max(18px,1.6vw)] py-[max(10px,.8vw)] text-left text-white hover:bg-highlight-100 hover:text-dark-100 transition-colors duration-500'>
                    <span className='text-[length:max(20px,1.8vw)]'>🎮</span>
                    <span className='text-[length:max(14px,1.25vw)] leading-snug'>
                        Don&apos;t miss my <b className='text-highlight-100 group-hover:text-dark-100 transition-colors duration-500'>interactive resume game</b><span className='hidden sm:inline'>, scroll down to play!</span><span className='sm:hidden'>, turn your phone sideways to play!</span>
                    </span>
                </button>
            </div >
            <button onClick={handleScrollToNext} className='text-gray-50 hover:text-gray-600 animate-bounce transition-colors duration-300 absolute h-20 w-20 right-[8vw] bottom-24'>
                <DownArrow />
            </button>
        </div >
    )
}

export default Landing