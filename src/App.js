import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
// import About from './components/About';
// import Contact from './components/Contact';
// import Portfolio from './components/Portfolio';
// import Nav from './components/Nav';
import './App.css';
// import 'materialize-css/dist/css/materialize.min.css';

function App() {
  return (
    <div>
      <Header></Header>
      <Footer></Footer>
    </div>
  );
  // return (
  //   <div>
  //     <Header/>
  //     <Nav></Nav>
      
  //     <main className="text-gray-400 bg-gray-900 body-font">
  //     {/* <Portfolio></Portfolio> */}
  //     <Contact></Contact>
  //     <About></About>
  //     <Footer></Footer>
  //     </main>
  //   </div>
  // );
}

export default App;
