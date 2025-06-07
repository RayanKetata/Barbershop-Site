import React from "react";
import "./Cutz.css";
const services = [
  { title: "Taper", price: "$20", img: "/taper.jpg" },
  { title: "Fade", price: "$25", img: "/fade.jpg" },
  { title: "Beard Lineup", price: "$15", img: "/lineup.jpg" },
  { title: "Shave", price: "$18", img: "/shave.jpg" },
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
}
export default Cutz;