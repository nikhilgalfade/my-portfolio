import { useRef, useState } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { BsCalendar2Date } from "react-icons/bs";
import { motion, useInView } from "framer-motion";
import "./holographicCard.css"; // ⬅️ Import the shimmer hover effect

// Animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 },
  },
};

const contentContainerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

function Projects() {
  const allProjects = [
    {
      title: "Job Portal Web App",
      description: "Built with React, Spring Boot, and PostgreSQL. A complete job platform.",
      tech: ["React", "Spring Boot", "PostgreSQL"],
      image: "/images/job-portal.png",
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
      source: "#",
    },
  ];

  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? allProjects : allProjects.slice(0, 2);

  return (
    <section
      id="projects"
      className="w-full px-6 py-20 bg-gradient-to-b from-[#10061a] via-[#0a0a0a] to-black text-white"
    >
      {/* Section Heading */}
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-bold">
          Featured{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600">
            Projects
          </span>
        </h2>
        <p className="text-gray-400 mt-2 text-base">
          Explore some of my highlighted work and personal projects that showcase my expertise.
        </p>
      </div>

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
              {/* Inner content animation */}
              <motion.div
                variants={contentContainerVariants}
                initial="hidden"
                animate={isCardInView ? "show" : "hidden"}
              >
                {/* Image */}
                <motion.img
                  src={project.image}
                  alt={`${project.title} Screenshot`}
                  className="w-full h-48 object-cover"
                  variants={imageVariants}
                />

                {/* Text Content */}
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
            className="bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-full font-semibold transition-colors"
          >
            Show More Projects
          </button>
        </div>
      )}
    </section>
  );
}

export default Projects;
