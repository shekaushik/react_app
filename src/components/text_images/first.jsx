import React from 'react';
import login from "../images/web/login2.png"
import { Container, Row, Col, Image } from 'react-bootstrap';

function ImageTextPage1() {
  return (
    <Container>
      <Row>
        <Col md={6}>
          <Image src={login} />
        </Col>
        <Col md={6}>
          <h1>Create/login to an existing
account to get started</h1>
          <p>An account is created with your email
and a desired password</p>
        </Col>
      </Row>
    </Container>
  );
}

export default ImageTextPage1;





