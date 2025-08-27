import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("Home");

  // ✅ Capitalized version
  const menuItems = ["Home", "About", "Projects", "Contact"];

  // Update active state based on current location
  useEffect(() => {
    if (location.pathname === "/about") {
      setActive("About");
    } else if (location.hash) {
      setActive(location.hash.substring(1));
    } else if (location.pathname === "/") {
      setActive("Home");
    }
  }, [location]);

  const scrollToSection = (id) => {
    setActive(id);
    if (id === "Home") {
      if (location.pathname !== "/") {
        navigate("/");
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } else if (location.pathname === "/") {
      const element = document.getElementById(id.toLowerCase());
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/#" + id.toLowerCase());
    }
    setMenuOpen(false); // close dropdown after click
  };

  const handleAboutClick = () => {
    setActive("About");
    setMenuOpen(false);
    navigate("/about");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleResumeDownload = () => {
    setMenuOpen(false);
    setActive("Resume");
    const resumeUrl = "/resume.pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Nikhil_Galfade_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
        <Link
          to="/"
          onClick={() => scrollToSection("Home")}
          className="cursor-pointer flex-shrink-0"
        >
          <h1
            className="text-2xl md:text-4xl font-normal text-purple-400 hover:text-purple-300 transition-colors duration-300"
            style={{ fontFamily: "'Edwardian Script ITC', cursive" }}
          >
            Nikhil Galfade
          </h1>
        </Link>
      </motion.div>

      {/* Desktop Menu */}
      <motion.div
        className="hidden md:flex items-center space-x-8"
        variants={navContainer}
      >
        {menuItems.map((item) => (
          <motion.div key={item} variants={navItem}>
            {item === "About" ? (
              <Link
                to="/about"
                className={`relative group ${
                  active === "About" ? "text-purple-400" : "text-white"
                }`}
                onClick={handleAboutClick}
              >
                <span className="hover:text-purple-300 transition-colors duration-300">
                  {item}
                </span>
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-gradient-to-r from-purple-400 to-purple-600 rounded-full transition-all duration-500 
                    ${active === "About" ? "w-full" : "w-0 group-hover:w-full"}`}
                />
              </Link>
            ) : (
              <button
                onClick={() => scrollToSection(item)}
                className={`relative group ${
                  active === item ? "text-purple-400" : "text-white"
                }`}
              >
                <span className="hover:text-purple-300 transition-colors duration-300">
                  {item}
                </span>
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
            className={`relative group ${
              active === "Resume" ? "text-purple-400" : "text-white"
            }`}
          >
            <span className="hover:text-purple-300 transition-colors duration-300">
              Resume
            </span>
            <span
              className={`absolute left-0 -bottom-1 h-[2px] bg-gradient-to-r from-purple-400 to-purple-600 rounded-full transition-all duration-500 
                ${active === "Resume" ? "w-full" : "w-0 group-hover:w-full"}`}
            />
          </button>
        </motion.div>
      </motion.div>

      {/* Mobile Menu */}
      <motion.div
        className="md:hidden flex items-center gap-4"
        variants={navContainer}
      >
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
          className="text-2xl focus:outline-none flex flex-col justify-center items-center w-10 h-10 relative"
        >
          {menuOpen ? (
            <FaTimes className="text-purple-400" />
          ) : (
            <>
              <span className="w-6 h-0.5 bg-white mb-1.5"></span>
              <span className="w-6 h-0.5 bg-white mb-1.5"></span>
              <span className="w-6 h-0.5 bg-white"></span>
            </>
          )}
        </motion.button>
      </motion.div>

      {/* ✅ Mobile Dropdown Fixed */}
      {menuOpen && (
        <motion.div
          className="absolute top-full right-4 w-48 bg-black/95 text-white flex flex-col space-y-2 p-4 md:hidden backdrop-blur-lg rounded-lg shadow-xl border border-purple-500/30"
          initial={{ opacity: 0, y: -10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          {menuItems.map((item) => (
            <motion.button
              key={item}
              onClick={() =>
                item === "About" ? handleAboutClick() : scrollToSection(item)
              }
              className={`relative text-left py-2 px-3 rounded-md transition-all duration-200 ${
                active === item
                  ? "bg-purple-900/30 text-purple-300"
                  : "hover:bg-purple-800/20"
              }`}
            >
              {item}
            </motion.button>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
}

export default Navbar;
