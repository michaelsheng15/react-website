import { Container, Row, Col } from "react-bootstrap";
import NavCard from "../Components/NavCard";
import "./Views.css";


const AboutMe = () => {
  return (
    <Container>
      <NavCard />
      <h1 className="title">Hackathons</h1>
      <p className="sub-exp-text">Sample</p>

      <div className="item-container-wrapper">
        <Row className="item-container">
          <Col lg={8} className="text-col">
            <div className='text-wrapper'>
                <h3>HacktheNorth 2021</h3>
                <p>Cooky</p>
            </div>
          </Col>
          <Col lg={4} className="img-col">
            {/* <img src={yrlogo}/> */}
          </Col>
        </Row>
      </div>
      
    </Container>
  );
};
export default AboutMe;
