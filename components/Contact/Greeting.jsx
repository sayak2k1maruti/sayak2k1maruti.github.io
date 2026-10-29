import React, { useEffect, useState } from 'react'

const greetings = ['Hello', 'নমস্কার', 'Namaste', 'Bonjour']

// Rotates the greeting by sliding each word up into place, in the site's heading style
const Greeting = () => {
    const [index, setIndex] = useState(0)
    useEffect(() => {
        const timer = setInterval(() => setIndex(i => (i + 1) % greetings.length), 2200)
        return () => clearInterval(timer)
    }, [])
    return (
        <span className='inline-block overflow-hidden align-bottom leading-[1.15]'>
            <span key={index} className='greeting inline-block text-white'>
                {greetings[index]}<span className='text-highlight-100'>,</span>
            </span>
            <style jsx>{`
                .greeting {
                    animation: greetingIn 600ms cubic-bezier(.2, .8, .2, 1);
                }
                @keyframes greetingIn {
                    from { transform: translateY(100%); opacity: 0; }
                    to { transform: translateY(0); opacity: 1; }
                }
            `}</style>
        </span>
    )
}

export default Greeting
