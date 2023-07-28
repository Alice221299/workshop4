import React from 'react'
import imageDesktop1 from "../../assets/crew/background-crew-desktop.jpg"
import Slider from './slider'


const Crew = () => {
  return (
   <section className='principal'>
        <section className='backImage' style={{backgroundImage: `url(${imageDesktop1})` }}>
                <Slider />
        </section>
    </section>
  )
}

export default Crew
