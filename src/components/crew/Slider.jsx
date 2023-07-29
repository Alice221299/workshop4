
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './slider.scss';
import { Pagination } from 'swiper/modules';
import { crewDAta } from '../../service/crewData';




function Slider() {

  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
          clickable: true 
        }}
        
        modules={[Pagination]}
        className="mySwiper"

      >
        {
          crewDAta.map((element, index) => (


            <SwiperSlide key={index} img={element.images.png}>
              <div className='container__info'>
                <div className='container__pag'>
                  <h2>02</h2>
                  <h1>MEET YOUR CREW</h1>
                </div>
                <h1 className='container__title'>{element.role.toLocaleUpperCase()}</h1>
                <span>{element.name.toUpperCase()}</span>
                <p>{element.bio}</p>
              </div>
              <figure>
                <img src={element.images.png} alt="" />
              </figure>

            </SwiperSlide>

          ))

        }


      </Swiper>
    </>
  );
}

export default Slider

