import { click } from '@testing-library/user-event/dist/click'
import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import navLogo from '../images/logo.png'
function Navbar() {
    const [click, setClick] = useState(false)

    const handeClick = () => setClick(!click)
    const closeHamburgerMenu = () => setClick(false)
  return (
    <>
    <nav className='navbar'>
        <div className='navbar-container'>
            <Link to="/" className='navbar-logo'>
                <img height="auto" width="250px" src={navLogo} alt="logo"/>
            </Link>
            <div className='menu-icon'>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav menu'}>
                <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeHamburgerMenu}>
                        Home {/*note for tomorrow me: make more of these,
                        one for flavor text spot, one (or more) for data,
                        and one for the footer so I can plug */}
                    </Link>
                </li>
            </ul>
        </div>
    </nav>
    </>
  )
}

export default Navbar