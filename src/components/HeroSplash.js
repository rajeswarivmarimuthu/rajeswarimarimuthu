import React from 'react';
import './styles/HeroSplash.css'
import avatar from '../images/raji_photo.jpeg'

function HeroSplash(){
    return (
      <div className="title-yellow-splash">
          <img src={avatar} className="avatar" alt="avatar" />
        <h1 id="cool-title"> .... Aspiring Enterpreneur</h1>
      </div>
    );
  }


export default HeroSplash;
