import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import help from '../assets/help.png'
const Contact = () => {
  let [name, setName] = useState('');
  let [email, setEmail] = useState('');
  let [phone, setPhone] = useState('');
  let [message, setMessage] = useState('');
  let focusInput = useRef();

  useEffect(() => {
    focusInput.current.focus();
    return () => {
      // Unsubscribe from the snapshot listener when the component unmounts
      // getData();
    };
  }, []);

  let handleSubmit = (event) => {
    event.preventDefault();
    console.log('submitted');
  };

  return (
    <>
      <div className="contact-heading">
			<h2>How May We Help You</h2>		
      </div>
    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '80vh' }}>
      <Row id="contact-details" className="contact-row">
        <Col className="contact-box">
          <div>
            <div className='contact-elements mb-4'>Phone
              <div>+91 990327058</div>
            </div>
            <div className='contact-elements mb-4'>Instagram
              <div>insta id</div>
            </div>
            <div className='contact-elements mb-4'>Email
              <div>writtoindia@gmail.com</div>
            </div>
            <div className='contact-elements mb-4'>Facebook
              <div>facebook messenger url</div>
            </div>
          </div>
        </Col>
        <Col xs={12} sm={6} md={6} lg={4} className="contact-box">
          <div>
            <Form onSubmit={handleSubmit} >
              <Form.Group className="mb-1" controlId="name">
                <Form.Label className="customer-name">Name *</Form.Label>
                <Form.Control
                  type="text"
                  value={name}
                  required
                  ref={focusInput}
                  onChange={(event) => {
                    setName(event.target.value);
                  }}
                  className="traction-desc-input"
                />
              </Form.Group>

              <Form.Group className="mb-1 " controlId="email">
                <Form.Label>Email *</Form.Label>
                <Form.Control
                  type="email"
                  value={email}
                  required
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                />
              </Form.Group>

              <Form.Group className="mb-1" controlId="phone">
                <Form.Label>Phone *</Form.Label>
                <Form.Control
                  type="tel"
                  value={phone}
                  required
                  onChange={(event) => {
                    setPhone(event.target.value);
                  }}
                />
              </Form.Group>

              <Form.Group className="mb-1" controlId="message">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  value={message}
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
        </Col>
        <Col>
          <div className="help-image">
          <img src={help} alt="help" className="help-image" /> 
          </div>
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default Contact;
