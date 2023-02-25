import React from 'react';
import sec from "../images/web/tiltedwhiteScreen.png"
import { Container, Row, Col, Image } from 'react-bootstrap';

function ImageTextPage2() {
  return (
    <Container>
      <Row>
       
        <Col md={6}>
          <h1>Shop for your favorites
meal as e dey hot.</h1>
          <p>Shop for your favorite meals or drinks
and enjoy while doing it.</p>
        </Col>
        <Col md={6}>
          <Image src={sec} />
        </Col>
      </Row>
    </Container>
  );
}

export default ImageTextPage2;