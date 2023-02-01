import React from 'react'
import { Button, Card, CardBody, CardImg, CardText } from 'reactstrap'
import '../styles/root.css'

const DishesCard = ({dishName, description, imgSrc, price}) => {
  return (
    <Card className='dish_card'>
        <CardImg src={imgSrc} className='dish_card_img img-fluid card-img-top' />
        <CardBody className='specials_menu_card_body'>
            <div className='d-flex justify-content-space '>
                <div className='text-left medium_bold'>{dishName}</div>
                <div className='text-right price medium_bold'>${price}</div>
            </div>
            <CardText className='text-left card-description'>
                {description}
            </CardText>
            <Button className='delivery_button'>
                Order a delivery <img src='res/icons/deliver-bike.svg' alt='icon' />
            </Button>
        </CardBody>
    </Card>
  )
}

export default DishesCard
