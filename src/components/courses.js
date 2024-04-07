// components/CoursesPage.js

import React from 'react';

const CoursesPage = () => {
  // Sample course data (replace with actual data from your backend)
  const courses = [
    {
      id: 1,
      title: "Professional Development",
      description: "Enhance your skills and advance your career with our professional development",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      title: "Technology and IT",
      description: "Stay updated with the latest technologies and trends in the IT industry.",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      title: "Technology and IT",
      description: "Stay updated with the latest technologies and trends in the IT industry.",
      image: "https://via.placeholder.com/150",
    },    {
      id: 1,
      title: "Professional Development",
      description: "Enhance your skills and advance your career with our professional development",
      image: "https://via.placeholder.com/150",
    },
    // Add more courses as needed
  ];

  return (
    <div >
      <h1>Explore Our Courses</h1>
      <div className="row">
        {courses.map(course => (
          <div key={course.id} className="col-md-3 mb-4" >
            <div className="card">
              <img src={course.image} className="card-img-top"  alt={course.title} />
              <div className="card-body">
                <h5 className="card-title">{course.title}</h5>
                <p className="card-text">{course.description}</p>
                <a href={`/course/${course.id}`} className="btn btn-primary">Learn More</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CoursesPage;
