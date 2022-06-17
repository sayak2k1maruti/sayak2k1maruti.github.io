import React, { useRef } from 'react'
import ReactTyped from 'react-typed'
import DownArrow from '../Arrows/downArrow'
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
            <div className='flex-flex-col leading-none text-light-100 mt-[-15%] align-center justify-center'>
                <p className='text-white text-[5vw] font-bold font-mono'>
                    Hi, I am Sayak
                </p>
                <p className='text-white font-serif font-normal w-[10em] overflow-x-show text-left py-[2.5vw] text-[4vw]'>
                    I am a &nbsp;
                    <ReactTyped
                        strings={[
                            "<span class='text-highlight-100 font-extrabold'>Student</span>",
                            "<span class='text-highlight-100 font-extrabold'>Developer</span></span>",
                            "<span class='text-highlight-100 font-extrabold'>Coder</span>",
                        ]}
                        typeSpeed={100}
                        backSpeed={50}
                        backDelay={1}
                        loop
                        smartBackspace
                    />
                </p >
            </div >
            <button onClick={handleScrollToNext} className='text-gray-50 hover:text-gray-600 animate-bounce transition-colors duration-300 absolute h-20 w-20 right-[8vw] bottom-24'>
                <DownArrow />
            </button>
        </div >
    )
}

export default Landing