import React from "react";
import "./Services.css";
import Card from "react-bootstrap/Card";
import { IoIosArrowForward } from "react-icons/io";
import { FaMosque } from "react-icons/fa";
import { LiaBusinessTimeSolid } from "react-icons/lia";
import { FaBirthdayCake } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaTheaterMasks } from "react-icons/fa";
import { SiCrowdsource } from "react-icons/si";

const Services = () => {
  return (
    <div className="s-main" id="services">
      <div className="s-title">
        <p className="sm-title">Our Services</p>
        <h1 className="sl-title">We craft Memories for you</h1>
      </div>

      <div className="cards">
        <Card className="s-card" style={{ width: "30rem", height: "25rem" }}>
          <Card.Body className="s-card-body">
            <FaMosque className="s-icons" />
            <Card.Title className="s-card-title">
              Wedding Coordination
            </Card.Title>
            <Card.Text className="s-card-text">
              Timeline creation and management for the entire wedding day
            </Card.Text>
            <Card.Link href="#" className="s-link">
              See Details <IoIosArrowForward />
            </Card.Link>
          </Card.Body>
        </Card>

        <Card className="s-card" style={{ width: "30rem", height: "25rem" }}>
          <Card.Body className="s-card-body">
            <LiaBusinessTimeSolid className="s-icons" />
            <Card.Title className="s-card-title">Corporate Events </Card.Title>
            <Card.Text className="s-card-text">
              Timeline creation and management for the entire corporate event
            </Card.Text>
            <Card.Link href="#" className="s-link">
              See Details <IoIosArrowForward />
            </Card.Link>
          </Card.Body>
        </Card>

        <Card className="s-card" style={{ width: "30rem", height: "25rem" }}>
          <Card.Body className="s-card-body">
            <FaBirthdayCake className="s-icons" />
            <Card.Title className="s-card-title">Birthday planning</Card.Title>
            <Card.Text className="s-card-text">
              Timeline creation and management for the entire birthday event
            </Card.Text>
            <Card.Link href="#" className="s-link">
              See Details <IoIosArrowForward />
            </Card.Link>
          </Card.Body>
        </Card>

        <Card className="s-card" style={{ width: "30rem", height: "25rem" }}>
          <Card.Body className="s-card-body">
            <FaPeopleGroup className="s-icons" />
            <Card.Title className="s-card-title">Social Gatherings</Card.Title>
            <Card.Text className="s-card-text">
              Timeline creation and management for the entire gathering event
            </Card.Text>
            <Card.Link href="#" className="s-link">
              See Details <IoIosArrowForward />
            </Card.Link>
          </Card.Body>
        </Card>

        <Card className="s-card" style={{ width: "30rem", height: "25rem" }}>
          <Card.Body className="s-card-body">
            <FaTheaterMasks className="s-icons" />
            <Card.Title className="s-card-title">
              Entertainment event
            </Card.Title>
            <Card.Text className="s-card-text">
              Timeline creation and management for the Entertainment event
            </Card.Text>
            <Card.Link href="#" className="s-link">
              See Details <IoIosArrowForward />
            </Card.Link>
          </Card.Body>
        </Card>

        <Card className="s-card" style={{ width: "30rem", height: "25rem" }}>
          <Card.Body className="s-card-body">
            <SiCrowdsource className="s-icons" />
            <Card.Title className="s-card-title">Fundraising Events</Card.Title>
            <Card.Text className="s-card-text">
              Timeline creation and management for the Fundraising event
            </Card.Text>
            <Card.Link href="#" className="s-link">
              See Details <IoIosArrowForward />
            </Card.Link>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Services;
