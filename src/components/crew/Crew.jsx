import React from 'react'
import imageDesktop1 from "../../assets/crew/background-crew-desktop.jpg"
import './crew.scss'
import Slider from './slider'

const Crew = () => {
  return (
   <section className='principal'>
        <section className='backImage' style={{backgroundImage: `url(${imageDesktop1})` }}>
            <article className='container__primary'>
                <div className='container__pag'>
                    <h2>02</h2>
                    <h1>MEET YOUR CREW</h1>
                </div>
                <div className='container__info'>
                    <h1 className='container__title'>COMMANDER</h1>
                    <span>DOUGLAS HURLEY</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et inventore adipisci vitae neque nesciunt minus facere recusandae ratione? Ab maiores quis tempore fugiat, delectus voluptatum assumenda expedita? Voluptates vel debitis incidunt excepturi est impedit odit, architecto ipsa harum ipsam eius sunt hic!</p>
                </div>
            </article>

            <article className='container__secundary'>
                {/* <Slider/> */}
            </article>
        </section>
    </section>
  )
}

export default Crew