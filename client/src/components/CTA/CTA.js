import React from 'react'
import {BsSearch} from 'react-icons/bs'
import {GiSittingDog} from 'react-icons/gi'
import {FaTruckPickup} from 'react-icons/fa'
import './CTA.css'


const CTA = () => {
  return (
    <div className="flex-container">
        <div className='cta_box search'>
        <BsSearch className='cta_icon' />
        <h4>Search for your perfect puppy</h4>
        <p>Search by breed, zip, size, or browse one of our dog categories to find the perfect companion for your lifestyle.</p>
        </div>
        <div className='cta_box'>
        <GiSittingDog className='cta_icon'/>
        <h4>Reserve your puppy</h4>
        <p>Once you find a puppy you like, you can reserve him or her right here! It's simple, secure, and hassle-free.</p>
        </div>
        <div className='cta_box'>
        <FaTruckPickup className='cta_icon'/>
        <h4>Pay & Coordinate pickup</h4>
        <p>Pay securely on our website, and our team is here to coordinate pickup or travel of your puppy!</p>
        </div>
    </div>
  )
}

export default CTA