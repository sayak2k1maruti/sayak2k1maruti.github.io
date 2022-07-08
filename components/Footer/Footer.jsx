import React from 'react'
import SocialAccounts from '../Contact/SocialAccounts'
const Footer = () => {
  return (
    <div className='text-[1.25vw]  font-bold flex flex-col justify-center align-middle items-center text-neutral-200 bg-neutral-700 w-full h-min-[10vw] py-5'>
      <p>
        &#169; 2022 by Sayak Das
        <br />
        <a href='mailto:sayakdas2k1@gmail.com'>sayakdas2k1@gmail.com</a>
      </p>
      <SocialAccounts />
    </div>
  )
}
export default Footer