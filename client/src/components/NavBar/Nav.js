import React from 'react';
import './Nav.css';
import Logo from '../../Images/logoSticker.png';

function NavBar() {

  return (

    <nav className='Nav-Container'>
      <figcaption>
        <img src={Logo} className='logo' alt='logo' />
        <h1 className='nav-header'>Puppy Connection</h1>
      </figcaption>

      <a href="" className="nav-link">Home</a>
      <a href="" className="nav-link">About</a>
      <a href="" className="nav-link">Contact</a>
      <a href="" className="nav-link login-reg">Login/Register</a>
    </nav>
  );
}


export default NavBar;