import { useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import './NavBar.css';

const BrandLogo = () => {
    return <h2 className="brandLogo" onClick={()=> scroll.scrollToTop()}>{`<GA />`}</h2>;
};

const NavBar = () => {
    const [isOpen, setOpen] = useState(false);

    return (
        <header className="navBar">
            <BrandLogo />
            <ul className={`navLinks ${isOpen ? 'toggleOpen' : ''}`}>
                <li>
                    <Link to="projects" spy={true} smooth={true} offset={-10} duration={500}>
                        Projects
                    </Link>
                </li>
                <li>
                    <Link to="about" spy={true} smooth={true} offset={-10} duration={500}>
                        About
                    </Link>
                </li>
                <li>
                    <Link to="contact" spy={true} smooth={true} offset={-10} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>
            <BurgerMenu isOpen={isOpen} setOpen={setOpen} />
        </header>
    );
};

export default NavBar;
