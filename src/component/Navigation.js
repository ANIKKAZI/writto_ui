import React from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar,Nav } from 'react-bootstrap'
import logo from '../assets/logo.png'
export const Navigation = () => {
  return (
    // <nav className='primary-nav'>
    //     <NavLink to='/'>Home</NavLink>
    //     <NavLink to='/about'>About</NavLink>
    //     <NavLink to='/products'>Products</NavLink>
    // </nav>
    <Navbar  expand="lg" bg="light" variant="light">
      <Navbar.Brand href="/" className="brand-info pt-4">
        <img src={logo} alt="Logo" className="logo-style mr-1" /> 
        Writto Solutions
        </Navbar.Brand>
     <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav id= "nav-element" className="ml-auto navigation-select pt-4">
           <NavLink to='/' className="mr-3 ">Home</NavLink>
           <NavLink to='/about' className="mr-3">About</NavLink>
           <NavLink to='/products' className="mr-3">Products</NavLink>
           <NavLink to='/contact' className="mr-3">Contact</NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

  )
}
