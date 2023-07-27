import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'
import HomeComponent from '../components/homeComponent/homeComponent'

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}>
                <Route index element={<HomeComponent/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default Router