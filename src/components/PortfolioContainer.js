import React, { useState } from 'react';

import NavTabs from './NavTabs';
import HeroSplash from './HeroSplash'
import Footer from './Footer';

import About from './pages/About';
import Work from './pages/Work';
import Contact from './pages/Contact';
import Resume from './pages/Resume';


export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  // Method to check the value of `currentPage`. Depending on the value of currentPage, render corresponding compoenent.
  const renderPage = () => {
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'Work') {
      return <Work />;
    }
    if (currentPage === 'Resume'){
      return <Resume />;
    }
      return <About />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    
    <div>
      {/* Passing the currentPage from state and the function to update it */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      <HeroSplash/>
      {/* Calling the renderPage method which will return a component  */}
      {renderPage()}
      {/* Footer*/}
      <Footer/>
    </div>
  );
}