import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

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
                <Route exact path="/" component={Main} />
                <Route exact path="/about" component={About} />
                <Route exact path="/featured" component={Featured} />
                <Route exact path="/portfolio" component={Projects} />
                <Route exact path="/resume" component={Resume} />
                <Route exact path="/contact" component={Contact} />
                <Footer />
            </Router>
        </div>
    );
}

export default App;
