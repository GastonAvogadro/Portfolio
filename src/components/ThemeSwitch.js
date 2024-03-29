import { useContext, useEffect } from 'react';
import { UseThemeContext } from '../context/ThemeContext';

const ThemeSwitch = ({ isOpen }) => {
    const { theme, handleTheme } = useContext(UseThemeContext);

    useEffect(() => {
        document.body.className = `${theme}`;
    }, [theme]);

    return (
        <div className={`switchContainer ${isOpen ? 'toggleOpen' : ''}`}>
            <label className="switch">
                <input type="checkbox" onClick={handleTheme} />
                <span className="slider"></span>
            </label>
        </div>
    );
};

export default ThemeSwitch;
