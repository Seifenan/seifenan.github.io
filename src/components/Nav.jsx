import React, { useState } from "react"
import { Link } from "react-router-dom"
import Hamburger from "./Hamburger";

function Nav() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen)
  }

  return (
    <nav>
      <div>
        <ul className={`navItems ${navbarOpen ? "showMenu" : ""}`}>
          <button onClick={handleToggle}>{navbarOpen ? "Close" : "Open"}</button>
          <div className="hamburger">
            <Hamburger />
          </div>          
          <li><Link to="/about">About Me</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/resume">Resume</Link></li>
        </ul>
        <div className="hamburger">
          <Hamburger />
        </div>
      </div>
    </nav>
  );
}

export default Nav;