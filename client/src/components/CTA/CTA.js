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
        <p>Search by breed, ZIP, size or browse one of our dog categories to find the perfect dog categories to find the perfect dog for your lifestyle.</p>
        </div>
        <div className='cta_box'>
        <GiSittingDog className='cta_icon'/>
        <h4>Reserve your puppy</h4>
        <p>Once you find a puppy you like, you can reserve him or her rifht here! It's simple, secure, and hassle-free.</p>
        </div>
        <div className='cta_box'>
        <FaTruckPickup className='cta_icon'/>
        <h4>Pay & Coordinate pickup</h4>
        <p>Pay securely on our website, and our team s here to co-ordinate pickup or travel of your puppy!</p>
        </div>
    </div>
  )
}

export default CTA