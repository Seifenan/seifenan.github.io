import React from 'react';
import Nav from './Nav';

function Header() {
  return (
    <div>
      <div className="navBar">
        <a className="logo" href="/"><h1>💻 Seif <span className="lastn">Enan</span></h1></a>
        <div>
          <Nav />
        </div>
      </div>
      <div className='navpd'></div>
    </div>
  );
}

export default Header;
