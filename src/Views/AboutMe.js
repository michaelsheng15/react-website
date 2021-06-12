import { Container, Row, Col } from "react-bootstrap";
import NavCard from "../Components/NavCard";
import "./AboutMe.css";
import uw2 from "../img/uw2.png";

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
        <Row className="row-about">
          <img></img>
          <p className="p">
            Hi, I’m Michael! A dedicated, team-oriented student with extensive
            experience in team leadership, conflict resolution and project
            management. When I am not in class, I enjoy working on side projects
            to solve complex, everday problems to apply and further my learning.
            I am a diligent, ambitious individual and I am eager to build on my
            academic foundation in computer science through real-world
            experiences.
          </p>
        </Row>

        <Row className="row-about">
          <h3>Education</h3>
          <p className="p">
            I am currently a management engineering student at the University of
            Waterloo. Management engineering is a unique, interdisciplinary
            program primarily focusing on computer science, industrial
            engineering, and management sciences to optimize processes in any
            organization. Being the only program of its kind in Canada,
            management engineering produces a degree suitable for a career in
            any industry.
          </p>
          <img src={uw2} className="uw" />
        </Row>

        <Row className="row-about">
          <h3>Gallery</h3>
          <Slider {...settings}>
            <div>
              <p>1</p>
            </div>
            <div>
              <p>2</p>
            </div>
            <div>
              <p>3</p>
            </div>
            <div>
              <p>4</p>
            </div>
          </Slider>
        </Row>
      </Container>
    </div>
  );
};
export default AboutMe;
