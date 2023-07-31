import React from 'react'
import 'swiper/css';
import 'swiper/css/pagination';
import "./destination-planet.scss"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { destinations } from '../../services/destinationData';
import SwiperCore from 'swiper';
import { useRef } from 'react';

SwiperCore.use([Pagination]);

const DestinationPlanet = () => {
    const planets = ['Moon', 'Mars', 'Europa', 'Titan'];
    const swiperRef = useRef(null);

  const handleBulletClick = (index) => {
    if (swiperRef && swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(index);
    }
  };
  return (
    <>
      <Swiper ref={swiperRef}
        modules={[Pagination]}
        className="mySwiper"
        onSlideChange={(swiper) => handleBulletClick(swiper.activeIndex)}>
        {destinations.map((planet, index) => (
            <SwiperSlide key={index}>
                <figure className='slide-planet'>
                    <img src={planet.images.png} alt={planet.name} />
                </figure>
                <div className='planet-info'>
                <div className="custom-bullets">
                {planets.map((planetName, i) => (
                  <span
                    key={i}
                    className={`bullet ${index === i ? 'bullet active' : ''}`}
                    onClick={() => handleBulletClick(i)}
                  >{planetName}</span>
                ))}
              </div>
                    <h2>{planet.name}</h2>
                    <p className='planet-description'>{planet.description}</p>
                    <hr />
                    <div className='planet-stats'>
                        <div>
                            <p>avg. distance</p>
                            <span>{planet.distance}</span>
                        </div>
                        <div>
                            <p>est. travel time</p>
                            <span>{planet.travel}</span>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default DestinationPlanet