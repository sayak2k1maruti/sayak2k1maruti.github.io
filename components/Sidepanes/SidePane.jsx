import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useRef } from 'react'
import Contact from '../Contact/contact'
import GoToTop from '../GoToTop/gototop'
import Skills from '../Skills/skills'
import Work from '../Work/Work'

const SidePane = ({ sidePane, setSidePaneStatus }) => {
    const router = useRouter()
    const divRef = useRef()
    const handleClose = () => {
        setSidePaneStatus({ ...sidePane, status: false })
        router.push('/')
    }
    let component = undefined
    switch (sidePane.component) {
        case 'Skill': component = <Skills parentDiv={divRef} />; break;
        case 'Work': component = <Work parentDiv={divRef} />; break;
        case 'Contact': component = <Contact />; break;
        case 'default': component = <></>; break;
    }
    return (
        <div ref={divRef} className='sm:animate-openSidePane z-[1000] fixed overflow-y-scroll scroll-smooth sm:left-[10%] left-0  right-0 shadow-xl h-screen bg-dark-300'>
            <Link href={'/'}>
                <button className="h-20 w-20  absolute left-5 top-5 mb-5 cursor-pointer text-neutral-500 hover:text-neutral-700 transition-colors duration-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </Link>

            <span className='text-neutral-500'>
                <GoToTop div={divRef} />
            </span>
            {
                component
            }
        </div>
    )
}

export default SidePane