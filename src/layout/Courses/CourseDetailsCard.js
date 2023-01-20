import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaFileDownload } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';

const CourseDetailsCard = () => {

    const courseCard = useLoaderData();

    return (
        <div >
            <h3 className='text-center mt-5'>Content details</h3>
            {
                courseCard.map(card =>
                    <Card key={card._id} className='mt-5 w-75 mx-auto'>
                        <Card.Header className='d-flex justify-content-between align-items-center'>
                            <h4>{card.course_name}</h4>
                            <FaFileDownload></FaFileDownload>
                        </Card.Header>
                        <Card.Body className='mx-auto'>
                            <Card.Title>{card.course_heading}</Card.Title>
                            <Card.Img variant="top" src={card.photo} />
                            <Card.Text>
                                {
                                    card.course_details
                                }
                            </Card.Text>
                            <Link to='/checkout'><Button>Get Premium Access</Button></Link>
                        </Card.Body>

                    </Card>
                )
            }
        </div>
    );
};

export default CourseDetailsCard;