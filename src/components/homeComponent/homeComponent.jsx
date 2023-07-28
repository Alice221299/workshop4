import React from 'react'
import './homeComponent.scss'
import { useNavigate } from 'react-router-dom'

function HomeComponent() {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('destination')
  }
  return (
    <div className='container'>
          <section className='introduction'>
            <span className='introduction__span'>SO, YOU WANT TO TRAVEL TO</span>
            <h1 className='introduction__title'>SPACE</h1> 
            <p className='introduction__par'>Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!</p>
          </section>
        
          <section className='container__button'>
            <button className='container__btn--explore' onClick={handleClick}> EXPLORE </button>
          </section>
        </div>
  )
}

export default HomeComponent