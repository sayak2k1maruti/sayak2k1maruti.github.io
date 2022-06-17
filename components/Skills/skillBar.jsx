import React, { useState } from 'react'
import VisibilitySensor from 'react-visibility-sensor'

const SkillBar = ({ name, progress }) => {
    const [visibleProgress, setVisibleProgress] = useState(`${0}%`)
    const callback = (isVisible) => {
        console.log("d")
        if (isVisible)
            setVisibleProgress(`${progress}%`)
        else
            setVisibleProgress(`${0}%`)
    }
    return (
        <VisibilitySensor onChange={callback}>
            <div className='sm:w-1/2 w-full py-[1.3vw] px-[2.5vw]'>
                <div className='flex text-[1.2vw] leading-[1.4vw] text-neutral-300 font-bold flex-row justify-between'>
                    <p>
                        {name}
                    </p>
                    <p>
                        {`${progress}%`}
                    </p>
                </div>
                <div className="w-full h-[1.5vw] bg-gray-200 rounded-full dark:bg-gray-700">
                    <div className="h-[1.5vw] bg-green-500 rounded-full transition-all duration-1000" style={{ width: visibleProgress }}></div>
                </div>
            </div>
        </VisibilitySensor>
    )
}

export default SkillBar