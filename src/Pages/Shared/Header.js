import React from 'react';
// import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src='/src/assets/logos/web-dev-logo.jpg'
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    Web Developing
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link className='ms-5 text-decoration-none text-dark' to='/courses'>Courses</Link>
                        <Link className='ms-5 text-decoration-none text-dark' to='/'>FAQ</Link>
                        <Link className='ms-5 text-decoration-none text-dark' to='/blog'>Blog</Link>
                    </Nav>
                    <Nav>
                        <Link className='me-3 text-decoration-none text-dark' to='/login'>Login</Link>
                        <Link className='text-decoration-none text-dark' to='/register'>Register</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;