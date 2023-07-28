import React from 'react'
import 'swiper/css';
import 'swiper/css/pagination';
import "./destination-planet.scss"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { destinations } from '../../services/destinationData';

const DestinationPlanet = () => {
    const planets = ['Moon', 'Mars', 'Europa', 'Titan'];
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + planets[index] + '</span>';
        },
      };
  return (
    <>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        {destinations.map((planet, index) => (
            <SwiperSlide key={index}>
                <figure className='slide-planet'>
                    <img src={planet.images.png} alt={planet.name} />
                </figure>
                <div className='planet-info'>
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