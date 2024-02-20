import Link from 'next/link';
import Image from 'next/image';

function Header() {
  return (
    <>
        <a href="#maincontent" className="skip-link">Skip to main content</a>
        <header className='header'>
            <div className="container">
                <a href="#hero">
                    <div className="header__logo">
                        <Image src="/logo-sm.png" alt="Logo" width={100} height={100} />
                    </div>
                </a>
                <nav>
                    <input id="navcheckbox" className="checkbox" type="checkbox" name="" aria-controls="menu"/>
                    <div className="hamburger-lines">
                        <span className="line line--1"></span>
                        <span className="line line--2"></span>
                        <span className="line line--3"></span>
                    </div>
                    <ul id="menu" className="nav_items" role="menu" aria-labelledby="navcheckbox">
                        <li className="nav_item" role="menuitem">
                            <Link href="#about">
                                About
                            </Link>
                        </li>
                        <li className="nav_item" role="menuitem">
                            <Link href="#skills">
                                Services
                            </Link>
                        </li>
                        <li className="nav_item" role="menuitem">
                            <Link href="#contact">
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