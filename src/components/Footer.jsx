import React from 'react';
import { IoLogoGithub } from "react-icons/io";

const Footer = () => {
  return (
    <>
      <hr />
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <img src="portfolio-.png" alt="Logo" className='h-16 w-[120px]' />
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            &copy; Copyright 2022 All rights reserved |
            <a 
              href="https://www.linkedin.com/in/shyam-kumar-a259b0152/" 
              className="text-gray-600 ml-1" 
              rel="noopener noreferrer" 
              target="_blank"
            >
              Shyam Kumar
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a className="ml-3 text-gray-500  text-center" href="https://github.com/shyam965/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <IoLogoGithub className='w-6 h-6 ' />
            </a>
          
            
            <a className="ml-3 text-gray-500" href="https://www.linkedin.com/in/shyam-kumar-a259b0152/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
            <a className=" ml-3 text-gray-500" href="#" aria-label="Instagram">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
           
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
