import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeHamburgerMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeHamburgerMenu}>
            TITLE
            <i class='fa-solid fa-plane' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeHamburgerMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/data-one'
                className='nav-links'
                onClick={closeHamburgerMenu}
              >
                Data Results #1
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/data-two'
                className='nav-links'
                onClick={closeHamburgerMenu}
              >
                Data Results #2
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>About</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
