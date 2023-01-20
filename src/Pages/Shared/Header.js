import React, { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { FaUser } from 'react-icons/fa';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';


const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .then(error => console.error(error))
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src='/src/assets/logos/devLogo.webp'
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
                        {
                            user?.uid ?
                                <Button onClick={handleLogOut} className='me-3'>Logout</Button>
                                :
                                <>
                                    <Link to='/login'><Button className='me-3'>Login</Button></Link>
                                    <Link to='/register'><Button className='me-3'>Register</Button></Link>
                                </>
                        }
                        {
                            user?.photoURL ?
                                <Image
                                    style={{ height: '30px' }} roundedCircle
                                    src={user.photoURL}>
                                </Image>
                                :
                                <FaUser></FaUser>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;