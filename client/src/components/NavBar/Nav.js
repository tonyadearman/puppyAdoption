import React from 'react';
import './Nav.css';
import Logo from '../../images/logoSticker.png';

function NavBar() {

  return (

    <nav className='Nav-Container'>
      <figcaption>
        <img src={Logo} className='logo' alt='logo' />
        <h1>Puppy Connection</h1>
      </figcaption>

      <a className="nav-link">Home</a>
      <a className="nav-link">About</a>
      <a className="nav-link">Contact</a>
      <a className="nav-link login-reg">Login/Register</a>
    </nav>
  );
}


export default NavBar;