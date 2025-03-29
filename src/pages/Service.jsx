import React from "react";
import { motion } from "framer-motion";

const Service = () => {
  // Animation settings for each image
  const itemVariants = {
    hidden: { opacity: 0, scale: 0.5 }, // Start small and invisible
    visible: { opacity: 1, scale: 1 },  // Grow to normal size
  };

  return (
    <div className="text-center py-12">
      {/* Title */}
      <h1 className="text-3xl font-bold">Service & Skills</h1>
      <div className="w-16 h-1 bg-purple-600 mx-auto mt-2"></div>

      {/* Skills Grid */}
      <div className="container mx-auto flex justify-center items-center">
        <motion.div 
          className="grid grid-cols-4 gap-4 mt-10 place-items-center"
          initial="hidden"
          whileInView="visible"
          transition={{ staggerChildren: 0.2, duration: 1.5 }} // Delay for smooth effect
          viewport={{ once: false, amount: 0.3 }}
        >
          {[
            { src: "react1.png", alt: "React" },
            { src: "mongodb.jpeg", alt: "MongoDB" },
            { src: "node.jpeg", alt: "Node.js" },
            { src: "pyhton.jpeg", alt: "Python" },
            { src: "js.png", alt: "JavaScript" },
            { src: "tailwind.png", alt: "Tailwind CSS" },
            { src: "css.png", alt: "CSS3" },
            { src: "htmls.png", alt: "HTML5" },
          ].map((skill, index) => (
            <motion.img
              key={index}
              src={skill.src}
              alt={skill.alt}
              className="h-20"
              variants={itemVariants}
              transition={{ duration: 1.2, ease: "easeOut" }} // Smooth animation
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Service;
