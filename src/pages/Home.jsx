import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import About from './About';
import Service from './Service';
import Project from './Project';
// import Contact from './Contact';
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import Typewriter from 'typewriter-effect';

const Home = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: false
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.05, 0.01, 0.9] 
      }
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center bg-gradient-to-r from-gray-50 to-gray-100 overflow-hidden pt-20"
      >
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-purple-100 opacity-70"></div>
          <div className="absolute bottom-10 right-20 w-80 h-80 rounded-full bg-blue-100 opacity-60"></div>
          <div className="absolute top-1/2 left-1/3 w-40 h-40 rounded-full bg-yellow-100 opacity-60"></div>
        </div>

        <div className="container mx-auto px-5 lg:px-20 z-10">
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
            <motion.div
              ref={ref}
              className="w-full md:w-1/2"
              variants={containerVariants}
              initial="hidden"
              animate={controls}
            >
              <motion.span variants={itemVariants} className="inline-block py-1 px-3 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-4">
                Full Stack Developer
              </motion.span>

              <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
                Hi, I'm <span className="text-purple-600">Shyam Kumar</span>
              </motion.h1>

              <motion.div variants={itemVariants} className="text-xl sm:text-2xl text-gray-600 mb-6 h-12">
                <Typewriter
                  options={{
                    strings: ['Frontend Developer', 'Backend Developer', 'MERN Stack Expert', 'Problem Solver'],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </motion.div>

              <motion.p variants={itemVariants} className="text-gray-600 mb-8 max-w-lg">
                2+ years of experience building production-ready applications with modern technologies. 
                Specialized in creating seamless user experiences with React and robust backends with Node.js.
              </motion.p>

              <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
                <a 
                  href="/shyam-latest-cv.pdf" 
                  download 
                  className="px-8 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  Download CV
                </a>
                <a 
                  href="tel:9771177393" 
                  className="px-8 py-3 border-2 border-purple-600 text-purple-600 rounded-lg font-medium hover:bg-purple-50 transition-all duration-300 transform hover:-translate-y-1"
                >
                  Contact Me
                </a>
              </motion.div>

              <motion.div variants={itemVariants} className="flex gap-4 mt-8">
                <a href="https://github.com/shyam965" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-purple-600 transition-all duration-300 transform hover:-translate-y-1">
                  <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/shyam-kumar-a259b0152/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white hover:bg-purple-600 transition-all duration-300 transform hover:-translate-y-1">
                  <FaLinkedinIn />
                </a>
                {/* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-blue-400 flex items-center justify-center text-white hover:bg-purple-600 transition-all duration-300 transform hover:-translate-y-1">
                  <FaTwitter />
                </a> */}
              </motion.div>
            </motion.div>

            <motion.div
              className="w-full md:w-1/2 flex justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <div className="relative">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-80 md:h-80 bg-purple-100 rounded-full"></div>
                <img
                  src="https://portfolio-lalit-negi.vercel.app/assets/home-right.665ea096.webp"
                  alt="Developer Illustration"
                  className="relative z-10 w-64 md:w-80 lg:w-96 h-auto"
                />
                <div className="absolute top-0 right-0 bg-white shadow-lg rounded-full px-4 py-2 flex items-center justify-center z-20">
                  <div className="h-12 w-12 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold text-xl">
                    2+
                  </div>
                  <span className="ml-2 font-semibold text-gray-800">Years<br />Experience</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <motion.div
            className="flex flex-col items-center"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <p className="text-gray-600 mb-2">Scroll Down</p>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </motion.div>
        </div>
      </section>

      <section id="about">
        <About />
      </section>

      <section id="service">
        <Service />
      </section>

      <section id="project">
        <Project />
      </section>

      {/* <section id="contact">
        <Contact />
      </section> */}
    </>
  );
};

export default Home;
