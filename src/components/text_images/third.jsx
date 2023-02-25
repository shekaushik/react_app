import React from 'react';
import payment from "../images/web/payment.png"
import { Container, Row, Col, Image } from 'react-bootstrap';

function ImageTextPage3() {
  return (
    <Container>
      <Row>
        <Col md={6}>
          <Image src={payment} />
        </Col>
        <Col md={6}>
          <h1>When you done check out
and get it delivered.</h1>
          <p>When you done check out and get it 
delivered with ease.</p>
        </Col>
      </Row>
    </Container>
  );
}

export default ImageTextPage3;