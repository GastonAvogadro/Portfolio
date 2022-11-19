import { useState } from 'react';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import './NavBar.css';

const BrandLogo = () => {
    return <h2 className="brandLogo">{`<GA />`}</h2>;
};

const NavBar = () => {
    const [isOpen, setOpen] = useState(false);

    return (
        <header className="navBar">
            <BrandLogo />
            <ul className={`navLinks ${isOpen ? 'toggleOpen' : ''}`}>
                <li>Projects</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <BurgerMenu isOpen={isOpen} setOpen={setOpen} />
        </header>
    );
};

export default NavBar;
