import React, { useState, useEffect } from "react";
import { FaHome, FaPhone, FaCalendarAlt } from "react-icons/fa";
import { GiScissors } from "react-icons/gi"; 
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <img src="/BarberShopLogo.png" alt="Logo" className="logo-img" />
      <ul className="nav-links">
        <li><Link to="/"><FaHome /> Home</Link></li>
        <li><a href="#cutz"><GiScissors /> Cutz</a></li>
       <li><Link to="/booking"><FaCalendarAlt /> Book</Link></li>
       <li><a href="#contact"><FaPhone /> Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
