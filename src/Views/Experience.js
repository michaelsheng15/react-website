import { Container, Row, Col } from "react-bootstrap";
import NavCard from "../Components/NavCard";
import "./Views.css";


const ExperienceCard = () => {
  return (
    <Container>
      <NavCard />
      <h1 className="title">Experience</h1>
      <p className="sub-exp-text">Internships, clubs and freelancing</p>

      <div className="item-container-wrapper">
        <Row className="item-container">
          <Col lg={8} className="text-col">
            <div className='text-wrapper'>
                <h3>York Region</h3>
                <p>Technical Support Analyst</p>
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
export default ExperienceCard;
