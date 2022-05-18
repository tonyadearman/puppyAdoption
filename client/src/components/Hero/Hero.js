import React from 'react'
import './Hero.css'
import puppyLove3 from '../../images/puppyLove3.png'

const Hero = () => {
  return (
    <div>
        <div className='banner_container'>
            <img src={puppyLove3} alt='Group of Dogs' />
            <h1>Find your new puppy today!</h1>
            <h1>We are connected to 100+ rescue organizations.</h1>
        </div>
        
    </div>
  )
}

export default Hero