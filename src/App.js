import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Particles from 'react-tsparticles';
import './App.css';
import particlesOptions from './particles.json';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Projects from './components/Projects';
import About from './components/About';

function App() {
    return (
        <div className='App'>
            <Particles options={particlesOptions} />
            <Router>
                <NavBar />
                {/* <Route exact path="/" component={} /> */}
                <Route exact path="/about" component={About} />
                <Route exact path="/portfolio" component={Projects} />
                {/* <Route exact path="/resume" component={Resume} /> */}
                {/* <Route exact path="/contact" component={Contact} /> */}
                <Footer />
            </Router>
        </div>
    );
}

export default App;
