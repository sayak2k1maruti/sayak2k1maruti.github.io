import React from 'react'
import minion from '../../assets/images/minion.png'
import selfie from '../../assets/images/selfie.jpg'
import { resumeURL, Info } from '../../data/data'


const About = () => {
    return (
        <div className='p-20 w-full flex flex-col'>
            <h1 className='my-5 text-6xl font-thin'>
                About Me
            </h1>
            <div className='p-5 flex flex-row w-full items-center'>
                <div className='w-1/2'>
                    <h2 className='my-3 text-9xl font-bold'>
                        Hello There
                    </h2>
                    <p className='p-2 text-2xl'>
                        I am a student 	&amp; I love to code.I read in National Institute of Technology Durgapur. Currently I am persuing a B.Tech in Electronics and Communication Engineering.
                    </p>
                </div>
                <img className='w-1/2 hover:-translate-y-10 transition-all duration-500 shadow-sm' src={minion.src}></img>
            </div>
            <div className='p-5 my-10 flex flex-row w-full items-center'>
                <div className='w-[35%] hover:-translate-y-10 transition-all duration-500 flex flex-row items-center justify-center'>
                    <img className='rounded-full w-[300px] h-[300px]' alt="selfie" src={selfie.src} />
                </div>
                <div className='w-[65%] flex flex-col pl-20 justify-center'>
                    <table className='text-left w-full text-lg items-start'>
                        <tbody>
                            {
                                Info.map((item, key) => (
                                    <tr key={key} className='w-full'>
                                        <th className='w-1/3 py-1'>{item.key} :</th>
                                        <td className='w-2/3 py-1'>{item.value}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                    <a rel="noreferrer" className='w-[12em] font-bold mt-10 bg-highlight-200 text-white hover:bg-green-700 transition-colors cursor-pointer duration-500 rounded-lg px-10 py-2' href={resumeURL} target='_blank'>
                        Download CV
                    </a>
                </div>
            </div>
        </div>
    )
}

export default About