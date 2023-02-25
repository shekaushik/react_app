import React from 'react';
import '../page1.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import backgroundImage from '../images/web/footerbg.png';


const Footer = () => {
  return (
    <div className="bg-image bg-height" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <Container className=''>
        <Row className="justify-content-center align-items-center" style={{ height: '100%' }}>
          <Col md={10} lg={6} className="text-center text-white">
          <h4 className='font-Montserrat'>Download the app now.</h4>
            <p className="fw-bold text-center fs-1 font-poppins">Available on your favorite store. Start your premium experience now</p>
            <div>
              <Button size='lg'className="btn-orange mr-3 r-30 font-Montserrat">Playstore</Button>
              {' '}
              <Button size='lg' variant="outline-light" className='font-Montserrat  '>App Store</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
