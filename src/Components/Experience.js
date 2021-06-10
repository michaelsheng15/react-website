import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NavCard from "./NavCard";
import './Experience.css';

const ExperienceCard = () =>{
    return(
        <Container>
            <NavCard />
            <h1 className='title'>Experience</h1>
            <p className='sub-text'>Internships, clubs and freelancing</p>

            <div className='item-container-wrapper'>
                <Row className='item-container'>
                    <Col lg={8} className='text-col'><Link to='/home'><p>text</p></Link></Col>
                    <Col lg={4} className='img-col'><Link to='/home'><p>img</p></Link></Col>

                </Row>
            </div>

            
        </Container>

    );
}
export default ExperienceCard;