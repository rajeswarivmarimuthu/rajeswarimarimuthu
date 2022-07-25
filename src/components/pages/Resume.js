// Import necessary internal and external modules  
import React from 'react';
import '../styles/Resume.css';

// Creating the resume section as separate component
export default function Resume() {
  return (
    <div className="resume-container">
      <h4>
       Download my&nbsp;     
      <a id='resume' href="../images/Raji-resume.pdf" download rel="noopener noreferrer" target="_blank">
      resume
      </a>
      </h4>
      <br></br>
      <div>
        <h4> Front-end Proficiencies</h4>
        <ul>
          <li> HTML </li>
          <li> CSS </li>
          <li> javascript </li>
          <li> React </li>
          <li> Bootstrap </li>
        </ul>
      </div>
      <br></br>
      <h4> Back-end Proficiencies</h4>
      <ul>
        <li> Building rest APIs </li>
        <li> Node </li>
        <li> Express </li>
        <li> MySQL, Sequelize </li>
        <li> MongoDB, Mongoose </li>
      </ul>
    </div>
  );
}