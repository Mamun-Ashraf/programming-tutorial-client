import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Footer from '../Pages/Shared/Footer';
import Header from '../Pages/Shared/Header';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Pages/Shared/Sidebar';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg='9'>
                        <Outlet></Outlet>
                    </Col>
                    <Col lg='3'>
                        <Sidebar></Sidebar>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;