
// import necessary internal and external modules 
import React from 'react';
import '../styles/Contact.css'

//Creating a form component enabling the users to reach out to me! using formspree to get the mail
export default function Contact() {
  return (
    <div className="w-100 container contact-container">
      <h3>Contact Page</h3>
      <form
            action="https://formspree.io/f/mgedgpnk"
            method="POST"
          >
        <div className="form-fields" id="username">
          <label> Requestor Name: </label>
          <input
            name="Name"
            placeholder="Add your name"
            type="text"
            className="text-input"
          />
        </div>
        <div className="form-fields" id="email">
          <label>Email id: </label>
          <input
            name="email"
            placeholder="Add your email"
            type = "email"
            className="text-input"
          />
        </div>
        <div className="form-fields" id="comment">
          <label>Message:</label>
          <textarea
            name="Message"
            placeholder="Enter your text..."
            className="text-input"
          ></textarea>
        </div>
        
        <div className="btn-grp">
          <button className="custom-btn" type="submit">
            Submit
          </button>
        </div>
        </form>
      </div>
  );
}