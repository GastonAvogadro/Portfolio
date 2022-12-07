import { useEffect, useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import './NavBar.css';

const BrandLogo = () => {
    return (
        <div className="brandLogo">
            <img
                src="https://i.ibb.co/SRT9F4P/GA.png"
                alt="Gaston Avogadro"
                onClick={() => scroll.scrollToTop()}
            />
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
        <header className="navBar">
            <BrandLogo />
            <ul className={`navLinks ${isOpen ? 'toggleOpen' : ''}`}>
                <li>
                    <Link
                        to="projects"
                        onClick={() => isOpen && setIsOpen(false)}
                        spy={true}
                        smooth={true}
                        offset={handleScrollOffset(-10, -70)}
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
                        offset={handleScrollOffset(10, -50)}
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
            <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
        </header>
    );
};

export default NavBar;
