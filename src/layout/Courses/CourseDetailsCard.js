import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaFileDownload } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CourseDetailsCard = ({ course }) => {

    const { _id, course_name, course_heading, course_details, photo } = course;

    const handleCheckOut = () => {
        console.log('check out page')
    }
    return (
        <Card className='my-5'>
            <Card.Header className='d-flex justify-content-between align-items-center'>
                <h4>{course_name}</h4>
                <FaFileDownload></FaFileDownload>
            </Card.Header>
            <Card.Body>
                <Card.Title>{course_heading}</Card.Title>
                <Card.Img variant="top" src={photo} />
                <Card.Text>
                    {
                        course_details.length > 250 ?
                            <>{course_details.slice(0, 250) + '...'}<Link to={`/course/${_id}`}>Read More</Link></>
                            :
                            course_details
                    }
                </Card.Text>
            </Card.Body>
            <Button onClick={handleCheckOut} className='me-3'>Get Premium Access</Button>
        </Card>
    );
};

export default CourseDetailsCard;