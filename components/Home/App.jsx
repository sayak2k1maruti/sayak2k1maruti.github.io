import React, { useEffect, useRef, useState } from 'react'
import ReactTyped from 'react-typed'
import { navigations } from '../../data/data'
import Footer from '../Footer/Footer'
import Landing from './Landing'
import Laptop from './Laptop'
import SidePane from '../Sidepanes/SidePane'
import About from '../About/About'
import Skills from '../Skills/skills'
import jerry from '../../assets/gifs/jerry.gif'
import GoToTop from '../GoToTop/gototop'
import ReactVisibilitySensor from 'react-visibility-sensor'
import UpArrow from '../Arrows/upArrow'
import Link from 'next/link'

const App = ({ sidePane, setSidePaneStatus }) => {

    const [bgColor, setBgColor] = useState('splash')
    const [sttVisible, setSttVisible] = useState(false)
    const about = useRef()
    const thankYou = useRef()
    const laptop = useRef()
    const div = useRef()
    const chnageBg = (color) => {
        setBgColor(color)
    }

    const handleSidePaneOpen = (name) => {
        const sidePaneStatus = {
            status: true,
            component: name
        }
        setSidePaneStatus(sidePaneStatus)
    }
    const handleSidePaneClose = () => {
        if (!sidePane.status)
            return
        setSidePaneStatus({ ...sidePane, status: false })
    }

    useEffect(() => {
        window.addEventListener('scroll', () => {

            if (about.current && thankYou.current && laptop.current) {
                if (thankYou.current.getBoundingClientRect().y < 50) {
                    setSttVisible(false)
                    chnageBg('dark-100')
                } else if (about.current.getBoundingClientRect().y < 70) {
                    chnageBg('white')
                    setSttVisible(true)
                } else if (laptop.current.getBoundingClientRect().y < 50) {
                    chnageBg('dark-200')
                    setSttVisible(true)
                } else {
                    chnageBg('dark-100')
                    setSttVisible(false)
                }
            }
        }, true)
    }, [])
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    }
    return (
        <div className='w-screen ' >

            <div onClick={scrollToTop} className='w-20 h-20 text-neutral-500 hover:text-neutral-600 fixed right-[7vw] bottom-10 animate-bounce z-50'>
                {sttVisible ? <UpArrow /> : ''}
            </div>
            {sidePane.status ? <SidePane sidePane={sidePane} setSidePaneStatus={setSidePaneStatus} /> : ""}

            <div className='fixed flex flex-col items-center right-0 w-[5vw] min-h-screen bg-lime-300'>
                {
                    navigations.map((item, key) => (
                        <nav name={item} className='text-[2vw] cursor-pointer text-neutral-900 font-bold hover:text-neutral-400 transition duration-500 pt-[.5vw] mt-[2.5vw] ' key={key} style={{ writingMode: 'vertical-lr' }}>
                            <Link href={item}>
                                {item}
                            </Link>
                        </nav>
                    ))
                }
            </div>

            <div onClick={handleSidePaneClose} className={`bg-${bgColor} transition-colors duration-1000 w-screen h-auto flex flex-col align-middle justify-center items-center pr-[5vw]`}>

                <Landing />

                <div ref={laptop}>
                    <Laptop />
                </div>

                <div ref={about}>
                    <About />
                </div>


                <img ref={thankYou} src={jerry.src} className='sm:w-[35vw] sm:h-[35vw] rounded-full hover:-translate-y-10 transition-all duration-500 mt-[10vw] mb-10'></img>

                <Footer />
            </div>

        </div >
    )
}


export default App