import React from 'react';
import { motion } from 'framer-motion';
import About from './About';
import Service from './Service';
import Project from './Project';

const Home = () => {
    return (
        <>
            <motion.div
                id="home"
                className='flex items-center justify-between w-full px-20 bg-white mt-20'
            >
                {/* Left Section - Text Content */}
                <motion.div 
                    className='w-1/2'
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    viewport={{ once: false, amount: 0.3 }}
                >
                    <h2 className='text-4xl font-semibold text-black'>Hello</h2>
                    <h1 className='text-6xl font-bold text-black mt-2'>I AM Shyam</h1>
                    <h3 className='text-2xl mt-4 text-black'>Full Stack Developer</h3>
                    <div className='flex gap-4 mt-6'>
                        <motion.a 
                            href="tel:9771177393"
                            className='bg-purple-600 text-white px-6 py-3 rounded-lg text-lg shadow-md hover:bg-purple-700 transition flex items-center justify-center'
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            CALL ME
                        </motion.a>
                        <motion.button
                            className='bg-gray-200 text-black px-6 py-3 rounded-lg text-lg shadow-md hover:bg-gray-300 transition'
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <a href="/shyam-cv.pdf" download="shyam-cv.pdf">GET RESUME</a>
                        </motion.button>
                    </div>
                </motion.div>

                {/* Right Section - Image (Fix Applied) */}
                <motion.div 
                    className='w-1/2 flex justify-end overflow-hidden' // Fix: Added overflow-hidden
                    initial={{ opacity: 0, scale: 0.5, y: 50 }} // Added y:50 for smooth up animation
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
                    viewport={{ once: false, amount: 0.2 }} // Fix: Reduced amount to 0.2
                >
                    <img
                        src="https://portfolio-lalit-negi.vercel.app/assets/home-right.665ea096.webp"
                        alt="Developer Illustration"
                        className='w-96 h-auto'
                    />
                </motion.div>
            </motion.div>

            {/* Other Sections */}
            <motion.div id="about">
                <About />
            </motion.div>

            <motion.div id="service">
                <Service />
            </motion.div>

            <motion.div id="project">
                <Project />
            </motion.div>
        </>
    );
};

export default Home;
