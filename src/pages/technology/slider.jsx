
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './slider.scss';

// import required modules
import { Pagination } from 'swiper/modules';

function Slider() {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + '</span>';
        },
      };
    
  return (
    <>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><h1>
          hola</h1></SwiperSlide>
        <SwiperSlide><p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet culpa odio enim? Similique animi voluptatibus nihil incidunt voluptatem ab vero esse perspiciatis dolorem optio ipsum quod corporis, ducimus enim nisi!
        </p>
          </SwiperSlide>
        <SwiperSlide>
        <div className="technology__title">
          <span className="technology__title__span">03</span>
          <h3 className="technology__title__title">SPACE LAUNCH 101</h3>
        </div>
        </SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
    
      </Swiper>
    </>
  )
}

export default Slider