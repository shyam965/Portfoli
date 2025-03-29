import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="flex px-20 gap-8 items-center justify-center min-h-screen">
      
      {/* Left Section - Image (Zoom-In Effect) */}
      <motion.div
        className="w-1/2 flex justify-center overflow-hidden"
        initial={{ opacity: 0, scale: 0.5 }}  // Start with small size (zoom-out)
        whileInView={{ opacity: 1, scale: 1 }} // Slowly zoom-in to normal
        transition={{ duration: 1.5, ease: "easeOut" }} 
        viewport={{ once: false, amount: 0.3 }}
      >
        <img
          src="https://portfolio-lalit-negi.vercel.app/assets/about-us.0ec49995.webp"
          alt="About Illustration"
        />
      </motion.div>

      {/* Right Section - Text Content (Right to Left Animation) */}
      <motion.div
        className="w-1/2"
        initial={{ opacity: 0, x: 100 }}  // Start from right (+100px)
        whileInView={{ opacity: 1, x: 0 }} // Move to normal position
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }} 
        viewport={{ once: false, amount: 0.3 }}
      >
        <h1 className="text-4xl font-bold">Let's Introduce About Myself</h1>
        <p className="mt-4 text-gray-700">
          My name is Shyam Kumar. I'm 25 years old. I was born in Bihar, India. 
          I'm looking for a competitive environment where I can apply my skills to 
          make something useful for people and their business.
        </p>

        <h2 className="mt-4 font-semibold">Skills:</h2>
        <p className="text-gray-700">
          React.js (Redux-Toolkit, Axios, React-Router-DOM), Node.js (socket.io, 
          Mongoose, jsonWebToken), MongoDB (aggregation framework), Express.js, 
          Tailwind CSS, JavaScript (ES6), HTML5, CSS3
        </p>

        <h2 className="mt-4 font-semibold">Basic:</h2>
        <p className="text-gray-700">
          Bootstrap, Framer-Motion, React-Query, Github, Nginx, Docker
        </p>

        <h2 className="mt-4 font-semibold">Education:</h2>
        <p className="text-gray-700">
          I have completed B.Tech in Computer Science & Engineering in Jaipur (2018-2022) 
          and did my X and XII from Bihar.
        </p>

        <motion.button 
          className="mt-6 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          GET RESUME
        </motion.button>
      </motion.div>
    </div>
  );
};

export default About;
