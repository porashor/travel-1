import React from 'react'
import { BsInstagram, BsWhatsapp } from 'react-icons/bs'
import { FaFacebook } from 'react-icons/fa'

const SocialLinks = () => {
  return (
    <div className='flex items-center justify-start gap-3 text-2xl' >
      <FaFacebook/>
      <BsInstagram/>
      <BsWhatsapp/>
    </div>
  )
}

export default SocialLinks
