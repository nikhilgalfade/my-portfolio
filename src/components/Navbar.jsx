import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import BlurText from "./BlurText"; // 👈 animation text

function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("Home"); // ✅ active section track karega

  const scrollToSection = (id) => {
    setActive(id); // ✅ active update
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

  const menuItems = ["Home", "about", "projects", "contact", "resume"];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-md text-white px-8 md:px-32 py-4 flex justify-between items-center border-b border-white/20 shadow-md">
      {/* ✅ Logo */}
      <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent animate-gradient-x">
        Nikhil
      </h1>

      {/* Desktop Menu */}
<div className="hidden md:flex items-center space-x-8">
  {menuItems.map((item) => (
    item === "about" ? (
      <Link
        key={item}
        to="/about"
        className={`relative group ${
          location.pathname === "/about" ? "text-purple-400" : "text-white"
        }`}
      >
        <BlurText text="About" />
        <span
          className={`absolute left-0 -bottom-1 h-[2px] bg-gradient-to-r from-purple-400 to-purple-600 rounded-full transition-all duration-500 
            ${location.pathname === "/about" ? "w-full" : "w-0 group-hover:w-full"}`}
        />
      </Link>
    ) : (
      <button
        key={item}
        onClick={() => scrollToSection(item)}
        className={`relative group ${
          active === item ? "text-purple-400" : "text-white"
        }`}
      >
        <BlurText text={item.charAt(0).toUpperCase() + item.slice(1)} />
        <span
          className={`absolute left-0 -bottom-1 h-[2px] bg-gradient-to-r from-purple-400 to-purple-600 rounded-full transition-all duration-500 
            ${active === item ? "w-full" : "w-0 group-hover:w-full"}`}
        />
      </button>
    )
  ))}
</div>


      {/* Mobile Hamburger */}
      <div className="md:hidden flex items-center">
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
          {menuItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className={`relative group ${
                active === item ? "text-purple-400" : "text-white"
              }`}
            >
              <BlurText text={item.charAt(0).toUpperCase() + item.slice(1)} />
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-gradient-to-r from-purple-400 to-purple-600 rounded-full transition-all duration-500 
                  ${active === item ? "w-full" : "w-0 group-hover:w-full"}`}
              />
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
