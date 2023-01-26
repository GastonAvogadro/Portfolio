import { createContext, useState } from 'react';

export const UseThemeContext = createContext();

const ThemeContext = ({ children }) => {
    const [theme, setTheme] = useState('dark');

    const handleTheme = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light');
    };

    return (
        <UseThemeContext.Provider value={{ theme, handleTheme }}>
            {children}
        </UseThemeContext.Provider>
    );
};

export default ThemeContext;
