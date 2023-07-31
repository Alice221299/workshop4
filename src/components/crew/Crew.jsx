import React, { useEffect, useState } from 'react'
import imageDesktop1 from "../../assets/crew/background-crew-desktop.jpg"
import imageMobile from "../../assets/crew/background-crew-mobile.jpg"
import imageTablet from "../../assets/crew/background-crew-tablet.jpg"
import Slider from './slider'
import './slider.scss'
import useScreenSize from "./screen";

// const ImageChanger = () => {
//   const { width } = useScreenSize();
//   const [imageUrl, setImageUrl] = useState("");

//   useEffect(() => {
//     if (width > 950) {
//       setImageUrl(imageDesktop1);
//     } else if (width < 615) {
//       setImageUrl(imageMobile);
//     } else {
//       setImageUrl(imageTablet);
//     }
//   }, [width]);

//   return imageUrl;
// };
// style={{ backgroundImage: `url(${imageUrl})` }}

const Crew = () => {
  // const imageUrl = ImageChanger();

  return (
    <>
    <section className='backImage' >
      <div className='container__pag'>
        <h2>02</h2>
        <h1>MEET YOUR CREW</h1>
      </div>
      <Slider />
    </section>
    </>
  )
}

export default Crew