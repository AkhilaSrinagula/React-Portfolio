import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
// import Projects from './components/Projects';
import Navigation from './components/Navigation';
import './App.css';
// import 'materialize-css/dist/css/materialize.min.css';

function App() {
  
  return (
    <div>
      <Header/>
      <Navigation></Navigation>
      <main className="text-gray-400 bg-gray-900 body-font">
      {/* <Projects></Projects> */}
      <Contact></Contact>
      <About></About>
      <Footer></Footer>
      </main>
    </div>
  );
}

export default App;
