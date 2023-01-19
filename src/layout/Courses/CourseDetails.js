import React, { useEffect, useState } from 'react';
// import { useLoaderData } from 'react-router-dom';
import CourseDetailsCard from './CourseDetailsCard';

const CourseDetails = () => {

    // const courses = useLoaderData();
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/courses')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    return (
        <div className='mt-5'>
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