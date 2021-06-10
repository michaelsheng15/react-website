import { Container, Row, Col } from "react-bootstrap";
import NavCard from "../Components/NavCard";
import "./Views.css";


const Projects = () => {
  return (
    <Container>
      <NavCard />
      <h1 className="title">Projects</h1>
      <p className="sub-exp-text">Sample</p>

      <div className="item-container-wrapper">
        <Row className="item-container">
          <Col lg={8} className="text-col">
            <div className='text-wrapper'>
                <h3>Sample</h3>
                <p>Sample</p>
            </div>
          </Col>
          <Col lg={4} className="img-col">
          </Col>
        </Row>
      </div>
      
    </Container>
  );
};
export default Projects;
