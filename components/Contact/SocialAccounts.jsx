import React from 'react'
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

const SocialAccounts = () => {
    return (

        <div className='flex flex-row my-2 w-full items-center justify-center'>
            {
                socialAccounts.map((item, key) => (
                    <a rel="noreferrer" key={key} className='w-10 h-10 hover:-translate-y-2 text-neutral-400 px-2 transition-all duration-500 hover:text-neutral-100' href={item.href}>
                        {item.element}
                    </a>
                ))
            }

        </div>
    )
}

export default SocialAccounts