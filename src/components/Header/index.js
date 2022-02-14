import React, { useState } from 'react';
import Nav from "../../components/Nav"; 
import About from "../../components/About";
import Contact from '../../components/Contact';
import Projects from '../../components/Portfolio';
import Resume from '../../components/Resume';


function Header() {
  const [currentPage, handlePageChange] = useState("About");
const renderPage = () => {
    switch (currentPage) {
      case "About":
        return <About />;
      case "Portfolio":
        return <Projects />;
      case "Contact":
        return <Contact />;
      case "Resume":
        return <Resume />;

      default:
        return <About />;
    }
  };



  return (
    
    <div>
      <nav className="navbar">
      
      </nav>
      
      <Nav
      
        currentPage={currentPage}
        
        handlePageChange={handlePageChange}
        
      />
      <h2> Akhila Srinagula </h2>
      <main>
        <div>{renderPage(currentPage)}</div>
      </main>
      
    </div>
  );
}

export default Header;