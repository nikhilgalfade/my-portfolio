import { Link, useLocation } from "react-router-dom"; 
import { useState } from "react"; 
import { FaBars, FaTimes, FaDownload } from "react-icons/fa"; 
import BlurText from "./BlurText";
import { motion } from "framer-motion";

function Navbar() { 
  const location = useLocation(); 
  const [menuOpen, setMenuOpen] = useState(false); 
  const [active, setActive] = useState("Home");

  const scrollToSection = (id) => { 
    setActive(id);
    if (id === "Home") { 
      window.scrollTo({ top: 0, behavior: "smooth" }); 
    } else if (location.pathname === "/") { 
      const element = document.getElementById(id); 
      if (element) { 
        element.scrollIntoView({ behavior: "smooth" }); 
      } 
    } else { 
      window.location.href = "/#" + id; 
    } 
    setMenuOpen(false); 
  };

  const handleHomeClick = () => {
    setActive("Home");
    if (location.pathname !== "/") {
      window.location.href = "/";
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleResumeDownload = () => {
    setMenuOpen(false);
    setActive("resume");
    const resumeUrl = '/resume.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Nikhil_Galfade_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const menuItems = ["Home", "about", "projects", "contact"];

  // Framer Motion Variants
  const navContainer = {
    hidden: { opacity: 0, y: -20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 },
    },
  };

  const navItem = {
    hidden: { opacity: 0, y: -20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return ( 
    <motion.nav 
      className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-md text-white px-4 md:px-32 py-4 flex justify-between items-center border-b border-white/20 shadow-md"
      variants={navContainer}
      initial="hidden"
      animate="show"
    >
      {/* Logo */}
      <motion.div variants={navItem}>
        <Link to="/" onClick={handleHomeClick} className="cursor-pointer flex-shrink-0">
          <h1 
            className="text-2xl md:text-4xl font-normal text-purple-400 hover:text-purple-300 transition-colors duration-300" 
            style={{ fontFamily: "'Edwardian Script ITC', cursive" }}
          >
            Nikhil Galfade
          </h1>
        </Link>
      </motion.div>

      {/* Desktop Menu */}
      <motion.div className="hidden md:flex items-center space-x-8" variants={navContainer}>
        {menuItems.map((item) => (
          <motion.div key={item} variants={navItem}>
            {item === "about" ? (
              <Link 
                to="/about" 
                className={`relative group ${location.pathname === "/about" ? "text-purple-400" : "text-white"}`} 
              > 
                <BlurText text="About" /> 
                <span 
                  className={`absolute left-0 -bottom-1 h-[2px] bg-gradient-to-r from-purple-400 to-purple-600 rounded-full transition-all duration-500 
                    ${location.pathname === "/about" ? "w-full" : "w-0 group-hover:w-full"}`} 
                /> 
              </Link>
            ) : (
              <button 
                onClick={() => scrollToSection(item)} 
                className={`relative group ${active === item ? "text-purple-400" : "text-white"}`} 
              > 
                <BlurText text={item.charAt(0).toUpperCase() + item.slice(1)} /> 
                <span 
                  className={`absolute left-0 -bottom-1 h-[2px] bg-gradient-to-r from-purple-400 to-purple-600 rounded-full transition-all duration-500 
                    ${active === item ? "w-full" : "w-0 group-hover:w-full"}`} 
                /> 
              </button>
            )}
          </motion.div>
        ))}

        {/* Resume Button */}
        <motion.div variants={navItem}>
          <button 
            onClick={handleResumeDownload} 
            className={`relative group ${active === "resume" ? "text-purple-400" : "text-white"}`}
          > 
            <BlurText text="Resume" /> 
            <span 
              className={`absolute left-0 -bottom-1 h-[2px] bg-gradient-to-r from-purple-400 to-purple-600 rounded-full transition-all duration-500 
                ${active === "resume" ? "w-full" : "w-0 group-hover:w-full"}`} 
            /> 
          </button>
        </motion.div>
      </motion.div>

      {/* Mobile Menu */}
      <motion.div className="md:hidden flex items-center gap-4" variants={navContainer}>
        {/* Resume Button */}
        <motion.button 
          onClick={handleResumeDownload}
          variants={navItem}
          className="relative group border border-purple-400 text-purple-400 hover:bg-purple-400/10 px-3 py-2 rounded-lg flex items-center gap-2 transition-all duration-300"
          title="Download Resume"
        >
          <FaDownload className="text-sm" />
          <span className="text-sm font-medium">Resume</span>
        </motion.button>

        {/* Hamburger */}
        <motion.button 
          onClick={() => setMenuOpen(!menuOpen)} 
          variants={navItem}
          className="text-2xl focus:outline-none"
        > 
          {menuOpen ? <FaTimes /> : <FaBars />} 
        </motion.button> 
      </motion.div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <motion.div 
          className="absolute top-full left-0 w-full bg-black/95 text-white flex flex-col space-y-4 p-6 md:hidden backdrop-blur-lg"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {menuItems.map((item) => (
            <motion.button
              key={item}
              onClick={() => scrollToSection(item)}
              variants={navItem}
              className={`relative group text-left py-2 ${active === item ? "text-purple-400" : "text-white"}`}
            >
              <BlurText text={item.charAt(0).toUpperCase() + item.slice(1)} />
              <span 
                className={`absolute left-0 -bottom-1 h-[2px] bg-gradient-to-r from-purple-400 to-purple-600 rounded-full transition-all duration-500 
                  ${active === item ? "w-full" : "w-0 group-hover:w-full"}`}
              />
            </motion.button>
          ))}
        </motion.div>
      )}
    </motion.nav>
  ); 
} 

export default Navbar;
