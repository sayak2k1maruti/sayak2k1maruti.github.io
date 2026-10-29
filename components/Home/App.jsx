import React, { useEffect, useRef, useState } from 'react'
import ReactTyped from 'react-typed'
import { navigations } from '../../data/data'
import Footer from '../Footer/Footer'
import Landing from './Landing'
import Laptop from './Laptop'
import SidePane from '../Sidepanes/SidePane'
import About from '../About/About'
import QuickLinks from './QuickLinks'
import jerry from '../../assets/gifs/jerry.gif'
import UpArrow from '../Arrows/upArrow'
import Link from 'next/link'
import { useRouter } from 'next/router'

const App = ({ sidePane }) => {
    const router = useRouter()
    const [bgColor, setBgColor] = useState('splash')
    const [sttVisible, setSttVisible] = useState(false)
    const about = useRef()
    const thankYou = useRef()
    const laptop = useRef()
    const div = useRef()
    const chnageBg = (color) => {
        setBgColor(color)
    }

    // const handleSidePaneOpen = (name) => {
    //     const sidePaneStatus = {
    //         status: true,
    //         component: name
    //     }
    //     setSidePaneStatus(sidePaneStatus)
    // }
    const handleSidePaneClose = () => {
        if (!sidePane.status)
            return
        router.push('/')
    }

    useEffect(() => {
        window.addEventListener('scroll', () => {

            if (about.current && thankYou.current && laptop.current) {
                // go dark once Jerry is halfway up the screen; the page bottom can't scroll his top much higher
                if (thankYou.current.getBoundingClientRect().y < window.innerHeight / 2) {
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

            <div onClick={scrollToTop} className='w-12 h-12 sm:w-20 sm:h-20 text-neutral-500 hover:text-neutral-600 fixed right-[max(48px,7vw)] bottom-10 animate-bounce z-50'>
                {sttVisible ? <UpArrow /> : ''}
            </div>
            {sidePane.status ? <SidePane sidePane={sidePane} /> : ""}

            <div className='fixed flex flex-col items-center top-0 bottom-0 right-0 w-[max(36px,5vw)] min-h-screen h-[100lvh] bg-lime-300 z-40'>
                {
                    navigations.map((item, key) => (
                        <nav name={item} className='text-[length:max(16px,2vw)] cursor-pointer text-neutral-900 font-bold hover:text-neutral-400 transition duration-500 pt-[.5vw] mt-[2.5vw] ' key={key} style={{ writingMode: 'vertical-lr' }}>
                            <Link href={`/${item.toLowerCase()}`}>
                                {item}
                            </Link>
                        </nav>
                    ))
                }
            </div>

            <div onClick={handleSidePaneClose} className={`bg-${bgColor} ${bgColor === 'dark-100' ? 'text-neutral-200' : 'text-black'} transition-colors duration-1000 w-screen h-auto flex flex-col align-middle justify-center items-center pr-[max(36px,5vw)]`}>

                <Landing />

                <div ref={laptop} className='w-full flex justify-center'>
                    <Laptop />
                </div>

                <div ref={about}>
                    <About />
                    <QuickLinks />
                </div>


                <img ref={thankYou} alt='Jerry waving goodbye' src={jerry.src} className='sm:w-[35vw] sm:h-[35vw] rounded-full hover:-translate-y-10 transition-all duration-500 mt-[10vw] mb-10'></img>

                <Footer />
            </div>

        </div >
    )
}


export default App