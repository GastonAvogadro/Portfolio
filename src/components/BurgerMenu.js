import { Turn as Hamburger } from 'hamburger-react';

const BurgerMenu = ({ isOpen, setIsOpen }) => {
    return (
        <div className="burgerContainer">
            <Hamburger toggled={isOpen} toggle={setIsOpen} rounded />
        </div>
    );
};

export default BurgerMenu;
