import React, { useState } from 'react';
import NavTabs from './NavTabs';
import About from './pages/About';
import Work from './pages/Work';
import Contact from './pages/Contact';
import Footer from './Footer';

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
      return <About />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    
    <div>
      {/* Passing the currentPage from state and the function to update it */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />

      {/* Calling the renderPage method which will return a component  */}
      {renderPage()}
      {/* Footer*/}
      <Footer/>
    </div>
  );
}