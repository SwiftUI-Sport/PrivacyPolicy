import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { animateScroll as scroll } from 'react-scroll';

const BackToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <button
            onClick={() => scroll.scrollToTop()}
            className={`fixed bottom-5 right-5 p-3 rounded-full bg-primary text-white shadow-lg hover:bg-primary-hover transition-all duration-300 z-40 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
            aria-label="Back to top"
        >
            <FontAwesomeIcon icon={faArrowUp} className="h-4 w-4" />
        </button>
    );
};

export default BackToTopButton;