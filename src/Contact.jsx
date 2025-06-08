import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-info">
        <h2>Fresh Cutz Barbershop</h2>
        <p>75 Laurier Avenue East</p>
        <p>Ottawa, ON K1N 6N5</p>
        <p>(613)-123-4567</p>
        <p>info@freshcutzbarbershop.com</p>
      </div>

      <div className="hours">
        <h3>Hours</h3>
        <ul>
          <li><strong>Mon:</strong> 8am – 8pm</li>
          <li><strong>Tue:</strong> 8am – 8pm</li>
          <li><strong>Wed:</strong> 8am – 8pm</li>
          <li><strong>Thu:</strong> 8am – 8pm</li>
          <li><strong>Fri:</strong> 8am – 8pm</li>
          <li><strong>Sat:</strong> 8am – 8pm</li>
          <li><strong>Sun:</strong> 8am – 8pm</li>
        </ul>
      </div>

      <div className="about">
        <h3>About Us</h3>
        <p>
          At Fresh Cutz, we take pride in every detail — from clean fades to sharp lineups.
          Our story began with two passionate barbers on a mission to redefine the experience.
        </p>
        <p>
          More than a barbershop — it’s a community, a culture, a place to feel fresh every time.
        </p>
      </div>

      <div className="credits">
        <p>This website has been created by Taha Tarkhani and Rayan Ketata</p>
      </div>
    </section>
  );
};

export default Contact;

