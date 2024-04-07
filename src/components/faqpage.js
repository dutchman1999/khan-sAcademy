// components/FAQPage.js

import React from 'react';

const FAQPage = () => {
  return (
    <div>
      <h1>Frequently Asked Questions</h1>
      <div>
        <h3>Enrollment and Payment</h3>
        <p>Q: How do I enroll in a course?</p>
        <p>A: You can enroll in a course by visiting the course detail page and clicking on the "Enroll Now" button.</p>
        {/* Add more FAQs */}
      </div>
      <div>
        <h3>Course Content and Structure</h3>
        <p>Q: Can I access the course materials after completing the course?</p>
        <p>A: Yes, you will have lifetime access to the course materials once you enroll.</p>
        {/* Add more FAQs */}
      </div>
      {/* Add more FAQ categories */}
    </div>
  );
}

export default FAQPage;
