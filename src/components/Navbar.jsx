import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    if (id === "Home") {
      // Scroll to very top for Home
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

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-md text-white px-8 md:px-32 py-4 flex justify-between items-center border-b border-white/20 shadow-md">
      {/* Logo */}
      <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 bg-clip-text text-transparent animate-gradient-x">
        Nikhil
      </h1>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-8">
        <button
          onClick={() => scrollToSection("Home")}
          className="hover:text-purple-400 transition-colors font-semibold"
        >
          Home
        </button>
        <button
          onClick={() => scrollToSection("about")}
          className="hover:text-purple-400 transition-colors font-semibold"
        >
          About
        </button>
        <button
          onClick={() => scrollToSection("projects")}
          className="hover:text-purple-400 transition-colors font-semibold"
        >
          Projects
        </button>
        <button
          onClick={() => scrollToSection("contact")}
          className="hover:text-purple-400 transition-colors font-semibold"
        >
          Contact
        </button>

        {/* Resume always visible */}
        <a
          href="/resume.pdf"
          download
          className="hover:text-purple-400 transition-colors font-semibold"
        >
          Resume
        </a>
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden flex items-center">
        <a
          href="/resume.pdf"
          download
          className="hover:text-purple-400 transition-colors font-semibold mr-4"
        >
          Resume
        </a>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-2xl focus:outline-none"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="absolute top-16 right-4 bg-black/80 text-white rounded-lg shadow-lg flex flex-col space-y-4 p-6 md:hidden">
          <button
            onClick={() => scrollToSection("about")}
            className="hover:text-purple-400 transition-colors"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="hover:text-purple-400 transition-colors"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="hover:text-purple-400 transition-colors"
          >
            Contact
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
