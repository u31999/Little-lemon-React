import React from 'react'
import '../styles/header.css'
import { Col, Row, Navbar, Nav, NavLink, NavbarToggler, Collapse, NavItem } from 'reactstrap'
const Header = () => {
    const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header>
    <Row className='justify-content-evenly d-flex'>
      <Col className='col-6 col-md-2'>
        <div className='logo'></div>
      </Col>
      <Col className='col-6'>
       <Navbar expand="md p-0">
                <NavbarToggler onClick={() => { setIsOpen(!isOpen) }} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="#" className='navigation_item'>Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#" className='navigation_item'>About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#" className='navigation_item'>Menu</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#" className='navigation_item'>Reservations</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#" className='navigation_item'>Order Online</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#" className='navigation_item'>Login</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
      </Col>
    </Row>
    </header>
  )
}

export default Header
