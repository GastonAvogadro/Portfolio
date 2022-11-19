import { Turn as Hamburger } from 'hamburger-react';
import './BurgerMenu.css';

const BurgerMenu = ({ isOpen, setOpen }) => {
    return (
        <div className="burgerContainer">
            <Hamburger toggled={isOpen} toggle={setOpen} rounded />
        </div>
    );
};

export default BurgerMenu;
