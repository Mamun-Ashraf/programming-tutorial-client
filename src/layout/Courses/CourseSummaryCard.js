import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseDetails from './CourseDetails';

const CourseSummaryCard = () => {

    const courses = useLoaderData();

    return (
        <div className='mt-5'>
            <h3 className='text-center'>Content Details</h3>
            {
                courses.map(course => <CourseDetails
                    key={course._id}
                    course={course}
                ></CourseDetails>)
            }
        </div>
    );
};

export default CourseSummaryCard;