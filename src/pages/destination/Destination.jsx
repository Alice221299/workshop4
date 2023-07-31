import React from 'react'
import { Outlet } from 'react-router-dom'
import DestinationPlanet from '../../components/destination-planet/DestinationPlanet'
import "./destination.scss"

const Destination = () => {
  return (
    <main>
        <div className='destination-title'>
            <span>01</span>
            <p>Pick your destination</p>
        </div>
        <DestinationPlanet/>
    </main>
  )
}

export default Destination