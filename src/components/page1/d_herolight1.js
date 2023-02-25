import React from 'react';
import '../page1.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import backgroundImage from '../images/web/headerbg.png';



const Page1 = () => {
  return (
    <div className="bg-image bg-height " style={{ backgroundImage: `url(${backgroundImage})` }}>
      <Container >
        <Row className="justify-content-center align-items-center " style={{ height: '100%' }}>
          <Col md={10} lg={6} className="text-center text-white">
            <h3 className='font-Montserrat position-absolute food_App '>Food app</h3>
            <p className="fw-bold text-center fs-1 font-poppins">Why stay hungry when you can order form Bella Onojie.</p>
            <h4 className='font-Montserrat'>Download the bella onoje’s food app now on</h4>
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

export default Page1;
