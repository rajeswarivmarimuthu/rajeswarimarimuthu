//import necessary iinternal and external modules
import React from 'react';
import {useState} from 'react';
import '../styles/Work.css'

//importing the pictures from the library
import knickknack from '../../images/knickknacks_ondemand.png'
import marvelfinder from '../../images/marvel-character-finder.png'
import weatherdashboard from '../../images/weather-dashboard.png'
import notestaker from '../../images/note-taker.gif'

//Creating a separate component for portfolio 
export default function Work() {

  return (
    <div className="w-100 container work-container">  
            <h3 className="sidebar-heading">Projects Portfolio</h3>
            <ul className="display-work nav-links">
                <li className="card nav-item" > 
                    <a href="https://knickknacks-ondemand.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                        <img src={knickknack} alt="knickknacks-ondemand.com" />
                    </a>
                        <div className="text-on-card" >
                            <h4> Community Service Platform </h4>
                            <div>
                                <a href="https://github.com/levisgaragegroupinc/KnickKnacks" rel="noopener noreferrer" target="_blank">Github Repo</a>
                            </div>
                        </div>
       
                </li>
                <li className="card nav-item" > 
                    <a href="https://rajeswarivmarimuthu.github.io/marvel-character-finder/" className="image" target="_blank" rel="noopener noreferrer">
                        <img src={marvelfinder} alt="Marvel Wiki" />
                    </a>
   
                        <div className="text-on-card">
                            <h4>Marvel Wiki </h4>
                            <div>
                                <a href="https://github.com/rajeswarivmarimuthu/marvel-character-finder" rel="noopener noreferrer" target="_blank">Github Repo</a>
                            </div>
                        </div>
     
                </li>
                <li className="card nav-item">
                    <a href="https://rajeswarivmarimuthu.github.io/weather-dashboard/" className="image" target="_blank" rel="noopener noreferrer">
                        <img src={weatherdashboard} alt="Weather Dashboard" />
                    </a>

                        <div className="text-on-card">
                            <h4> Weather Dashboard</h4>
                            <div>
                                <a href="https://github.com/rajeswarivmarimuthu/weather-dashboard" rel="noopener noreferrer" target="_blank">Github Repo</a>
                            </div>
                        </div>

                </li>
                <li className="card nav-item">
                    <a href="https://notes-recorder.herokuapp.com/notes" className="image" target="_blank" rel="noopener noreferrer">
                        <img src={notestaker} alt="Weather Dashboard" />
                    </a>
              
                        <div className="text-on-card">
                            <h4> Notes Taker</h4>
                            <div>
                                <a href="https://github.com/rajeswarivmarimuthu/notes-taker" rel="noopener noreferrer" target="_blank">Github Repo</a>
                            </div>
                        </div>
       
                </li>
            </ul>
    </div>
  );
}
