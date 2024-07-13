import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="n-wrapper" id="Navbar">
      <div className="n-left">
        <div className="n-name">EventAura</div>
      </div>

      {/* Toggle button for mobile and tablet */}
      <input
        type="checkbox"
        id="nav-toggle"
        className="nav-toggle"
        checked={isOpen}
        onChange={toggleMenu}
      />
      <label htmlFor="nav-toggle" className="nav-toggle-label">
        <span></span>
      </label>

      <div className={`n-right ${isOpen ? "active" : ""}`}>
        <div className="n-list">
          <ul>
            <li>
              <Link
                activeClass="active"
                to="hero"
                spy={true}
                smooth={true}
                onClick={toggleMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="aboutus"
                spy={true}
                smooth={true}
                onClick={toggleMenu}
              >
                About us
              </Link>
            </li>
            <li>
              <Link
                to="works"
                spy={true}
                smooth={true}
                onClick={toggleMenu}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="portfolio"
                spy={true}
                smooth={true}
                onClick={toggleMenu}
              >
                Event gallery
              </Link>
            </li>
            <li>
              <Link
                to="testimonial"
                spy={true}
                smooth={true}
                onClick={toggleMenu}
              >
                Testimonials
              </Link>
            </li>
            <li>
              <Link
                to="ContactUs"
                spy={true}
                smooth={true}
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <Link to="contact" spy={true} smooth={true} onClick={toggleMenu}>
          <button
            className="button n-button"
            onClick={() =>
              window.open("https://wa.me/1551854773", "_blank")
            }
          >
            Book Us Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
