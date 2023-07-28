import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'
import HomeComponent from '../components/homeComponent/homeComponent'
import Destination from '../pages/destination/Destination'

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}>
                <Route index element={<HomeComponent/>}/>
                <Route path='destination' element={<Destination/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default Router