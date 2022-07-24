import React from 'react';
import Navbar from './components/Navbar';
import Footer  from './components/Footer';
import ProfileBody from './components/pages/ProfileBody'

//Main App - rendering Navbar, body and footer. Body will be rendered conditionally
function App() {
    return (
      <div >
        <Navbar/>
        <ProfileBody/>
        <Footer/>
      </div>
    );
  }