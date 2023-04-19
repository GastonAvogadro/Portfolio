import { useEffect, useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import Fade from 'react-reveal/Fade';
import GAlogo from '../assets/GA-logo.png';
import BurgerMenu from './BurgerMenu';
import ThemeSwitch from './ThemeSwitch';

const BrandLogo = () => {
    return (
        <div className="brandLogo">
            <img src={GAlogo} alt="Gaston Avogadro" onClick={() => scroll.scrollToTop()} />
        </div>
    );
};

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleScrollOffset = (desk, mob) => {
        return windowWidth > 720 ? desk : mob;
    };

    return (
        <Fade>
            <header className="navBar">
                <BrandLogo />
                <ul className={`navLinks ${isOpen ? 'toggleOpen' : ''}`}>
                    <li>
                        <Link
                            to="projects"
                            onClick={() => isOpen && setIsOpen(false)}
                            spy={true}
                            smooth={true}
                            offset={handleScrollOffset(20, -20)}
                            duration={500}
                        >
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="about"
                            onClick={() => isOpen && setIsOpen(false)}
                            spy={true}
                            smooth={true}
                            offset={handleScrollOffset(10, -20)}
                            duration={500}
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="contact"
                            onClick={() => isOpen && setIsOpen(false)}
                            spy={true}
                            smooth={true}
                            duration={500}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
                <ThemeSwitch isOpen={isOpen} />
                <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
            </header>
        </Fade>
    );
};

export default NavBar;
