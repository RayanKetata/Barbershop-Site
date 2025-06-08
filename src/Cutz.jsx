import React from "react";
import "./Cutz.css";

const services = [
  { title: "Taper Fade", price: "$20", img: `${import.meta.env.BASE_URL}Taper.jpg` },
  { title: "Regular Haircut", price: "$25", img: `${import.meta.env.BASE_URL}Fades.jpg` },
  { title: "Beard Lineup/Shapeup", price: "$15", img: `${import.meta.env.BASE_URL}Beard.jpg` },
  { title: "Kidz Cut", price: "$18", img: `${import.meta.env.BASE_URL}Kids.jpg` },
];

const Cutz = () => {
  return (
    <section id="cutz" className="cutz-section">
      <h2>Our Cutz</h2>
      <div className="card-container">
        {services.map((service) => (
          <div className="cutz-card" key={service.title}>
            <img src={service.img} alt={service.title} />
            <div className="cutz-info">
              <h3>{service.title}</h3>
              <p>{service.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cutz;

