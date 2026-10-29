import React, { useState } from 'react'
import VisibilitySensor from 'react-visibility-sensor'
import Terminal from '../Terminal/Terminal'

// The About profile as `cat sayak.json`: keys in pink, strings in lime, numbers in amber; lines print in one by one
const ProfileCard = ({ fields }) => {
    const [visible, setVisible] = useState(false)
    const line = (key) => ({
        className: `transition-all duration-500 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'}`,
        style: { transitionDelay: visible ? `${key * 90}ms` : '0ms' }
    })
    return (
        <VisibilitySensor onChange={(isVisible) => isVisible && setVisible(true)} partialVisibility>
            <Terminal title='~/sayak — zsh' className='w-full rounded-lg overflow-hidden shadow-xl hover:-translate-y-2 transition-transform duration-500'>
                <div className='p-[max(18px,1.8vw)] text-[length:max(13px,1.15vw)] leading-[max(22px,1.9vw)] text-neutral-300 break-words'>
                    <p className='text-neutral-500'>$ cat sayak.json</p>
                    <p>{'{'}</p>
                    {
                        fields.map((field, key) => (
                            <p key={key} {...line(key)} className={`pl-[2ch] ${line(key).className}`}>
                                <span className='text-pink-400'>&quot;{field.key}&quot;</span>
                                <span className='text-neutral-500'>: </span>
                                {
                                    typeof field.value === 'number' ?
                                        <span className='text-amber-300'>{field.value}</span>
                                        :
                                        field.href ?
                                            <a href={field.href} className='text-lime-400 underline decoration-dotted underline-offset-4 hover:text-lime-200'>&quot;{field.value}&quot;</a>
                                            :
                                            <span className='text-lime-400'>&quot;{field.value}&quot;</span>
                                }
                                <span className='text-neutral-500'>{key < fields.length - 1 ? ',' : ''}</span>
                            </p>
                        ))
                    }
                    <p>{'}'}</p>
                    <p className='text-neutral-500'>$ <span className='animate-pulse text-neutral-300'>_</span></p>
                </div>
            </Terminal>
        </VisibilitySensor>
    )
}

export default ProfileCard
