import React from "react";
import "./aboutus.css";
import aboutus1 from "../assets/abotus1.png";
import aboutus2 from "../assets/abotus2.png";
import effect from "../assets/effect.png";
import { FaCheckCircle } from "react-icons/fa";

const Aboutus = () => {
  return (
    <div className="aboutus">
      <div className="a-left">
        <img src={aboutus1} alt="" className="about1" />
        <div className="affect">
          <img src={effect} alt="" />
        </div>
        <img src={aboutus2} alt="" className="about2" />
      </div>

      <div className="a-right">
        <h6 className="a-title">ABOUT US</h6>
        <h1 className="a-titleM">We craft Memories for you</h1>
        <p className="a-para">
          We are more than just event managers - we are creators of exceptional
          experiences. Established in 2017, our journey began with a passion for
          crafting moments that resonate and memories that create the best
          moments.
        </p>
        <ul>
          <li>
            <p>Our designers and planners collaborate to bring uniqueness</p>
          </li>
          <li>
            <p>We boast a team of seasoned creative minds</p>
          </li>
        </ul>
        <div className="btns a-btns">
          <button className="a-booknow">Book Your Event</button>
          <button className="a-watch">
            <FaCheckCircle className="icon-space" />
            Watch Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
