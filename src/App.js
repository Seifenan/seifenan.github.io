import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import Particles from 'react-tsparticles';
import particlesOptions from './particles.json';

import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Main from './components/Main';
import About from './components/About';
import Featured from './components/Featured';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';

function App() {
    return (
        <div className='App'>
            <Particles options={particlesOptions} />
            <Router>
                <NavBar />
                <Route exact path="/"><Main /></Route>
                <Route path="/about"><About /></Route>
                <Route path="/featured"><Featured /></Route>
                <Route path="/portfolio"><Projects /></Route>
                <Route path="/resume"><Resume /></Route>
                <Route path="/contact"><Contact /></Route>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
