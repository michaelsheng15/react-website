import React from "react";
import "./NavCard.css";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

const NavCard = () => {
  return (
    <Container className="screen">
      <Row className='row'>
        <Col className='nav-col'>
          <Link to="/experience">
            <p className="nav-label">Experience 🚀</p>
          </Link>
        </Col>
        <Col className='nav-col'>
          <Link to="/projects">
            <p className="nav-label">Projects 🔧</p>
          </Link>
        </Col>
        <Col className='nav-col'>
          <Link to="/hackathons">
            <p className="nav-label">Hackathons ☕️</p>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default NavCard;
