import React from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import Toggle from "../Toggle/Toogle";

const navbar = () => {
  return (
    <div className="n-wrapper" id="Navbar">
      
      <div className="n-left">
        <div className="n-name">EventAura</div>
        {/* <Toggle /> */}
      </div>
      
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link activeClass="active" to="hero" spy={true} smooth={true}>
                Home
              </Link>
            </li>
            <li>
              <Link to="aboutus" spy={true} smooth={true}>
                About us
              </Link>
            </li>
            <li>
              <Link to="works" spy={true} smooth={true}>
                Services
              </Link>
            </li>
            <li>
              <Link to="portfolio" spy={true} smooth={true}>
                Event gallery
              </Link>
            </li>
            <li>
              <Link to="testimonial" spy={true} smooth={true}>
                Services
              </Link>
            </li>
            <li>
              <Link to="ContactUs" spy={true} smooth={true}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <Link to="contact" spy={true} smooth={true}>
          <button
            className="button n-button"
            onClick={() => window.open("https://wa.me/1551854773", "_blank")}
          >
            Book Us Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default navbar;
