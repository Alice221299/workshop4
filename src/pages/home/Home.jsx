import React, { useEffect, useState } from 'react'
import "./home.scss"
import imageDesktopHome from "../../assets/home/background-home-desktop.jpg"
import imageDesktopDestination from "/images/destination/background-destination-desktop.jpg"
import Navbar from '../../components/navbar/Navbar'
import { Outlet, useLocation } from 'react-router-dom'

const Home = () => {
  const location = useLocation()
  const [background, setBackground] = useState('')
  useEffect(() => {
    if (location.pathname === "/") {
       setBackground(imageDesktopHome)
    }
    else if (location.pathname === "/destination"){
      setBackground(imageDesktopDestination)
    }
  }, [location])

  return (
    <>
      <div className='backImage' style={{backgroundImage: `url(${background})` }}>
      <Navbar/>
      <Outlet/>
      </div>
    </>
  )
}

export default Home