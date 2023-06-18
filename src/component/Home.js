import React,{useState, useEffect, useRef} from 'react'
import { useNavigate, } from 'react-router-dom'
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import Select from "react-dropdown-select";
import 'bootstrap/dist/css/bootstrap.min.css';
import test from '../assets/test.jpg'
import writto from '../assets/writto.png'
import './Home.css';
export const Home = () => {

  let [name, setName] = useState('');
  let [email, setEmail] = useState('');
  let [phone, setPhone] = useState('');
  let [message, setMessage] = useState('');
  let [wordCount, setWordCount] = useState('');
  let [file, setFile] = useState('');
  let [assignmentType, setAssignmentType] = useState('');
  const assignmentOptions = [
    {
      id: 1,
      asgNname: "Assignment"
    },
    {
      id:  2,
      asgNname: "Dissertation"
    },
    {
      id:  3,
      asgNname: "Topics"
    },
    {
      id:  4,
      asgNname: "Dissertation-Abstract"
    },
    {
      id:  5,
      asgNname: "Dissertation Proposal"
    },
    {
      id:  6,
      asgNname: "Dissertation- Analysis Chapter"
    },
    {
      id:  7,
      asgNname: "Dissertation- Conclusion Chapter"
    },
    {
      id:  8,
      asgNname: "Dissertation- Introduction Chapter"
    },
    {
      id:  9,
      asgNname: "Dissertation- Literature Review Chapter"
    },
    {
      id:  10,
      asgNname: "Dissertation- Methodology Chapter"
    },
    {
      id:  11,
      asgNname: "Dissertation Editing and Proof Reading"
    },
    {
      id:  12,
      asgNname: "Essay"
    },
    {
      id:  13,
      asgNname: "Admission Essay"
    },
    {
      id:  14,
      asgNname: "Scholarship Essay"
    },
    {
      id:  15,
      asgNname: "Case Study"
    },
    {
      id:  16,
      asgNname: "Annotated Bibliography"
    },
    {
      id:  17,
      asgNname: "Book Report/Review"
    },
    {
      id:  18,
      asgNname: "Case Analysis"
    },
    {
      id:  19,
      asgNname: "Course Work"
    },
    {
      id:  20,
      asgNname: "Information and Communication/ Computer Technology"
    },
    {
      id:  21,
      asgNname: "Reaction Paper"
    },
    {
      id:  22,
      asgNname: "Research Paper"
    },
    {
      id:  23,
      asgNname: "Research Proposal"
    },
    {
      id:  24,
      asgNname: "Statistics Project"
    },
    {
      id:  25,
      asgNname: "Term Paper"
    },
    {
      id:  26,
      asgNname: "Thesis"
    },
    {
      id:  27,
      asgNname: "Thesis Proposal"
    },
    {
      id:  28,
      asgNname: "Laboratory Report"
    },
    {
      id:  29,
      asgNname: "Movie Review"
    },
    {
      id:  30,
      asgNname: "Multiple Choice Questions"
    },
    {
      id:  31,
      asgNname: "Power Point Presentation"
    },
    {
      id:  32,
      asgNname: "Article"
    },
    {
      id:  33,
      asgNname: "Speech"
    },
    {
      id:  34,
      asgNname: "Exam"
    },
    {
      id:  35,
      asgNname: "Other"
    }
  ];
  const options = [
    {
      id: 1,
      name: "Leanne Graham"
    },
    {
      id:  2,
      name: "Ervin Howell"
    }
  ];
    let navigte = useNavigate();
    let orderConfirm = (event)=>{
      event.preventDefault();
        navigte('orders')
    }
  return (
    // <>
    // <div>Home</div>
    // <button onClick={orderConfirm}>Place Order</button>
    
    // </>




    <>
    <div className='home-seprator'>
    </div>
    <div className='home-img'>
      <img src={test} alt='home-page'/>
    </div>
    <div className='welcome-text'>
      <h1>Welcome to Writto Solutions</h1>
    </div>
    <div className='mb-5'>
    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '80vh' }}>
      <Row id="contact-details" className="home-row">
        <Col className="home-box">
          <div>
            <div className='home-elements mb-4'>Your Own Assignment Saviour!
            </div>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae mauris vel diam accumsan hendrerit. Nunc pharetra quam lorem, fermentum pretium nisi consequat at. Integer pellentesque tempus faucibus.
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
      <Row id="contact-details" className="home-row">
        <Col className="home-box">
          <div>
            <div className='home-elements mb-4'>Put Your Order Now!
            </div>
            <div>
            <Form onSubmit={orderConfirm} >
              <Form.Group className="mb-4" controlId="name">
               <Form.Control
                  type="text"
                  value={name}
                  required
                  placeholder='Name'
                  onChange={(event) => {
                    setName(event.target.value);
                  }}
                  className="traction-desc-input"
                />
              </Form.Group>

              <Form.Group className="mb-4 " controlId="email">
                <Form.Control
                  type="email"
                  value={email}
                  required
                  placeholder='Email'
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                />
              </Form.Group>

              <Form.Group className="mb-4" controlId="phone">
                <Form.Control
                  type="tel"
                  value={phone}
                  required
                  placeholder='Phone'
                  onChange={(event) => {
                    setPhone(event.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-4" controlId="word-count">
                <Form.Control
                  type="tel"
                  value={wordCount}
                  required
                  placeholder='Word Count'
                  onChange={(event) => {
                    setWordCount(event.target.value);
                  }}
                />
              </Form.Group>
             <Form.Group className="mb-4" controlId="assignment-type">
               <Select options={assignmentOptions} labelField="asgNname" valueField="id" placeholder='Assignment Type'
               onChange={(values) => setAssignmentType(values)} />
               </Form.Group>
               <Form.Group className="mb-4" controlId="file">
                <Form.Control
                  type="file"
                  placeholder='Brief Document'
                  onChange={(event) => {
                    setFile(event.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-4" controlId="message">
                <Form.Control
                  as="textarea"
                  value={message}
                  placeholder='Message'
                  onChange={(event) => {
                    setMessage(event.target.value);
                  }}
                />
              </Form.Group>
                  
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
           </div>
        </Col>
        <Col>
          <div>
          <img src={writto} alt="writto logo" className="writto-img" /> 
          </div>
        </Col>
      </Row>
    </Container>
    
    </div>
    <div className='home-img'>
    <div className='home-seprator mb-3'>
    </div>
      <h1 className='welcome-text '>Testimonials</h1>
      <Container className="d-flex align-items-center justify-content-center">
      <Row id="contact-details" className="home-row">
        <Col className="home-box">
          <div>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae mauris vel diam accumsan hendrerit. Nunc pharetra quam lorem, fermentum pretium nisi consequat at. Integer pellentesque tempus faucibus.
            </p>
           </div>
        </Col>
        <Col className="home-box">
          <div>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae mauris vel diam accumsan hendrerit. Nunc pharetra quam lorem, fermentum pretium nisi consequat at. Integer pellentesque tempus faucibus.
            </p>
           </div>
        </Col>
        <Col className="home-box">
          <div>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae mauris vel diam accumsan hendrerit. Nunc pharetra quam lorem, fermentum pretium nisi consequat at. Integer pellentesque tempus faucibus.
            </p>
           </div>
        </Col>
        <Col className="home-box">
          <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae mauris vel diam accumsan hendrerit. Nunc pharetra quam lorem, fermentum pretium nisi consequat at. Integer pellentesque tempus faucibus.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
    </div>
  </>
  )
}
