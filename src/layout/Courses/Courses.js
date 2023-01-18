import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import CourseCategories from './CourseCategories';

const Courses = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col lg='8'>
                        <Outlet></Outlet>
                    </Col>
                    <Col lg='4'>
                        <CourseCategories></CourseCategories>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Courses;