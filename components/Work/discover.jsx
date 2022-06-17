import Link from 'next/link'
import React from 'react'

const Discover = ({ url }) => {
    return (
        <a rel="noreferrer" href={`${url}`} target="_blank" className="flex pl-5 w-[15vw] flex-row items-center justify-between transition-[width] duration-500 hover:w-[12vw] hover:text-neutral-600 text-white"  >
            <p className='text-[1.50vw] text-neutral-600'>
                Discover
            </p>
            <p className='w-[70px] h-[70px]'>
                <svg height="75px" width="px" className='absolute'>
                    <circle cx="32" cy="32" r="32" stroke="#ccc" strokeWidth="1" fill="currentColor" strokeLinecap="round" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="absolute h-[65px] w-[50px] ml-[6px] z-100" fill="none" viewBox="0 0 24 24" stroke="#999" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
            </p>
        </a>
    )
}

export default Discover