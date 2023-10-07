import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, FormControl, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './CustomNavbar.css';


const CustomNavbar = () => {
  const [cartItemCount, setCartItemCount] = useState(3);
  return (
    <Navbar bg="black" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">Ecommerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/allProductPage">Products</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact Form</Nav.Link>
            <Nav.Link as={Link} to="/checkout">Check Out Page</Nav.Link>
            <Nav.Link as={Link} to="/orderHistoryPage">Order History</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/login" className='pt-3'>Login/Signup</Nav.Link>
            <Nav.Link as={Link} to="/cart" className="cart-icon">
              <div className="cart-content">
                <FontAwesomeIcon icon={faShoppingCart} size="lg" />
                <span className="cart-item-count">{cartItemCount}</span> 
              </div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
