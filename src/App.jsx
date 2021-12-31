import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Particles from "react-tsparticles";
import particlesOptions from "./particles.json";



import Header from './components/Header';
import Main from './components/Main';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import ContactForm from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Particles options={particlesOptions} />

      <Router>

        <Header />
        <Route exact path="/" component={Main} />
        <Route exact path="/about" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/resume" component={Resume} />
        <Route exact path="/contact" component={ContactForm} />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
