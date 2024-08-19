import './Navbar.css'

import {Link} from 'react-scroll';
import logo from '../../assets/images/logo.png'
import menu_icon from '../../assets/images/menu-icon.png'
import { useEffect, useState } from 'react'
const Navbar=()=>{
const [mobileMenu,setMobileMenu]=useState(false);

const toggleMenu=()=>{
  mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
}

const [sticky,setSticky]=useState(false);

useEffect(()=>{
  window.addEventListener('scroll',()=>{
    window.scrollY > 50 ? setSticky(true) : setSticky(false)
  })
},[])

return (
  <nav className={`container ${sticky ? `dark-nav` : ''}`}>
    <img src={logo} className='logo'></img>
    <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
      <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
      <li><Link to='programs' smooth={true} offset={-250} duration={500}>Program</Link></li>
      <li><Link to='about' smooth={true} offset={-150} duration={500}>About Us</Link></li>
      <li><Link to='campus' smooth={true} offset={-250} duration={500}>Campus</Link></li>
      <li><Link to='testimonials' smooth={true} offset={-250} duration={500}>Testimonials</Link></li>
      <li><Link to='contact' smooth={true} offset={-250} duration={500}>Contact</Link> us</li>
    </ul>
    <img src={menu_icon} className='menu-icon' onClick={toggleMenu}></img>
  </nav>
)
}
export default Navbar;