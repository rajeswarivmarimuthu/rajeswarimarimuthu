// Import necessary internal and external modules  
import React from 'react';
import './styles/Footer.css'

//importing logos as assets
import ghlogo from '../images/GitHub_logo.png'
import lnkinlogo from '../images/linkedin_social media_icon.png'
import twtlogo from '../images/Twitter-logo.svg'



// Creating the footer section as separate component
const Footer = () => {
  return (
    <div className = 'fixed-bottom'>
    <footer className="w-100 footbar" >
        <ul className="nav-links">
          <li className="nav-item">
            <a href="https://github.com/rajeswarivmarimuthu" target="_blank" rel="noreferrer">
              <img src={ghlogo} className="photo" alt="github" />
            </a>
          </li>
          <li className="nav-item">
            <a href="https://www.linkedin.com/in/rajeswari-marimuthu-b634bb17/" target="_blank" rel="noreferrer">
                <img src={lnkinlogo} className="photo" alt="LinkedIn" />
            </a>
          </li>
          <li className="nav-item">
            <a href="https://twitter.com/marimra3" target="_blank" rel="noreferrer">
                <img src={twtlogo} className="photo" alt="Twitter" />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
