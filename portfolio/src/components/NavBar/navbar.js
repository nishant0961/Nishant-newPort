import React, { useState } from 'react';
import './navbar.css'
import logo from '../../react-portfolio-assets/assets/logo.png';
import contactImg from '../../react-portfolio-assets/assets/contact.png';
import {Link} from 'react-scroll';
import menu from '../../react-portfolio-assets/assets/menu.png';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="navbar">
        <img src={logo} alt="logo" className='logo' />
        <div className="desktopMenu">
          <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
          <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">About</Link>
          <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Portfolio</Link>
          <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Clients</Link>
        </div>
        <button className=" desktopMenubtn" onClick={() => {
          document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
        }}>
            <div><img src={contactImg} alt="" className="desktopMenuImg" /></div>
            <p>Contact Me</p>
            </button>

          <img src={menu} alt="Menu" className='mobMenu' onClick={()=>setShowMenu(!showMenu)}/>
        <div className="navMenu" style={{display: showMenu? 'flex':'none'}}>
          <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Home</Link>
          <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>About</Link>
          <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Portfolio</Link>
          <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Clients</Link>
          <Link activeClass='active' to='contatct' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Contact</Link>
        </div>
    </nav>
  )
}

export default Navbar;
