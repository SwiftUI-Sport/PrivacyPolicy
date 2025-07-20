import React from 'react';
import { animateScroll as scroll } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="bg-surface border-t border-default py-6 mt-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="mb-2 text-light-secondary">© {new Date().getFullYear()} Runday. All Rights Reserved.</p>
        <div className="flex justify-center space-x-4">
           <a href="mailto:alianur043@gmail.com" className="text-light-secondary hover:text-primary transition-colors duration-300 font-medium">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;