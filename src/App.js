import React from 'react';
// import Footer from './components/Footer';
import Header from './components/Header';
import About from './components/About';
import './App.css';
// import 'materialize-css/dist/css/materialize.min.css';

function App() {
  return (
    <div>
      <Header/>
      <main className="text-gray-400 bg-gray-900 body-font">
      <About></About>
      </main>
    </div>
  );
}

export default App;
