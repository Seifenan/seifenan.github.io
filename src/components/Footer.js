import React from 'react';
import rLogo from '../logo.svg';
import { FaLinkedin, FaGithubSquare, FaFacebookSquare } from "react-icons/fa";
// import { Button, ButtonGroup } from 'react-bootstrap';

const Footer = () => {
  return (
    <div>
      <div>
        <a target="blank" href="https://www.linkedin.com/in/seifenan/"><button><FaLinkedin /></button></a>
        <a target="blank" href="https://github.com/Seifenan"><button><FaGithubSquare /></button></a>
        <a target="blank" href="https://www.facebook.com/seifenan"><button><FaFacebookSquare /></button></a>
      </div>
      <h4>Made using React<img src={rLogo} className="rLogo" alt="react logo" /></h4>
      <p>&copy; 2021 <span className="lastn">Enan</span>, Inc.</p>
    </div>
  );
};

export default Footer;