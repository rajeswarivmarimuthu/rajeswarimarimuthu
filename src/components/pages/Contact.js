import React from 'react';
import './styles/Contact.css';

export default function Contact() {
  return (
    <div className="w-100 container">
      <h3>Contact Page</h3>
      <form
            action="https://formspree.io/f/mgedgpnk"
            method="POST"
          >
        <div className="text-input" id="username">
          <input
            name="Name"
            placeholder="Add your name"
            type="text"
          />
        </div>
        <div className="text-input" id="email">
          <input
            name="email"
            placeholder="Add your email"
            type = "email"
          />
        </div>
        <div className="text-input" id="comment">
          <textarea
            name="Message"
            placeholder="Enter your text..."
          ></textarea>
        </div>
        
        <div className="">
          <button className="btn" type="submit">
            Submit
          </button>
        </div>
        </form>
      </div>
  );
}