import React, { useRef, useEffect } from 'react';
import { BrowserRouter, NavLink, Routes, Route, useLocation } from 'react-router-dom';
import './navbar.css';
// import Logo from '../../Images/logo.jpg';

function NavBar() {

  const navbarLinks = useRef(null);
  const handleNavbarButton = (e) => {
    navbarLinks.current.classLijkglust.toggle('menu-collapse');
  };




  

  const hideNavMenu = () => {
    if (!navbarLinks.current.classList.contains('menu-collapse')) {
      navbarLinks.current.classList.add('menu-collapse');
    }
  }

  return (
    <div className="App">
      <BrowserRouter>
        <nav className='navbar'>
        {/* <img src={Logo} className='logo' alt=''/> */}
          <div className='navbar-container'>
            <a href="#" className='brand-title'>Puppy Connection</a>
            <button onClick={(e) => { handleNavbarButton(e); }} className='navbar-toggler'>
              <span className='navbar-toggler-icon'></span>
            </button>
            <div ref={navbarLinks} className='navbar-links menu-collapse'>
              <ul className='links-list'>
                <li className='nav-item'>
                  <NavLink activeClassName='is-active' exact={true} className='nav-link' to='/'>Home</NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink activeClassName='is-active' exact={true} className='nav-link' to='/about'>About</NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink activeClassName='is-active' exact={true} className='nav-link' to='/contact'>Contact</NavLink>
                </li>
                <li className='nav-item'>
                  <button activeClassName='is-active' exact={true} className='nav-link-button' to='/register'>Register</button>
                </li>
                <li className='nav-item'>
                  <button activeClassName='is-active' exact={true} className='nav-link-button' to='/login'>Login</button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className='container'>
          <AllRoutes hideMenu={() => { hideNavMenu(); }}></AllRoutes>
        </div>
      </BrowserRouter>
    </div>
  );
}

function AllRoutes({ hideMenu }) {

  let location = useLocation();
  useEffect(() => {
    hideMenu();
  }, [location]);

  return (
    <Routes>
      <Route path="/about" component={About}>
      </Route>
      <Route path="/contact" component={Contact}>
      </Route>
      <Route path="/" component={Home}>
      </Route>
      <Route path="/" component={Register}>
      </Route>
      <Route path="/" component={Login}>
      </Route>
    </Routes>
  );
}

function Home() {
  return (
    <h1>This is home page</h1>
  );
}

function About() {
  return (
    <h1>This is about page</h1>
  );
}

function Contact() {
  return (
    <h1>This is contact page</h1>
  );
}
function Register() {
    return (
      <h1>This is register page</h1>
    );
  }
  function Login() {
    return (
      <h1>This is Login page</h1>
    );
  }
export default NavBar;