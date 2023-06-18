import React from 'react'
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import help from '../assets/help.png'
import writto from '../assets/writto.png'
import about from '../assets/about.png'
import './About.css';
export const About = () => {
  let handleSubmit = (event) => {
    event.preventDefault();
    console.log('submitted');
  };






  return (
    <>
    <div className="about-heading">
    <h2>Introducing Writto - Your Trusted Writing Team</h2>		
    </div>
    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '80vh' }}>
      <Row id="contact-details" className="about-row">
        <Col className="about-box">
          <div>
            <div className='about-elements mb-4'>Company Background
            </div>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae mauris vel diam accumsan hendrerit. Nunc pharetra quam lorem, fermentum pretium nisi consequat at. Integer pellentesque tempus faucibus. Nunc tristique mattis imperdiet. Quisque in eros scelerisque, dignissim est ut, tincidunt neque. Donec et mi ut turpis iaculis volutpat. Nunc in diam felis. Integer finibus ligula vitae cursus fringilla. Aliquam varius ipsum venenatis tempor auctor. Etiam at nulla ipsum. In magna sapien, tempus quis lorem in, posuere tincidunt elit. Proin scelerisque bibendum mauris sit amet tincidunt. Etiam dapibus condimentum risus, id aliquet ligula aliquam vulputate.
            </p>
           </div>
        </Col>
        <Col>
          <div>
          <img src={writto} alt="writto logo" className="writto-img" /> 
          </div>
        </Col>
      </Row>
    </Container>

    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '80vh' }}>
      <Row id="contact-details" className="about-row">
        <Col className="about-box">
          <div>
            <div className='about-elements mb-4'>Our Mission: Committed to Academic Excellence
            </div>

            <ul>
            <li>
              <div>Expertise and Experience: A Team of Seasoned Writers</div>
            </li>  
            <li>
              <div>Client Satisfaction: Delivering Top-Quality Academic Solutions</div>
            </li>  
            <li>
              <div>Confidentiality and Integrity: Your Trust is Our Priority</div>
            </li>  
            <li>
              <div>Timely Delivery: Meeting Deadlines with Precision</div>
            </li>  
            <li>
              <div>Academic Integrity: Upholding Ethical Standards in Writing</div>
            </li>  
            <li>
              <div>Affordable and Transparent Pricing: Value for Your Investment</div>
            </li>  
            <li>
              <div>Feedback and Improvement: Continuous Enhancement for Excellence</div>
            </li>  
            </ul>  
             </div>
        </Col>
        <Col>
          <div>
          <img src={about} alt="about us" className="writto-img"  /> 
          </div>
        </Col>
      </Row>
    </Container>
    
    </>
  )
}
