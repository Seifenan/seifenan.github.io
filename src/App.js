import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

// import Particles from 'react-tsparticles';
import './App.css';
// import particlesOptions from './particles.json';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Projects from './components/Projects';
import About from './components/About';
import Main from './components/Main';
import Contact from './components/Contact';
import Resume from './components/Resume';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;