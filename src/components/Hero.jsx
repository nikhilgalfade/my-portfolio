import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import "./Hero.css"; // Make sure your CSS is in this file or imported

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // delay between items
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

function Hero() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-gray-900 via-purple-900 to-black text-white flex flex-col justify-center items-center text-center p-4">
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {/* Greeting */}
        <motion.h2
          variants={itemVariants}
          className="text-2xl text-purple-400 font-semibold mb-4"
        >
          Hello, I'm
        </motion.h2>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
        >
          Nikhil Galfade
        </motion.h1>

        {/* Typewriter Effect */}
        <motion.div
          variants={itemVariants}
          className="text-2xl md:text-3xl mt-4 text-gray-300"
        >
          <Typewriter
            options={{
              strings: [
                "Java Full Stack Developer",
                "Spring Boot Developer",
                "React Developer",
                "PostgreSQL Developer",
                "Python Developer",
              ],
              autoStart: true,
              loop: true,
              delay: 25,
              deleteSpeed: 40,
            }}
          />
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="mt-6 flex gap-6 text-3xl text-white justify-center"
        >
          <a
            href="https://github.com/nikhilgalfade"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://leetcode.com/u/nikhil__galfade/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition-colors"
          >
            <SiLeetcode />
          </a>
          <a
            href="https://www.linkedin.com/in/nikhil-galfade-a0a08a253/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition-colors"
          >
            <FaLinkedin />
          </a>
        </motion.div>

        {/* View My Work Button */}
        <motion.div
          variants={itemVariants}
          className="mt-6 flex gap-4 justify-center"
        >
          <button 
            className="bg-purple-500 hover:bg-purple-700 px-6 py-2 rounded-full font-semibold"
          >
            View My Work
          </button>
        </motion.div>

        {/* Scroll Button */}
       <motion.div
  variants={itemVariants}
  className="hero-buttons mt-20 flex justify-center"
>
  <button
    className="btn"
    onClick={() => {
      const element = document.getElementById("projects");
      element.scrollIntoView({ behavior: "smooth" });
    }}
  >
    <div className="scroll"></div> {/* ONLY the bouncing dot */}
  </button>
</motion.div>


      </motion.div>
    </div>
  );
}

export default Hero;
