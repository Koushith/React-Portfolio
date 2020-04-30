import React from 'react';
import './style.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Copy from './components/CopyRight';
import About from './components/About';
import Contact from './components/Contact';
// import Portfolio from './components/Portfolio';

const App = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      {/* <Portfolio /> */}
      <About />
      <Contact />
      <Footer />
      <Copy />
    </div>
  );
};

export default App;
