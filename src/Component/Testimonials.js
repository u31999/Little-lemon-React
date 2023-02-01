import React from 'react'
import '../styles/root.css'
import '../styles/testimonials.css'
import { Card, CardText,CardBody, CardImg, Container, Row, Col } from 'reactstrap'

const TestimonialsCard = (text, imgSrc) => {
  return(
    <Card>
      <CardBody>
        <CardImg src={imgSrc} />
        <CardText>
          {text}
        </CardText>
      </CardBody>
    </Card>
  )
}

const Testimonials = () => {
  const data = []
  return (
    <Container className='padding-top-100 px-4 specials_container testimonials-container'>
      <Row>
        <h3>
        Testimonials
        </h3>
      </Row>
      <Row>
      {data.map(el => (
        <Col>
          <TestimonialsCard />
        </Col>
      ))}
      </Row>
    </Container>
  )
}

export default Testimonials
