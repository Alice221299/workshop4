import React, { useState } from 'react'
import "./nav.scss"
import logo from "../../assets/shared/logo.svg"
import hamburger from "../../assets/shared/icon-hamburger.svg"
import close from "../../assets/shared/icon-close.svg"
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false)
    const menu = [
        {
            number: "00",
            name: "Home",
            link: "/"
        },
        {
            number: "01",
            name: "Destination",
            link: "destination"
        },
        {
            number: "02",
            name: "Crew",
            link: "crew"
        },
        {
            number: "03",
            name: "Technology",
            link: "technology"
        }
    ]
  return (
    <nav className='header-navbar'>
        <figure className='navbar-logo'>
            <img src={logo} alt="Icon for logo" />
        </figure>
        <figure className='icon-mobile' onClick={() => setOpenMenu(true)}>
            <img src={hamburger} alt="Icon for mobile menu" />
        </figure>
        <hr className='navbar-line'/>
        <div className='navbar-menu'>
            {menu.map((item, index) => (
                <NavLink to={item.link} key={index} className='menu-item'>
                    <span>{item.number}</span>
                    <p className="navlink" >{item.name}</p>
                </NavLink>
            ))}
        </div>
        <div className={openMenu ? 'navbar-mobile-menu' : "navbar-mobile-menu inactive"}>
            <img src={close} alt="Icon for close" onClick={() => setOpenMenu(false)}/>
            {menu.map((item, index) => (
                <NavLink to={item.link} key={index} className='menu-item'>
                    <span>{item.number}</span>
                    <p className="navlink" >{item.name}</p>
                </NavLink>
            ))}
        </div>
    </nav>
  )
}

export default Navbar