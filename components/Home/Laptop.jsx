import React, { useEffect, useRef, useState } from 'react'
import DownArrow from '../Arrows/downArrow'
import ReactVisibilitySensor from 'react-visibility-sensor'


const Laptop = () => {
    const thisDiv = useRef()
    const [laptopHoodStatus, setLaptopHoodStatus] = useState(false)
    const toggleLaptopHood = (isVisible) => {
        const scrolled = document.documentElement.scrollTop;
        console.log(scrolled)
        if (isVisible) {
            setLaptopHoodStatus(true)
        } else if (scrolled < window.screen.availHeight * .9) {
            setLaptopHoodStatus(false)
        }
        //console.log(scrolled)
    }

    const handleScrollToNext = () => {
        console.log(thisDiv.current.getBoundingClientRect())
        window.scrollTo({
            top: window.screen.availHeight + thisDiv.current.getBoundingClientRect().height,
            behavior: 'smooth',
        });
    }
    return (
        <div ref={thisDiv} className='w-[95%] relative'>
            <div onClick={handleScrollToNext} className='w-20 z-[1000] h-20 absolute left-20 bottom-[15vw] animate-bounce  text-gray-50 hover:text-gray-600 transition-colors duration-300'>
                <DownArrow />
            </div>
            <div className="body relative w-full">
                <ReactVisibilitySensor onChange={toggleLaptopHood}>
                    <>
                        <div className="container ">
                            <div className={`laptop-hood-container ${laptopHoodStatus ? 'laptop-hood-opened' : ''}`}>
                                <div className="laptop-hood cover">
                                    <img className="background-img border-radius" src="./assets/images/laptop-cover.png" alt="" />
                                </div>
                                <div className="laptop-hood screen">
                                    <iframe embedded={true} className="cover frame frameScale wallpaper"
                                        src="/resumeGame/index.html" title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media;  picture-in-picture"
                                        allowFullScreen></iframe>
                                    <div className="laptop-hood frame ">
                                        <img className="background-img border-radius" src="./assets/images/laptop_hood_frame.png" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="laptop-bottom">
                                <img src="./assets/images/laptop_keyboard.png" className="background-img border-radius" />
                            </div>
                        </div>

                        <p className='text-center text-white text-[1.5vw] p-4'>
                            Click <a rel="noreferrer" className='text-amber-500 font-bold text-[2.5vw] hover:text-rose-500 transition-colors duration-500 ' href='/resumeGame/index.html' target='_blank'>here</a> to launch my interactive resume game in full screen or<br />play on above virtual Laptop
                        </p>
                    </>
                </ReactVisibilitySensor>

            </div>

            <style jsx>
                {
                    `
.body {
        display: flex;
        align-items: center;
        align-content: center;
        justify-content: center;
        justify-items: center;
        flex-direction: column;
    }

    .container {
        transform : scale(.4);
        position: relative;
        top : 0;
        perspective: 400vw;
        perspective-origin: bottom;
        --laptop--screen--width: 100vw;
        --aspect--ratio: calc(9/16);
        --laptop--screen-height: calc(var(--aspect--ratio) * var(--laptop--screen--width));
        --laptop--hood--initial--angle: -120deg;
        --laptop--hood--final--angle: 0deg;
        --laptop--keyboard--angle: -120deg;
        --laptop--screen--width--adjustment: 10px;
    }

    .border-radius {
        border-radius: 20px;
    }

    .background-img {
        width: inherit;
        height: inherit;
    }

    .laptop-hood-container {
        --webkit-transform-style: preserve-3d;
        transform-style: preserve-3d;
        position: relative;
        width: var(--laptop--screen--width);
        height: var(--laptop--screen-height);
        transition: all 2s ease-in-out;
        transform-origin: bottom;
        transform: rotateX(var(--laptop--hood--initial--angle));
    }

    .laptop-hood-opened{
        transform: rotateX(var(--laptop--hood--final--angle));
    }


    .laptop-hood {
        --webkit-transform-style: preserve-3d;
        transform-style: preserve-3d;
        backface-visibility: hidden;
        position: absolute;
        width: inherit;
        height: inherit;
        backface-visibility: hidden;
    }

    .cover {
        transform: rotateY(180deg);
        z-index: 1;
        pointer-events: none;
    }

    .screen {
        position: relative;
    }

    .frame {
        position: absolute;
        top: 0px;
        left: 0px;
        pointer-events: none;
    }

    .frameScale{
        transform : rotateZ(360deg);
    }

    .laptop-bottom {
        pointer-events: stroke;
        position: absolute;
        z-index: -10;
        top: 0px;
        transform-origin: bottom;
        transform: rotateX(var(--laptop--keyboard--angle));
        width: var(--laptop--screen--width);
        height: var(--laptop--screen-height);
        border-radius: 50px;
    }

    .wallpaper {

        pointer-events: all;
        width: calc(var(--laptop--screen--width) - var(--laptop--screen--width--adjustment)*2);
        height: calc(var(--laptop--screen-height) - var(--laptop--screen--width--adjustment)*2);
        margin-top: var(--laptop--screen--width--adjustment);
        margin-left: var(--laptop--screen--width--adjustment);
    }
                    `
                }
            </style>
        </div>
    )
}

export default Laptop