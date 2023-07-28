import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'
import HomeComponent from '../components/homeComponent/homeComponent'
// import Crew from '../components/crew/Crew'

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}>
                <Route index element={<HomeComponent/>}/>
                {/* <Route path='/Crew' element={<Crew/>}/> */}
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default Router