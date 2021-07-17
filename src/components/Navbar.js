import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';

function Navbar() {
const [click, togClick] = useState(false);

const handleClick = () => togClick(!click);
const closeMobileMenu = () => togClick(false);

const [button, setButton] = useState(true)

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
      <div>
          <nav className = 'navbar'>
              <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                ANIME<span >FUN</span><i class="fab fa-mandalorian"></i>
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/Anime" className="nav-links">
                            <span>Anime</span>
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/Movies" className="nav-links">
                            Movies
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <input className='search-bar' type='text' placeholder='Search here'></input>
                        
                    </li>

                </ul>
                {button && <Button ><i class="fa fa-search" ></i></Button>}
              </div>
          </nav>
      </div>
    )
}

export default Navbar;