import React, { useState, useEffect } from "react";
import { FaHome, FaPhone, FaCalendarAlt } from "react-icons/fa";
import { GiScissors } from "react-icons/gi"; 
import "./Navbar.css";

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
        <li><FaHome /> Home</li>
        <li><a href="#cutz"><GiScissors /> Cutz</a></li>
        <li><FaCalendarAlt /> Book</li>
        <li><FaPhone /> Contact</li>

      </ul>
    </nav>
  );
};

export default Navbar;
