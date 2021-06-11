import { Container, Row, Col } from "react-bootstrap";
import NavCard from "../Components/NavCard";
import "./AboutMe.css";

import React from "react";
import Slider from "react-slick";

const AboutMe = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <NavCard />
      <Container>
        <h1 className="title">About Me</h1>
        <p className="sub">Bio, skills and photos.</p>
      </Container>
      <Slider {...settings}>
 
      </Slider>
    </div>
  );
};
export default AboutMe;
