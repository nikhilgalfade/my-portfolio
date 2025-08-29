import { useRef, useState } from "react";
import { FaExternalLinkAlt, FaGithub, FaCode } from "react-icons/fa";
import { BsCalendar2Date } from "react-icons/bs";
import { motion, useInView } from "framer-motion";
import "./holographicCard.css"; // ⬅️ shimmer hover effect
import "./project.css";


// Animation variants for cards
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const contentContainerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

function Projects() {
  const allProjects = [
    {
      title: "Job Portal Web App",
      description: "Built with React, Spring Boot, and PostgreSQL. A complete job platform.",
      tech: ["React", "Spring Boot", "PostgreSQL"],
      image: "/images/Job Portal Web App.png",
      year: "2024",
      link: "#",
      source: "#",
    },
    {
      title: "Food Calorie Tracker",
      description: "AI-powered food recognition with YOLOv8 and Flask backend.",
      tech: ["Python", "YOLOv8", "Flask"],
      image: "/images/food-tracker.png",
      year: "2024",
      link: "#",
      source: "https://github.com/nikhilgalfade/FoodCaloriesRecognition",
    },
  ];

  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? allProjects : allProjects.slice(0, 2);

  return (
    <section
      id="projects"
      className="w-full px-6 py-20 bg-gradient-to-b from-[#10061a] via-[#0a0a0a] to-black text-white"
    >
      {/* Section Heading with blinking icon */}
      <motion.div
        className="text-center mb-14"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.2 } },
        }}
      >
        {/* Blinking Circle Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [1, 0.4, 1], // blink
            scale: [1, 1.1, 1],   // subtle pulse
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="flex justify-center mb-4"
        >
          <div className="w-14 h-14 flex items-center justify-center rounded-full border-2 border-purple-500/70 bg-transparent shadow-[0_0_15px_rgba(168,85,247,0.6)]">
  <FaCode className="text-purple-400 text-2xl" />
</div>

        </motion.div>

        {/* Title */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold"
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
        >
          Featured{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600">
            Projects
          </span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="text-gray-400 mt-2 text-base max-w-xl mx-auto"
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { duration: 0.6, delay: 0.2 } },
          }}
        >
          Explore some of my highlighted work and personal projects that showcase my expertise.
        </motion.p>
      </motion.div>

      {/* Project Cards */}
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {visibleProjects.map((project, index) => {
          const cardRef = useRef(null);
          const isCardInView = useInView(cardRef, { once: true, amount: 0.3 });

          return (
            <motion.div
              key={index}
              ref={cardRef}
              variants={cardVariants}
              initial="hidden"
              animate={isCardInView ? "show" : "hidden"}
              className="holographic-card bg-black/70 border border-purple-600/30 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden"
            >
              <motion.div
                variants={contentContainerVariants}
                initial="hidden"
                animate={isCardInView ? "show" : "hidden"}
              >
                <motion.img
                  src={project.image}
                  alt={`${project.title} Screenshot`}
                  className="w-full h-48 object-cover"
                  variants={imageVariants}
                />

                <div className="p-6">
                  <motion.h3
                    className="text-2xl font-bold text-white mb-2"
                    variants={itemVariants}
                  >
                    {project.title}
                  </motion.h3>

                  <motion.p
                    className="text-gray-300 text-sm mb-4"
                    variants={itemVariants}
                  >
                    {project.description}
                  </motion.p>

                  <motion.div
                    className="flex items-center gap-2 text-purple-400 text-sm mb-4"
                    variants={itemVariants}
                  >
                    <BsCalendar2Date /> <span>{project.year}</span>
                  </motion.div>

                  <motion.div
                    className="flex flex-wrap gap-2 mb-4"
                    variants={itemVariants}
                  >
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-purple-500/10 border border-purple-500 rounded-full text-purple-300 text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </motion.div>

                  <motion.div className="flex gap-4 text-sm" variants={itemVariants}>
                    <a
                      href={project.source}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-white hover:text-purple-300"
                    >
                      <FaGithub /> Source Code
                    </a>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-white hover:text-purple-300"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>

     {/* Show More Button */}
{!showAll && (
  <div className="mt-12 text-center">
    <button
      onClick={() => setShowAll(true)}
      className="show-more-btn"
    >
      Show More 
    </button>
  </div>
)}

    </section>
  );
}

export default Projects;
