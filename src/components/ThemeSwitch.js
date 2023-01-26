import { useContext, useEffect } from 'react';
import { UseThemeContext } from '../context/ThemeContext';

const ThemeSwitch = () => {
    const { theme, setTheme, handleTheme } = useContext(UseThemeContext);

    useEffect(() => {
        document.body.className = `${theme}`;
    }, [theme]);

    return (
        <div className="switchContainer">
            <label className="switch">
                <input type="checkbox" onClick={handleTheme} />
                <span className="slider"></span>
                {console.log(theme)}
            </label>
        </div>
    );
};

export default ThemeSwitch;
