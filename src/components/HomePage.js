import React from 'react';
import { Link } from 'react-router-dom';
import Carosel from './carosel';
const HomePage = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarif Khan",
      comment: "What I do -> Web Development using HTML, CSS, JavaScript, Wordpress, React, BootStrapet, NodeJs, AWS, MySQL, Playwright, Browser automation, ",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "SKILLS AND COMPETENCIES",
      comment: "Web Development: Knowledge of front-end technologies (HTML, CSS, JavaScript, React etc.) and experience in building web applications.Understanding of database concepts and experience with database",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Software Engineer",
      comment: "Node.js, MySQL(RDS),EC2, SQS, Lambda, Playwright automation, Automate captcha solve, Proxy 3rd party API integration, Github, git etc.",
      image: "https://via.placeholder.com/150",
    }
    // Add more testimonials as needed
  ];
  return (

    <div>
      {/* Hero Section */}
      <div>
        {/* Hero Section */}
        <section className="hero bg-dark text-light py-5" style={{ position: 'relative', backgroundImage: `url('https://images.pexels.com/photos/3747507/pexels-photo-3747507.jpeg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="container">
            <div className="row">
              <div className="col-lg-5 py-5">
                <h1 style={{ color: '#fff' }}><b>Welcome </b> </h1>
                <p style={{ color: '#fff' }}> <b>  Unlock your potential with our comprehensive range of courses.</b></p>
                <Link to="/courses" className="btn btn-primary">Explore Courses</Link>
              </div>
            </div>
          </div>
        </section>


        <section className="hero bg-dark bg-dark bg-gradient text-light py-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <Carosel />
              </div>
              <div className="col-lg-6">
                <div className="d-flex flex-column justify-content-center align-items-center h-100">
                  <h1 className="text-center mb-4">Start your career in Khan's Academy with Ensueno Learning</h1>
                  <p className="text-center">It's a great place to learn about the world of banking. It has helped me build my career foundation strong by giving me good placement and also by developing my personality with soft skill training to make myself more marketable in the global market.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>


      {/* Featured Courses Section */}
      <section className="featured-courses bg-success-subtle py-5">
        <div className="container">
          <h2 className="text-center mb-4">Featured Courses</h2>
          <div className="row">
            {/* Example course cards */}
            <div className="col-md-4 mb-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Course Title 1</h5>
                  <p className="card-text">Short description of the course.</p>
                  <Link to="/course/1" className="btn btn-primary" >Learn More</Link>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Course Title 2</h5>
                  <p className="card-text">Short description of the course.</p>
                  <Link to="/course/2" className="btn btn-primary">Learn More</Link>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Course Title 3</h5>
                  <p className="card-text">Short description of the course.</p>
                  <Link to="/course/3" className="btn btn-primary">Learn More</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials bg-primary-subtle py-5 " >
        <div className="container">
          <h2 className="text-center mb-4">Testimonials Section</h2>
          <div className="row">
            {testimonials.map(testimonial => (
              <div key={testimonial.id} className="col-md-4 mb-4">
                <div className="card">
                  <div className="card-body">
                    <img src={testimonial.image} className="rounded-circle mb-3" alt={testimonial.name} />
                    <h5 className="card-title">{testimonial.name}</h5>
                    <p className="card-text">{testimonial.comment}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Call to Action Section */}
      <section className="call-to-action bg-dark text-light py-5">
        <div className="container">
          <h2 className="text-center mb-4">Ready to get started?</h2>
          <p className="text-center">Enroll now and begin your learning journey with Ensueno Learning.</p>
          <Link to="/courses" className="btn btn-primary d-block mx-auto">Explore Courses</Link>
        </div>
      </section>
      <section className="hero bg-dark text-light py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              {/* Add YouTube video */}
              <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/VIDEO_ID_HERE_1" title="Featured Video 1" allowFullScreen style={{ width: "100%", height: "400px" }}></iframe>
              </div>
            </div>
            <div className="col-lg-6">
              {/* Add YouTube video */}
              <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/VIDEO_ID_HERE_2" title="Featured Video 2" allowFullScreen style={{ width: "100%", height: "400px" }}></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
