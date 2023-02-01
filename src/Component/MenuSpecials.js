import { Col, Container, Row } from 'reactstrap'
import '../styles/specialsmenu.css'
import '../styles/root.css'
import CtsButton from './CtsButton'
import DishesCard from './DishesCard'
const MenuSpecials = () => {
  const dishes = [
    {
      id: 1,
      name: 'Greek salad',
      imgSrc: 'res/dishes/greek salad.jpg',
      // eslint-disable-next-line no-multi-str
      description: 'A traditional Greek salad consists of sliced cucumbers, \
      tomatoes, green bell pepper, red onion, olives, and cheese.',
      price: '17.4'
    },
    {
      id: 2,
      name: 'Bruschetta',
      imgSrc: 'res/dishes/bruchetta.svg',
      // eslint-disable-next-line no-multi-str
      description: 'Traditional bruschetta with roma tomatoes, fresh basil, \
      extra virgin olive oil and balsamic drizzle is the opener.',
      price: '9'
    },
    {
      id: 3,
      name: 'Lemon dessert',
      imgSrc: 'res/dishes/lemon dessert.jpg',
      // eslint-disable-next-line no-multi-str
      description: 'And for dessert, Lopez has her own churro recipe, made \
      to order with a French pâte à choux pastry dough.',
      price: '22'
    },
  ]
  return (
    <Container className='padding-top-100 specials_container px-4'>
      <Row className='specials_upper-row pt-4 d-flex px-0
       align-items-center justify-content-center'>
        <Col>
          <h3 className='extra-bold-font'>Specials</h3>
        </Col>
        <Col>
          <CtsButton text='Online Menu' h={true}/>
        </Col>
      </Row>
      <Row className='px-4 specials_lower-row'>
      {
        dishes.map(dish => (
          <Col key={dish.id}>
          <DishesCard dishName= {dish.name}
                description= {dish.description}
              imgSrc= {dish.imgSrc}
              price= {dish.price} />
        </Col>
        ))
      }
      </Row>
    </Container>
  )
}

export default MenuSpecials
