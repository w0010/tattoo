// ThemeProvider.js

import React, { useState, useEffect, createContext } from 'react';

export const ThemeContext = createContext('light'); // Default value is 'light'

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

    }); // State to manage the current theme

    const themeColors = {
        light: {
            background: 'hsla(0, 0%, 92%, 1)',
            foreground: 'hsla(216, 7%, 11%, 1)',
        },
        dark: {
            background: 'hsla(216, 7%, 11%, 1)',
            foreground: 'hsla(0, 0%, 92%, 1)',
        },
    };

    useEffect(() => {
        // Update the data-theme attribute on the document body
        document.body.setAttribute('data-theme', theme);
        // Save the current theme to localStorage
        localStorage.setItem('theme', theme);
    }, [theme]);


    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light')); // Toggle theme
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, themeColors }}>
            {children}
        </ThemeContext.Provider>
    );
};