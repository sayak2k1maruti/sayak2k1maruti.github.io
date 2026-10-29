import React from 'react'
import SocialAccounts from '../Contact/SocialAccounts'
import { Profile } from '../../data/data'
const Footer = () => {
  return (
    <div className='text-[length:max(14px,1.25vw)]  font-bold flex flex-col justify-center align-middle items-center text-neutral-200 bg-neutral-700 w-full h-min-[10vw] py-5'>
      <p>
        &#169; {new Date().getFullYear()} by {Profile.name}
        <br />
        <a href={`mailto:${Profile.email}`}>{Profile.email}</a>
      </p>
      <SocialAccounts />
    </div>
  )
}
export default Footer