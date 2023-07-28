import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'
import HomeComponent from '../components/homeComponent/homeComponent'
import Technology from '../pages/technology/technology'
import Slider from '../pages/technology/slider'

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}>
                <Route index element={<HomeComponent/>}/>


                <Route path='technology' element={<Technology />}/>
                {/* <Route path='technology' element={<Slider />}/> */}
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default Router