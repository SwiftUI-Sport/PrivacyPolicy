import React from 'react';
import DarkModeToggle from './DarkModeToggle';

const Header = () => {
  return (
    <header className="sticky top-0 bg-surface/90 backdrop-blur-sm z-50 border-b border-default">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <a href="#" className="flex items-center space-x-3 text-2xl font-bold text-primary hover:text-primary-hover transition-colors duration-300">
          <img 
            src="/favicon.png" 
            alt="Runday Logo" 
            className="w-8 h-8 rounded-md"
          />
          <span>Runday</span>
        </a>
        <DarkModeToggle />
      </nav>
    </header>
  );
};

export default Header;