import React from 'react'
import ReactTyped from 'react-typed'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ContactForm from './contact-form'
import { faGamepad } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faGithubSquare, faInstagramSquare, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'


const socialAccounts = [
    {
        "element": <FontAwesomeIcon icon={faGithubSquare} size='2x' />,
        "href": "https://github.com/sayak2k1maruti"
    },
    {
        "element": <FontAwesomeIcon icon={faLinkedinIn} size='2x' />,
        "href": "https://www.linkedin.com/in/sayak-das-2479901a3/"
    },
    {
        "element": <FontAwesomeIcon icon={faInstagramSquare} size='2x' />,
        "href": "https://www.instagram.com/"
    }
]

const Contact = () => {
    return (
        <div className='flex flex-row bg-dark-300 py-[5vw] mt-[.25vw] px-[2.5vw]'>
            <div className='w-1/2'>
                <h1 className="text-[9vw] font-bold font-mono my-[1.25vw]">
                    <ReactTyped
                        strings={[
                            "<span class='text-white'>Hello,</span>",
                            "<span class=' text-rose-400 font-bold font-mono'>Namaste,</span>",
                            "<span class=' text-green-400 font-bold font-mono'>Bonjour,</span>",
                        ]}
                        typeSpeed={100}
                        backSpeed={10}
                        backDelay={1}
                        loop
                        smartBackspace
                    />
                </h1>
                <p className='my-[.75vw] text-light-200 text-[3vw] font-bold'>Ask Me Anyting ...</p>
                <img className="w-[60%]" src='/assets/images/telephone.png' alt="decorative image"></img>
                <div className='p-[1.25vw] text-neutral-300 flex flex-col'>
                    <p className="text-[1.5vw]">Sayak Das</p>
                    <a rel="noreferrer" className="text-[1.5vw]" href='mailto:sayakds2k1@gmail.com'>sayakdask1@gmail.com</a>

                    <div className='flex flex-row my-5'>
                        {
                            socialAccounts.map((item, key) => (
                                <a rel="noreferrer" key={key} className='hover:-translate-y-2 text-neutral-400 px-2 transition-all duration-500 hover:text-neutral-100' href={item.href}>
                                    {item.element}
                                </a>
                            ))
                        }

                    </div>

                </div>
            </div>
            <div className='w-1/2'>
                <ContactForm />
            </div>
        </div>
    )
}

export default Contact