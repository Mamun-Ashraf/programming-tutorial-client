import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
// import { Outlet } from 'react-router-dom';
import CourseCategories from './CourseCategories';
import CourseDetails from './CourseDetails';

const Courses = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col lg='9'>
                        <CourseDetails></CourseDetails>
                    </Col>
                    <Col lg='3'>
                        <CourseCategories></CourseCategories>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Courses;