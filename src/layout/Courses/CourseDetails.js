import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseDetailsCard from './CourseDetailsCard';

const CourseDetails = () => {

    const courses = useLoaderData();

    return (
        <div>
            <h2>This is course details:{courses.length}</h2>
            {
                courses.map(course => <CourseDetailsCard
                    key={course._id}
                    course={course}
                ></CourseDetailsCard>)
            }
        </div>
    );
};

export default CourseDetails;