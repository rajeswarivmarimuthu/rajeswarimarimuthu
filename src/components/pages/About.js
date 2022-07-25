// Import necessary internal and external modules  
import React, { Component } from 'react';
import '../styles/About.css';

// Creating the about section as separate component
export default function About() {
  return (
    <div className="about-container">
      <h2>About Me</h2>
      <p>
        Passionate technology leader adept at building and leading high performance teams for organization's success. 
        Calm and composed with strong crisis management and problem solving skills. My curiousity to use technology to drive business got me here. 
        Have been in technology space for more than 18 years and witnessing how it solves our day today problems, I am inspired to become an techy entrepreneur. 
        Words that summarizes me "Humility, Integrity, Curiousity". 
        <br></br>
      </p>   
      <p>
        Apart from spending time with my family and my full time Engineering leader, 
        <ul>
        <li>Mentor women, non-binary, under-represented minorities to fight the systemic barriers and develop the necessary skills to establish themselves in the industry.</li>
        <li>Challenge myself solving algorithms</li>
        <li>Supporting my friends in building web applications</li>
        <li>Practice lot of pilates, yoga!!! </li>
        </ul>
      </p>
    </div>
  );
}