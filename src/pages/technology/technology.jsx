import React, { useState } from "react";
import { technology } from "./dataTechnology";
import "./technology.scss";


function Technology() {
  const data = technology;

  const [view, setView] = useState(false)

  const [techData, setTechData] = useState({
    id: data[0].id,
    name: data[0].name,
    portrait: data[0].portrait,
    landscape: data[0].landscape,
    description: data[0].description,
  });

  const handleClick = (items) => {
    setTechData({
      id: items.id,
      name: items.name,
      portrait: items.portrait,
      landscape: items.landscape,
      description: items.description,
    });

    setView(true)
  };


 

  return (
    <section className="pages">
      <section className="technology">
        <div className="technology__title">
          <span className="technology__title__span">03</span>
          <h3 className="technology__title__title">SPACE LAUNCH 101</h3>
        </div>

        <div className="technology__content">
          <div className="content__button">
            {data.map((items, index) => (
              <button
                onClick={() => {
                  handleClick(items);
                }}
                className="content__button__id"
                key={index}
              >
                {items.id}
              </button>
            ))}
          </div>

          <div className="content__data">
            <span className="content__data__span">THE TERMINOLOGY...</span>

          
              <h1 className="content__data__title" style={{top: view && "5px" }}> {techData.name}</h1>
              <p className="content__data__parrafo">{techData.description}</p>
            
          </div>
        </div>
      </section>

      <section className="image">
        <figure className="image__figure">
          <img className="image__img" src={techData.portrait} alt="img" />
        </figure>
      </section>
    </section>
  );
}

export default Technology;
