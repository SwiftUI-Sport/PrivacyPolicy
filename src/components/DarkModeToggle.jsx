import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const DarkModeToggle = () => {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const isDarkMode = document.documentElement.classList.contains('dark');
        setIsDark(isDarkMode);
    }, []);

    const toggleDarkMode = () => {
        setIsDark(!isDark);
        document.documentElement.classList.toggle('dark');
    };

    return (
        <button 
            onClick={toggleDarkMode} 
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200"
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        >
            <FontAwesomeIcon 
                icon={isDark ? faSun : faMoon} 
                className="h-5 w-5 text-gray-700 dark:text-gray-300" 
            />
        </button>
    );
};

export default DarkModeToggle;