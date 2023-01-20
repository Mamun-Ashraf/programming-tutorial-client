
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import CourseCategories from './CourseCategories';


const Courses = () => {


    return (
        <Container>
            <Row>
                <Col lg='9'>
                    <Outlet></Outlet>
                </Col>
                <Col lg='3'>
                    <CourseCategories></CourseCategories>
                </Col>
            </Row>
        </Container>
    );
};

export default Courses;