import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Project = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [hoveredProject, setHoveredProject] = useState(null);

  // Project categories
  const categories = ["All", "MERN Stack", "Frontend", "Backend"];

  // Project data
  const projects = [
    {
      id: 1,
      title: "Skillkronos Platform",
      category: "MERN Stack",
      image: "skillkronsansimage.png",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      description: "A comprehensive e-learning platform with course management and user tracking.",
      link: "https://skillkronos.com",
      github: "https://github.com/yourusername/skillkronos"
    },
    {
      id: 2,
      title: "3NGV Web Application",
      category: "Frontend",
      image: "3gnv.png",
      technologies: ["React", "Tailwind CSS", "Redux"],
      description: "Modern website with interactive elements and responsive design.",
      link: "https://www.3ngv.com/",
      github: "https://github.com/yourusername/3ngv"
    },
    {
      id: 3,
      title: "Developer Portfolio",
      category: "Frontend",
      image: "portfolio.png",
      technologies: ["React", "Framer Motion", "Tailwind CSS"],
      description: "Professional developer portfolio with animations and responsive layout.",
      link: "#",
      github: "https://github.com/yourusername/portfolio"
    },
    {
      id: 4,
      title: "E-Commerce Platform",
      category: "MERN Stack",
      image: "mern-project.png",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Redux"],
      description: "Full-featured e-commerce platform with payment integration and admin dashboard.",
      link: "#",
      github: "https://github.com/yourusername/ecommerce"
    },
    {
      id: 5,
      title: "Task Management API",
      category: "Backend",
      image: "api-project.png",
      technologies: ["Node.js", "Express", "MongoDB", "JWT"],
      description: "RESTful API for task management with authentication and authorization.",
      link: "#",
      github: "https://github.com/yourusername/task-api"
    },
    {
      id: 6,
      title: "Real-time Chat Application",
      category: "MERN Stack",
      image: "chat-app.png",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
      description: "Real-time messaging application with private and group chat features.",
      link: "#",
      github: "https://github.com/yourusername/chat-app"
    }
  ];

  // Filter projects based on active tab
  const filteredProjects = activeTab === "All" 
    ? projects 
    : projects.filter(project => project.category === activeTab);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-5 lg:px-20">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16" 
          initial={{ opacity: 0, y: -20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }} 
          viewport={{ once: false, amount: 0.2 }}
        >
          <h2 className="text-4xl font-bold mb-3 text-gray-800">My Projects</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore my recent work across different technologies and domains.
          </p>
        </motion.div>

        {/* Project Filter Tabs */}
        <div className="flex flex-wrap justify-center mb-12">
          {categories.map((category, index) => (
            <motion.button
              key={index}
              className={`px-6 py-2 rounded-full mx-2 mb-3 text-lg font-medium transition-all duration-300 ${
                activeTab === category
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => setActiveTab(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              variants={itemVariants}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative group overflow-hidden">
                {/* Project Image */}
                <div className="h-60 overflow-hidden">
                  <img
                    // src={`/api/placeholder/600/360`} 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Overlay on hover */}
                <div className={`absolute inset-0 bg-blue-600 bg-opacity-80 flex items-center justify-center space-x-4 transition-opacity duration-300 ${
                  hoveredProject === project.id ? "opacity-100" : "opacity-0"
                }`}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-blue-600 p-3 rounded-full hover:bg-gray-100 transition-colors duration-300"
                  >
                    <FaGithub className="text-xl" />
                  </a>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-blue-600 p-3 rounded-full hover:bg-gray-100 transition-colors duration-300"
                  >
                    <FaExternalLinkAlt className="text-xl" />
                  </a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-sm font-medium text-blue-600">
                    {project.category}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* View All Projects Button */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: false }}
        >
          <a 
            href="https://github.com/yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 bg-blue-600 text-white rounded-full text-lg font-medium hover:bg-blue-700 transition-colors duration-300"
          >
            <FaGithub className="mr-2" /> View All Projects
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Project;