import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ContactForm from './contact-form'
import { faGamepad } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faGithubSquare, faInstagramSquare, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import SocialAccounts from './SocialAccounts'
import Greeting from './Greeting'
import { Profile } from '../../data/data'



const Contact = () => {
    return (
        <div className='flex flex-col sm:flex-row bg-dark-300 py-[5vw] mt-[.25vw] px-[2.5vw]'>
            <div className='w-full sm:w-1/2'>
                <h1 className="text-[length:max(36px,9vw)] font-bold my-[1.25vw]">
                    <Greeting />
                </h1>
                <p className='my-[.75vw] text-light-200 text-[length:max(20px,3vw)] font-bold'>Ask Me Anything ...</p>
                <img className="w-[60%]" src='/assets/images/telephone.png' alt="decorative image"></img>
                <div className='p-[1.25vw] text-neutral-300 flex flex-col'>
                    <p className="text-[length:max(16px,1.5vw)]">{Profile.name}</p>
                    <a rel="noreferrer" className="text-[length:max(16px,1.5vw)]" href={`mailto:${Profile.email}`}>{Profile.email}</a>


                    <SocialAccounts />

                </div>
            </div>
            <div className='w-full sm:w-1/2'>
                <ContactForm email={Profile.email} />
            </div>
        </div>
    )
}

export default Contact