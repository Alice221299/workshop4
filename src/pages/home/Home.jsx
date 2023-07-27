import React from 'react'
import "./home.scss"
import imageDesktop from "../../assets/home/background-home-desktop.jpg"
import Navbar from '../../components/navbar/Navbar'
import { Outlet } from 'react-router-dom'
import HomeComponent from '../../components/homeComponent/homeComponent'

const Home = () => {
  return (
    <>
      <div className='backImage' style={{backgroundImage: `url(${imageDesktop})` }}>
      <Navbar/>
      <Outlet/>
      </div>
    </>
  )
}

export default Home