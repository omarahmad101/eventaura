import React from "react";
import "./hero.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "reactstrap";
import { CardImg } from "reactstrap";
import { CardImgOverlay } from "reactstrap";
import { CardText } from "reactstrap";
import event1 from "../assets/event1.png"
import event2 from "../assets/event2.png"
import event3 from "../assets/event3.png"
import event4 from "../assets/event4.png"

const Hero = () => {
  return (
    <div className="hero" id="hero">
      <div className="upper">
        <h1 className="title">
          Transforming Occasions into <br /> Great Memories
        </h1>
        <p className="info">
          We specialize in turning ordinary occasions into extraordinary moments
          that stays in your heart forever. We infuse every celebration with
          magic
        </p>
      </div>

      <div className="btns">
        <button className="booknow">Book your Event</button>
        <button className="btn2">How it works</button>
      </div>

      <div className="cards-container">
  <div className="cardss">
    <Card className="custom-card" inverse>
      <CardImg
        alt="Card image cap"
        src={event1} 
        style={{
          height: 300,
        }}
        width="300"
      />
      <CardImgOverlay >
        <CardText className="cardoverlay">Serene Soundscape Soiree</CardText>
      </CardImgOverlay>
    </Card>

    <Card className="custom-card" inverse>
      <CardImg
        alt="Card image cap"
         src={event2} 
        style={{
          height: 300,
        }}
        width="300"
      />
      <CardImgOverlay >
        <CardText className="cardoverlay">FutureTech Expo Hub</CardText>
      </CardImgOverlay>
    </Card>

    <Card className="custom-card" inverse>
      <CardImg
        alt="Card image cap"
         src={event3} 
        style={{
          height: 300,
        }}
        width="300"
      />
      <CardImgOverlay >
        <CardText className="cardoverlay">Nature's Palette Showcase</CardText>
      </CardImgOverlay>
    </Card>

    <Card className="custom-card" inverse>
      <CardImg
        alt="Card image cap"
         src={event4} 
        style={{
          height: 300,
        }}
        width="300"
      />
      <CardImgOverlay >
        <CardText className="cardoverlay">World Flavors Adventure</CardText>
      </CardImgOverlay>
    </Card>


  </div>
</div>

    </div>
  );
};

export default Hero;
