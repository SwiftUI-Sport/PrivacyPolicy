import React from 'react';
import { Link } from 'react-scroll';

const TableOfContents = ({ sections, activeSection, setActiveSection }) => {
    return (
        <nav className="sticky top-24 bg-surface border border-default rounded-lg p-4 shadow-sm">
            <h3 className="text-xl font-semibold mb-4 text-light-readable">Table of Contents</h3>
            <ul className="space-y-1">
                {sections.map((section) => (
                    <li key={section.id}>
                        <Link
                            to={section.id}
                            smooth={true}
                            offset={-100}
                            duration={500}
                            onClick={() => setActiveSection(section.id)} 
                            className={`block cursor-pointer py-2 px-3 rounded-md transition-all duration-300 text-sm ${
                                activeSection === section.id
                                    ? 'bg-primary-light text-primary font-semibold border-l-4 border-primary'
                                    : 'text-light-secondary hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-100'
                            }`}
                        >
                            {section.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default TableOfContents;