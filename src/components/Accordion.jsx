import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Accordion = ({ id, title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-300 dark:border-gray-600 mb-6">
      {/* Scroll target element */}
      <div id={id} className="scroll-mt-24"></div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center py-4 text-left focus:outline-none hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200 rounded-lg px-4 group"
        aria-expanded={isOpen}
      >
        <h2 className="text-2xl font-semibold text-light-readable group-hover:text-white transition-colors duration-200">{title}</h2>
        <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
        >
          <FontAwesomeIcon icon={faChevronDown} className="text-light-secondary" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-6">
              <div className="text-base leading-relaxed text-content whitespace-pre-line">{content}</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Accordion;