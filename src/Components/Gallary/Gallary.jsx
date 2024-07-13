import React from "react";
import "./Gallary.css";
import Imagecards1 from "../assets/Imagecards1.png";
import Imagecards2 from "../assets/Imagecards2.png";
import Imagecards3 from "../assets/Imagecards3.png";
import Imagecards4 from "../assets/Imagecards4.png";
import Imagecards5 from "../assets/Imagecards5.png";
import Imagecards6 from "../assets/Imagecards6.png";

const Gallary = () => {
  return (
    <div className="gallary" id="gallary">
      <div className="s-main">
        <div className="s-title">
          <p className="sm-title">Gallary</p>
          <h1 className="sl-title">Our Portfolio of Celebrations</h1>
        </div>

        <div className="g-imgs">
          <div className="i-left">
            <img className="i1" src={Imagecards1} alt="" />
            <img className="i2" src={Imagecards2} alt="" />
            <img className="i3" src={Imagecards3} alt="" />
          </div>

          <div className="i-right">
            <img className="i4" src={Imagecards4} alt="" />
            <img className="i5" src={Imagecards5} alt="" />
            <img className="i6" src={Imagecards6} alt="" />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Gallary;
