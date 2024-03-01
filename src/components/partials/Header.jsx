import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

function Header() {

    const [isOpen, setIsOpen] = useState(false);

    const handleNavItemClick = () => {
        setTimeout(() => {
            setIsOpen(false);
        }, 500);
    };

  return (
    <>
        <a href="#maincontent" className="skip-link">Skip to main content</a>
        <header className='header'>
            <div className="container">
                <a href="#hero">
                    <div className="header__logo">
                        <Image src="/images/logo-sm.png" alt="Logo" fill={true} />
                    </div>
                </a>
                <nav>
                    <input id="navcheckbox" className="checkbox" type="checkbox" name="" aria-controls="menu"checked={isOpen} onChange={() => setIsOpen(!isOpen)}  />
                    <div className="hamburger-lines">
                        <span className="line line--1"></span>
                        <span className="line line--2"></span>
                        <span className="line line--3"></span>
                    </div>
                    <ul id="menu" className="nav_items" role="menu" aria-labelledby="navcheckbox">
                        <li className="nav_item" role="menuitem">
                            <Link href="#about" onClick={handleNavItemClick}>
                                About
                            </Link>
                        </li>
                        <li className="nav_item" role="menuitem">
                            <Link href="#services" onClick={handleNavItemClick}>
                                Services
                            </Link>
                        </li>
                        <li className="nav_item" role="menuitem">
                            <Link href="#contact" onClick={handleNavItemClick}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    </>
  );
}

export default Header;