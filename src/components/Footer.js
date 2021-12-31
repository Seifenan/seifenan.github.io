import React from 'react';
import { FaLinkedin, FaGithubSquare, FaFacebookSquare } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <ul className="footer">
        <a href="https://www.linkedin.com/in/seifenan/" target="blank"><FaLinkedin></FaLinkedin></a>
        <a href="https://github.com/Seifenan" target="blank"><FaGithubSquare></FaGithubSquare></a>
        <a href="https://www.facebook.com/seifenan" target="blank"><FaFacebookSquare></FaFacebookSquare></a>
      </ul>
      <h2>Made by Seif <span className="lastn">Enan</span></h2>
      <p>
        &copy; 2021 <span className="lastn">Enan</span>, Inc.
      </p>
    </div>
  );
};

export default Footer;