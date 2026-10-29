import React from 'react'

// Dark terminal window with traffic-light dots, shared by the project covers and the About profile
const Terminal = ({ title, className = '', children }) => {
    return (
        <div className={`bg-dark-300 flex flex-col font-mono ${className}`}>
            <div className='flex flex-row items-center px-[max(20px,1vw)] py-[max(8px,.6vw)] bg-dark-200'>
                <span className='w-[max(8px,.7vw)] h-[max(8px,.7vw)] rounded-full bg-rose-400 mr-[max(4px,.4vw)]'></span>
                <span className='w-[max(8px,.7vw)] h-[max(8px,.7vw)] rounded-full bg-amber-400 mr-[max(4px,.4vw)]'></span>
                <span className='w-[max(8px,.7vw)] h-[max(8px,.7vw)] rounded-full bg-lime-400 mr-[max(10px,1vw)]'></span>
                <span className='text-[length:max(12px,.8vw)] text-neutral-500 truncate'>{title}</span>
            </div>
            {children}
        </div>
    )
}

export default Terminal
