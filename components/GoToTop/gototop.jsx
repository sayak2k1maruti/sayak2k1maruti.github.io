import React, { useEffect, useState } from 'react'
import UpArrow from '../Arrows/upArrow'

const GoToTop = ({ div }) => {
    const [visible, setVisible] = useState(false)
    const handleScroll = () => {
        div.current.scrollTo({
            top: 10,
            left: 0,
            behavior: 'smooth'
        })
    }
    useEffect(() => {
        div.current.addEventListener('scroll', () => {
            let scroll = div.current.scrollTop
            let threshold = window.innerHeight
            if (!visible && (scroll > threshold))
                setVisible(true)
            if (visible && (scroll < threshold))
                setVisible(false)
        })
    })
    return (
        <>
            {
                visible ?
                    <div onClick={handleScroll} className="fixed bottom-10 right-10 w-20 h-20 opacity-50 z-50 hover:opacity-70 transition-opacity " >
                        <UpArrow />
                    </div >
                    :
                    ""
            }

        </>
    )
}

export default GoToTop