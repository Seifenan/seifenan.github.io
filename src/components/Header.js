import React from 'react';
import Nav from './Nav';

function Header() {
  return (
    <div>
      <div className="nav-bar">
        <a className="my-name" href="/c20-react-portfolio"><h1>💻 Seif <span className="lastn">Enan</span></h1></a>
        <div>
          <Nav></Nav>
        </div>
      </div>
      <div className='navpd'></div>
    </div>
  );
}

export default Header;
