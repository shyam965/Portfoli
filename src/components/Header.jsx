import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto flex flex-wrap px-5 lg:px-10 items-center justify-between">
        <div className="flex items-center">
          {/* Logo with hover effect */}
          <div className="relative group">
            <img 
              src="portfolio-.png" 
              alt="Logo" 
              className="h-12 w-auto md:h-14 transition-transform duration-300 group-hover:scale-105" 
            />
            <div className="absolute bottom-0 left-0 w-0 h-1 bg-purple-600 transition-all duration-300 group-hover:w-full"></div>
          </div>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2 rounded-md text-gray-600 hover:text-purple-600 hover:bg-gray-100 transition-colors duration-300 focus:outline-none" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Navigation menu */}
        <nav className={`${menuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row absolute md:relative top-16 md:top-auto left-0 w-full md:w-auto bg-white md:bg-transparent shadow-lg md:shadow-none p-5 md:p-0 space-y-4 md:space-y-0 md:space-x-8 transition-all duration-300 ease-in-out`}>
          {['home', 'about', 'service', 'project', 'contact'].map((item) => (
            <ScrollLink 
              key={item}
              to={item} 
              smooth={true} 
              duration={500} 
              offset={-70}
              className="relative text-base uppercase font-medium cursor-pointer hover:text-purple-600 transition-colors duration-300 group"
              onClick={() => setMenuOpen(false)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
            </ScrollLink>
          ))}
          <button className="md:hidden mt-4 bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors duration-300">
            Download CV
          </button>
        </nav>

        {/* CV Download Button (Desktop) */}
        {/* <button className="hidden md:block bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-md transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
          Download CV
        </button> */}
        <a 
                  href="/shyam-latest-cv.pdf" 
                  download 
                  className="px-8 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  Download CV
                </a>
      </div>
    </header>
  );
};

export default Header;