import React from 'react';
import rLogo from '../logo.svg';
import { FaLinkedin, FaGithubSquare, FaFacebookSquare, FaBootstrap } from "react-icons/fa";
import { Button, ButtonGroup } from 'react-bootstrap';

const Footer = () => {
  return (
    <div style={{ color: 'white' }}>

      <ButtonGroup size="md" className="m-4">
        <Button target="blank" href="https://www.linkedin.com/in/seifenan/" variant="light"><FaLinkedin /></Button>
        <Button target="blank" href="https://github.com/Seifenan" variant="light"><FaGithubSquare /></Button>
        <Button target="blank" href="https://www.facebook.com/seifenan" variant="light"><FaFacebookSquare /></Button>
      </ButtonGroup>

      <h4>
        Made using<span> React<img src={rLogo} className="rLogo" alt="react logo" /></span>and Bootstrap <FaBootstrap />
      </h4>
      <p>
        &copy; 2021 <span className="lastn">Enan</span>, Inc.
      </p>
    </div>
  );
};

export default Footer;
