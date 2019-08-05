import React, { useState } from 'react'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'
import { Link } from 'react-router-dom'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const isToggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <Navbar color='light' light expand='md'>
      <NavbarBrand tag={Link} to='/'>Minhas Séries</NavbarBrand>
      <NavbarToggler onClick={isToggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className='ml-auto' navbar>
          <NavItem>
            <NavLink tag={Link} to='/genres/'>Genêros</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  )
}

export default Header
