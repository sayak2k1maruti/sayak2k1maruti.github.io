import React, { useState } from 'react'
import VisibilitySensor from 'react-visibility-sensor'

const SkillGroup = ({ category, items }) => {
    const [visible, setVisible] = useState(false)
    return (
        <VisibilitySensor onChange={setVisible} partialVisibility>
            <div className='sm:w-1/2 w-full py-[1.3vw] px-[2.5vw]'>
                <p className='text-[length:max(16px,1.6vw)] leading-[max(24px,1.8vw)] text-neutral-300 font-bold mb-[.75vw]'>
                    {category}
                </p>
                <div className='flex flex-row flex-wrap -mx-[1.25vw]'>
                    {
                        items.map((item, key) => (
                            <span
                                key={key}
                                className={`group relative transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                                style={{ transitionDelay: visible ? `${key * 80}ms` : '0ms' }}
                            >
                                <span className="inline-block bg-green-100 text-green-800 text-[length:max(14px,1.2vw)] mx-[1.25vw] my-[.5vw] mr-[.5vw] px-[.7vw] py-[.4vw] font-semibold rounded cursor-default hover:bg-green-200 transition-colors duration-300">
                                    {item.name}
                                </span>
                                {
                                    item.usedIn.length ?
                                        <span className='pointer-events-none absolute z-10 left-[1.25vw] bottom-full w-max max-w-[22vw] bg-white text-neutral-700 text-[length:max(12px,.95vw)] leading-[max(20px,1.3vw)] p-[.6vw] rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                                            <b className='block text-highlight-100'>Used in</b>
                                            {item.usedIn.join(' · ')}
                                        </span>
                                        :
                                        ''
                                }
                            </span>
                        ))
                    }
                </div>
            </div>
        </VisibilitySensor>
    )
}

export default SkillGroup
