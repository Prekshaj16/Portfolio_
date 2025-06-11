import React, { useState } from 'react';
import './styles/Header.css';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header>
            <nav>
                <h1>Preksha's Portfolio</h1>
                <div className="menu-icon" onClick={toggleMenu}>
                    &#9776; {/* Hamburger menu icon */}
                </div>
                <ul className={isMenuOpen ? 'nav-links active' : 'nav-links'}>
                    <li><a href="#about" onClick={toggleMenu}>About</a></li>
                    <li><a href="#skills" onClick={toggleMenu}>Skills</a></li>
                    <li><a href="#portfolio" onClick={toggleMenu}>Portfolio</a></li>
                    <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;