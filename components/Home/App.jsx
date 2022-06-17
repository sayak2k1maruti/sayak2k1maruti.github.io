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
const defaultSidePane = {
    status: false,
    component: 'About'
}
const App = () => {

    const [bgColor, setBgColor] = useState('splash')
    const about = useRef()
    const thankYou = useRef()
    const laptop = useRef()

    const chnageBg = (color) => {
        console.log('abs')
        console.log('triggered')
        setBgColor(color)
    }
    const [sidePane, setSidePaneStatus] = useState(defaultSidePane)
    const handleSidePaneOpen = (name) => {
        const sidePaneStatus = {
            status: true,
            component: name
        }
        setSidePaneStatus(sidePaneStatus)
    }
    const handleSidePaneClose = () => {
        console.log('entered')
        if (!sidePane.status)
            return
        setSidePaneStatus({ ...sidePane, status: false })
    }

    useEffect(() => {
        window.addEventListener('scroll', () => {

            if (about.current && thankYou.current && laptop.current) {
                if (thankYou.current.getBoundingClientRect().y < 50) {
                    chnageBg('dark-100')
                } else if (about.current.getBoundingClientRect().y < 70) {
                    chnageBg('white')
                } else if (laptop.current.getBoundingClientRect().y < 50) {
                    chnageBg('dark-200')
                } else {
                    chnageBg('dark-100')
                }
            }
        }, true)
    }, [])

    return (
        <div className='w-screen' >
            {/* Just to initialise load during build */}


            {sidePane.status ? <SidePane sidePane={sidePane} setSidePaneStatus={setSidePaneStatus} /> : ""}

            <div className='fixed flex flex-col items-center right-0 w-[75px] min-h-screen bg-lime-300'>
                {
                    navigations.map((item, key) => (
                        <nav onClick={() => handleSidePaneOpen(item)} name={item} className='text-2xl cursor-pointer text-neutral-900 font-bold hover:text-neutral-400 transition duration-1000 pt-4 mt-10 ' key={key} style={{ writingMode: 'vertical-lr' }}>
                            {item}
                        </nav>
                    ))
                }
            </div>

            <div onClick={handleSidePaneClose} className={`bg-${bgColor} transition-colors duration-1000 w-screen h-auto flex flex-col align-middle justify-center items-center pr-[75px]`}>

                <Landing />

                <div ref={laptop}>
                    <Laptop />
                </div>

                <div ref={about}>
                    <About />
                </div>


                <img ref={thankYou} src={jerry.src} className='sm:w-[400px] sm:h-[400px] rounded-full hover:-translate-y-10 transition-all duration-500 mb-10'></img>

                <Footer />
            </div>

        </div >
    )
}


export default App