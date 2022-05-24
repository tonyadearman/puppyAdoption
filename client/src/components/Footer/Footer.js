import React from 'react'
import './Footer.css'
import dogbanner from '../../images/dogbanner.png'

const Footer = () => {
  return (
    <div className='flex-container footer_container'>
        <img src={dogbanner} alt='lazy dogs' />
         <div className='contact-header'>Contact Us</div>
    </div>
  )
}

export default Footer