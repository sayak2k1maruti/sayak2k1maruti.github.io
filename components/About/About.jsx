import React from 'react'
import minion from '../../assets/images/minion.png'
import selfie from '../../assets/images/selfie.jpg'
import { resumeURL, Info } from '../../data/data'


const About = () => {
    return (
        <div className='p-[5vw] w-full flex flex-col'>
            <h1 className='my-[1.25vw] text-[6vw] font-thin'>
                About Me
            </h1>
            <div className='p-[1.25vw] flex flex-row leading-none w-full items-center'>
                <div className='w-1/2'>
                    <h2 className='my-[.75vw] text-[9vw] font-bold'>
                        Hello There
                    </h2>
                    <p className='p-[.5vw]  leading-[2.5vw] text-[2vw]'>
                        I am a student 	&amp; I love to code.I read in National Institute of Technology Durgapur. Currently I am persuing a B.Tech in Electronics and Communication Engineering.
                    </p>
                </div>
                <img className='w-1/2 hover:-translate-y-10 transition-all duration-500 shadow-sm' src={minion.src}></img>
            </div>
            <div className='p-[1.25vw] my-[2.5vw] flex flex-row w-full items-center'>
                <div className='w-[35%] hover:-translate-y-10 transition-all duration-500 flex flex-row items-center justify-center'>
                    <img className='rounded-full w-[30vw] h-[30vw]' alt="selfie" src={selfie.src} />
                </div>
                <div className='w-[65%] flex flex-col pl-[5vw] justify-center'>
                    <table className='text-left w-full text-[1.25vw] items-start'>
                        <tbody>
                            {
                                Info.map((item, key) => (
                                    <tr key={key} className='w-full'>
                                        <th className='w-1/3 py-[.25vw]'>{item.key} :</th>
                                        <td className='w-2/3 py-[.25vw]'>{item.value}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                    <a rel="noreferrer" className='w-[12em] font-bold mt-[2.5vw] bg-highlight-200  text-[1.25vw] text-white hover:bg-green-700 transition-colors cursor-pointer duration-500 rounded-lg px-[2.5vw] py-[.5vw]' href={resumeURL} target='_blank'>
                        Download CV
                    </a>
                </div>
            </div>
        </div>
    )
}

export default About