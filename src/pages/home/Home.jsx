import React, { useEffect, useState } from 'react'
import "./home.scss"
import imageDesktopHome from "../../assets/home/background-home-desktop.jpg"
import imageDesktopDestination from "/images/destination/background-destination-desktop.jpg"
import imageDesktopTechnology from "../../assets/technology/background-technology-desktop.jpg"
import imageTabletHome from "../../assets/home/background-home-tablet.jpg"
import imageTabletDestination from "/images/destination/background-destination-tablet.jpg"
import imageTabletTechnology from "../../assets/technology/background-technology-tablet.jpg"
import imageMobileHome from "../../assets/home/background-home-mobile.jpg"
import imageMobileDestination from "/images/destination/background-destination-mobile.jpg"
import imageMobileTechnology from "../../assets/technology/background-technology-mobile.jpg"
import Navbar from '../../components/navbar/Navbar'
import { Outlet, useLocation } from 'react-router-dom'
import useScreenSize from '../../hooks/useScreenSize'

const Home = () => {
  const {width} = useScreenSize()
  const location = useLocation()
  const [background, setBackground] = useState('')
  
  useEffect(() => {
    if (width >= 900) {
      if (location.pathname === "/") {
        setBackground(imageDesktopHome)
      }
      else if (location.pathname === "/destination"){
        setBackground(imageDesktopDestination)
      }
      else if (location.pathname === "/technology"){
        setBackground(imageDesktopTechnology)
      }
    }
    else if (width < 900 && width >= 600) {
      if (location.pathname === "/") {
        setBackground(imageTabletHome)
      }
      else if (location.pathname === "/destination"){
        setBackground(imageTabletDestination)
      }
      else if (location.pathname === "/technology"){
        setBackground(imageTabletTechnology)
      }
    }
    else {
      if (location.pathname === "/") {
        setBackground(imageMobileHome)
      }
      else if (location.pathname === "/destination"){
        setBackground(imageMobileDestination)
      }
      else if (location.pathname === "/technology"){
        setBackground(imageMobileTechnology)
      }
    }

  }, [location, width])

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