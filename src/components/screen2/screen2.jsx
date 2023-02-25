import '../page1.css'
import React from 'react'
import orangeScreen from '../images/web/orangescreen.png'
import whiteScreen from '../images/web/tiltedwhite.png'
import { Container,Row,Col } from 'react-bootstrap'

const Screen2 = () => {
  return (
    <div>
      <Container>
      <Row>
      <Col>
        <img src={orangeScreen} className="img-fluid" alt="Image 1" />
      </Col>
      <Col>
        <img src={whiteScreen} className="img-fluid" alt="Image 2" height='500px' width='auto' />
      </Col>
    </Row>
        <hr></hr>
      </Container>
        <h3 className='font-poppins'>How the app works</h3>
    </div>
  )
}

export default Screen2