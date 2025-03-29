import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

const Header = () => {
  return (
    <header className="text-gray-600 body-font px-20 shadow-lg fixed top-0 left-0 w-full z-50 bg-white">
      <div className="container mx-auto flex flex-wrap p-1 flex-col md:flex-row items-center">
       
        <img src="portfolio-.png" alt="" className='h-16 w-[120px]' />
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          
          <ScrollLink to="home" smooth={true} duration={500} className="mr-5 text-lg font-semibold cursor-pointer hover:text-gray-900">
            Home
          </ScrollLink>
          <ScrollLink to="about" smooth={true} duration={500} className="mr-5 text-lg font-semibold cursor-pointer hover:text-gray-900">
            About
          </ScrollLink>
          <ScrollLink to="service" smooth={true} duration={500} className="mr-5 text-lg font-semibold cursor-pointer hover:text-gray-900">
            Service
          </ScrollLink>
          <ScrollLink to="project" smooth={true} duration={500} className="mr-5 text-lg font-semibold cursor-pointer hover:text-gray-900">
            Project
          </ScrollLink>
        </nav>
        
      </div>
    </header>
  );
};

export default Header;
