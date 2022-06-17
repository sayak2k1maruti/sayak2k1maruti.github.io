import React from 'react'
import ReactTyped from 'react-typed'
import DownArrow from '../Arrows/downArrow'
const Landing = () => {
    const handleScrollToNext = () => {
        window.scrollTo({
            top: 740,
            behavior: 'smooth',
        });
    }
    return (
        <div className='w-full flex flex-col align-center justify-center items-center h-screen'>
            <div className='flex-flex-col text-light-100 mt-[-15%] align-center justify-center'>
                <p className='text-white text-6xl font-bold font-mono'>
                    Hi, I am Sayak
                </p>
                <p className='text-white font-serif font-normal w-[10em] overflow-x-show text-left py-10 text-5xl'>
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
            <button onClick={handleScrollToNext} className='text-gray-50 hover:text-gray-600 animate-bounce transition-colors duration-300 absolute h-20 w-20 right-24 bottom-24'>
                <DownArrow />
            </button>
        </div >
    )
}

export default Landing