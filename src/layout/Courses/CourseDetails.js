import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaFileDownload } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CourseDetails = ({ course }) => {

    const { _id, course_name, course_heading, course_details, photo } = course;

    return (
        <Card className='mt-5 w-75 mx-auto'>
            <Card.Header className='d-flex justify-content-between align-items-center'>
                <h4>{course_name}</h4>
                <FaFileDownload></FaFileDownload>
            </Card.Header>
            <Card.Body className='mx-auto'>
                <Card.Title>{course_heading}</Card.Title>
                <Card.Img variant="top" src={photo} />
                <Card.Text>
                    {
                        course_details.length > 250 ?
                            <>{course_details.slice(0, 250) + '...'}<Link to={`/courses/${_id}`}>Read More</Link></>
                            :
                            course_details
                    }
                </Card.Text>
                <Link to='/checkout'><Button>Get Premium Access</Button></Link>
            </Card.Body>

        </Card>
    );
};

export default CourseDetails;