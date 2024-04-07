// components/ContactPage.js

import React from 'react';

const ContactPage = () => {
  return (
    <div>
      <h1>Contact Us</h1>
      <p>If you have any questions or need assistance, please feel free to contact us using the form below:</p>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" className="form-control" id="name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" className="form-control" id="email" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea className="form-control" id="message" rows="5"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      <p>Alternatively, you can reach us via email at <a href="mailto:info@example.com">info@example.com</a> or by phone at +1 (123) 456-7890.</p>
    </div>
  );
}

export default ContactPage;
