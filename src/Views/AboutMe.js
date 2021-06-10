import { Container, Row, Col } from "react-bootstrap";
import NavCard from "../Components/NavCard";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <Container>
      <NavCard />
      <h1 className="title">About Me</h1>
      <p className="sub-exp-text">Bio, skills and photos.</p>
      <Row>
        <Col lg={8} className="large-col">
          <div>
            <p>Sample</p>
          </div>
        </Col>
        <Col lg={4} className="small-col">
          <div>
            <p>img</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default AboutMe;
