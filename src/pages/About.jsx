import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaServer, FaMobileAlt, FaDatabase } from 'react-icons/fa';

const About = () => {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-5 lg:px-20">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Left Section - Image with decorative elements */}
          <motion.div
            className="w-full md:w-1/2 relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <div className="relative">
              {/* Background square */}
              <div className="absolute -z-10 top-6 left-6 w-full h-full border-2 border-purple-400 rounded-lg"></div>
              
              {/* Image with frame */}
              <div className="relative z-10 overflow-hidden rounded-lg border-4 border-white shadow-xl">
                <img
                  src="https://portfolio-lalit-negi.vercel.app/assets/about-us.0ec49995.webp"
                  alt="About Illustration"
                  className="w-full h-auto"
                />
              </div>
              
              {/* Experience badge */}
              <div className="absolute -bottom-5 -right-5 bg-white shadow-lg rounded-lg p-4 z-20">
                <div className="text-center">
                  <span className="block text-3xl font-bold text-purple-600">2+</span>
                  <span className="text-gray-700 font-medium">Years<br/>Experience</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Section - Content with animations */}
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            {/* Section title with decoration */}
            <div className="mb-6">
              <span className="text-purple-600 font-semibold">ABOUT ME</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">Professional Problem Solver & Code Craftsman</h2>
              <div className="w-20 h-1 bg-purple-600 mt-4 mb-6"></div>
            </div>
            
            <p className="text-gray-700 mb-6">
              My name is Shyam Kumar, a passionate Full Stack Developer with 2+ years of professional experience. 
              I specialize in building modern web applications that solve real-world problems. My approach combines 
              technical expertise with creative problem-solving to deliver exceptional digital experiences.
            </p>
            
            {/* Skills grid with icons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start">
                <div className="mr-4 p-3 bg-purple-100 text-purple-600 rounded-lg">
                  <FaCode size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">Frontend Development</h3>
                  <p className="text-gray-600">React.js, Redux, Tailwind CSS, JavaScript (ES6+), HTML5/CSS3</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 p-3 bg-blue-100 text-blue-600 rounded-lg">
                  <FaServer size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">Backend Development</h3>
                  <p className="text-gray-600">Node.js, Express.js, REST APIs, Socket.io, JWT Authentication</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 p-3 bg-green-100 text-green-600 rounded-lg">
                  <FaDatabase size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">Database</h3>
                  <p className="text-gray-600">MongoDB, Mongoose ODM, Aggregation Framework</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 p-3 bg-yellow-100 text-yellow-600 rounded-lg">
                  <FaMobileAlt size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">Other Skills</h3>
                  <p className="text-gray-600">Responsive Design, Git/GitHub, Docker, Nginx, AWS</p>
                </div>
              </div>
            </div>
            
            <h3 className="font-semibold text-xl mb-2 text-gray-800">Education</h3>
            <p className="text-gray-700 mb-8">
              B.Tech in Computer Science & Engineering - Jaipur (2018-2022)<br/>
              Higher Secondary Education - Bihar
            </p>
            
            {/* <div className="flex flex-wrap gap-4">
              <a 
                href="/shyam-cv.pdf" 
                download
                className="px-8 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
              >
                Download CV
              </a>
              <a 
                href="#contact"
                className="px-8 py-3 border-2 border-purple-600 text-purple-600 rounded-lg font-medium hover:bg-purple-50 transition-all duration-300"
              >
                Contact Me
              </a>
            </div> */}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;