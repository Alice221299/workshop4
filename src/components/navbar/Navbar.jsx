import React from 'react'
import "./nav.scss"
import logo from "../../assets/shared/logo.svg"
import { NavLink } from 'react-router-dom'

const Navbar = () => {
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
            link: "/"
        },
        {
            number: "03",
            name: "Technology",
            link: "/"
        }
    ]
  return (
    <nav className='header-navbar'>
        <figure className='navbar-logo'>
            <img src={logo} alt="Icon for logo" />
        </figure>
        <hr className='navbar-line'/>
        <div className='navbar-menu'>
            {menu.map((item, index) => (
                <div key={index} className='menu-item'>
                    <span>{item.number}</span>
                    <NavLink className="navlink" to={item.link}>{item.name}</NavLink>
                </div>
            ))}
        </div>
    </nav>
  )
}

export default Navbar