import React from 'react';
import { HashRouter, Route, Link, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutPage from './components/aboutpage';
import CoursesPage from './components/courses';
import CourseDetailPage from './components/Details';
import FAQPage from './components/faqpage';
import ContactPage from './components/Footer';
import Register from './components/Register';

function App() {
  return (
    <HashRouter>
      <div>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-3 sticky-top">
          <div className="container">
            <Link to='/' className='navbar-brand'>Khan's Academy</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to='/' className='nav-link'>Home</Link>
                </li>
                <li className="nav-item">
                  <Link to='/courses' className='nav-link'>Courses</Link>
                </li>
                <li className="nav-item">
                  <Link to='/about' className='nav-link'>About</Link>
                </li>
                <li className="nav-item">
                  <Link to='/Register' className='nav-link'>Register</Link>
                </li>
                <li className="nav-item">
                  <Link to='/faq' className='nav-link'>FAQ</Link>
                </li>
                <li className="nav-item">
                  <Link to='/contact' className='nav-link'>Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/about" element={<AboutPage />} />
          <Route exact path="/courses" element={<CoursesPage />} />
          <Route exact path="/course/:id" element={<CourseDetailPage />} />
          <Route exact path="/faq" element={<FAQPage />} />
          <Route exact path="/Register" element={<Register />} />
          <Route exact path="/contact" element={<ContactPage />} />
        </Routes>
        <footer className="bg-info text-white p-5 mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <h1 className="text-white">About Us</h1>
                            <p>
                            In this code, I've wrapped the card components inside div elements with the class col-md-4, which means that on medium-sized devices and above, each card will take up 4 out of 12 columns, effectively creating a responsive grid layout. You can adjust the column size as needed for your layout requirements.
                            </p>
                        </div>
                        <div className="col-lg-4">
                            <h4> Contact to support </h4>
                            <p>Mobile no. 9365919622</p>
                            <p> E-mail: sarifkhanngn02@gmail.com </p>
                        </div>
                        <div className="col-lg-4">
                            <h4> Follow us in social media </h4>
                            <p>  <i className="fab fa-facebook fa-lg"></i> www.facebook.com </p>
                            <p>  <i className="fab fa-instagram fa-lg"></i> www.instagram.com </p>
                            <p>  <i className="fab fa-twitter fa-lg"></i> www.twitter.com </p>
                            <p>  <i className="fab fa-linkedin fa-lg"></i> www.linkedin.com </p>

                        </div>
                    </div>

                </div>

            </footer>
      </div>
    </HashRouter>
  );
}

export default App;
