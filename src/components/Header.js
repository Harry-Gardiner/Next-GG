import Link from 'next/link';
import Image from 'next/image';

function Header() {
  return (
    <>
        <a href="#maincontent" class="skip-link">Skip to main content</a>
        <header className='header'>
            <div class="container">
                <a href="#hero">
                    <div class="header__logo">
                        <Image src="/logo-sm.png" alt="Logo" width={100} height={100} />
                    </div>
                </a>
                <nav>
                    <input id="navcheckbox" class="checkbox" type="checkbox" name="" aria-controls="menu"/>
                    <div class="hamburger-lines">
                        <span class="line line--1"></span>
                        <span class="line line--2"></span>
                        <span class="line line--3"></span>
                    </div>
                    <ul id="menu" class="nav_items" role="menu" aria-labelledby="navcheckbox">
                        <li class="nav_item" role="menuitem">
                            <Link href="#about">
                                About
                            </Link>
                        </li>
                        <li class="nav_item" role="menuitem">
                            <Link href="#skills">
                                Services
                            </Link>
                        </li>
                        <li class="nav_item" role="menuitem">
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