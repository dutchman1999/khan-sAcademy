// components/CourseDetailPage.js

import React from 'react';
import { useParams } from 'react-router-dom';

const CourseDetailPage = () => {
  // Assuming you're using React Router for dynamic routing
  const { id } = useParams();

  // Sample course data (replace with actual data from your backend)
  const course = {
    id: 1,
    title: "Professional Development",
    description: "Enhance your skills and advance your career with our professional development courses.",
    instructor: "John Doe",
    duration: "6 weeks",
    prerequisites: "Basic knowledge of the subject",
    image: "https://via.placeholder.com/150",
    // Add more details as needed
  };

  return (
    <div>
      <h1>{course.title}</h1>
      <div className="card mb-3">
        <img src={course.image} className="card-img-top" alt={course.title} />
        <div className="card-body">
          <h5 className="card-title">Instructor: {course.instructor}</h5>
          <p className="card-text">{course.description}</p>
          <p className="card-text">Duration: {course.duration}</p>
          <p className="card-text">Prerequisites: {course.prerequisites}</p>
          {/* Add more details here */}
        </div>
      </div>
      {/* Add additional sections like course curriculum, testimonials, enrollment form, etc. */}
    </div>
  );
}

export default CourseDetailPage;
