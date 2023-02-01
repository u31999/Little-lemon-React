import React from 'react'
import { Card, CardBody, CardImg, CardSubtitle, CardTitle, Col, Row } from 'reactstrap'
import '../styles/topPromo.css'
import CtsButton from './CtsButton'
const TopPromo = () => {
  return (
    <div className='top_promo_container'>
    <Row>
      <Col className='d-flex justify-content-center align-items-center'>
        <Card className='top_promo_card'>
          <CardTitle className='card_title'>Little Lemon
          <CardSubtitle className='card_subtitle'>Chicago</CardSubtitle></CardTitle>
          <CardBody className='card_body'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
          tempor incididunt ut labore et dolore magna aliqua.</CardBody>
          <CtsButton text='Reserve a Table' h={false}/>
        </Card>
      </Col>
      <Col className='d-flex justify-content-center align-items-left'>
      <Card className='img_card d-none d-lg-flex'>
          <CardImg src='res/img/restauranfood.jpg' className='img'></CardImg>
      </Card>
      </Col>
    </Row>
    </div>
  )
}

export default TopPromo
