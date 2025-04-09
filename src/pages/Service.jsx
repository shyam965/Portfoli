import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaServer, FaMobileAlt, FaDatabase, FaDesktop, FaRocket, FaBug, FaCogs } from 'react-icons/fa';

const Service = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  // Service cards data
  const services = [
    {
      icon: <FaDesktop className="text-purple-500" size={28} />,
      title: "Frontend Development",
      description: "Creating responsive, interactive interfaces with React.js, Redux and modern CSS frameworks."
    },
    {
      icon: <FaServer className="text-blue-500" size={28} />,
      title: "Backend Development",
      description: "Building robust server-side applications with Node.js, Express, and RESTful APIs."
    },
    {
      icon: <FaDatabase className="text-green-500" size={28} />,
      title: "Database Design",
      description: "Designing efficient MongoDB schemas and complex aggregation pipelines."
    },
    {
      icon: <FaMobileAlt className="text-yellow-500" size={28} />,
      title: "Responsive Web Design",
      description: "Crafting websites that work seamlessly across all devices and screen sizes."
    },
    {
      icon: <FaBug className="text-red-500" size={28} />,
      title: "Testing & Debugging",
      description: "Comprehensive testing and efficient debugging for reliable applications."
    },
    {
      icon: <FaRocket className="text-indigo-500" size={28} />,
      title: "Performance Optimization",
      description: "Optimizing web applications for speed, efficiency and better user experience."
    },
    {
      icon: <FaCode className="text-pink-500" size={28} />,
      title: "Clean Code Practices",
      description: "Writing maintainable, scalable, and well-documented code following best practices."
    },
    {
      icon: <FaCogs className="text-gray-500" size={28} />,
      title: "Deployment & DevOps",
      description: "Setting up CI/CD pipelines and handling deployment with Docker and Nginx."
    }
  ];

  // Tech stack data
  const techStack = [
    { src: "react1.png", alt: "React", color: "blue" },
    { src: "mongodb.jpeg", alt: "MongoDB", color: "green" },
    { src: "node.jpeg", alt: "Node.js", color: "green" },
    { src: "pyhton.jpeg", alt: "Python", color: "blue" },
    { src: "js.png", alt: "JavaScript", color: "yellow" },
    { src: "tailwind.png", alt: "Tailwind CSS", color: "blue" },
    { src: "css.png", alt: "CSS3", color: "blue" },
    { src: "htmls.png", alt: "HTML5", color: "orange" }
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-5 lg:px-20">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <span className="text-purple-600 font-semibold">WHAT I DO</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">My Services & Expertise</h2>
          <div className="w-24 h-1 bg-purple-600 mx-auto mt-4"></div>
          <p className="max-w-2xl mx-auto mt-6 text-gray-600">
            With 3+ years of experience, I offer comprehensive development services to help businesses 
            and individuals create impactful digital solutions.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-purple-500"
              variants={itemVariants}
            >
              <div className="bg-gray-50 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Tech Stack Section */}
        <div>
          <motion.div 
            className="text-center mb-10"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Technologies I Work With</h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6 place-items-center"
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: false, amount: 0.3 }}
          >
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 w-24 h-24 flex items-center justify-center"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <img src={tech.src} alt={tech.alt} className="max-h-16 max-w-16" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Service;