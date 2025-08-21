import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation(); // get current route

  const scrollToSection = (id) => {
    if (location.pathname === "/") {
      // if already on home page, scroll smoothly
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // if on another page, go to home first
      window.location.href = "/#" + id;
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-md text-white px-8 md:px-32 py-4 flex justify-between items-center border-b border-white/20 shadow-md">
      {/* Logo or Name */}
      <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 bg-clip-text text-transparent animate-gradient-x">
        Nikhil
      </h1>

      {/* Navigation Links */}
      <div className="space-x-4 md:space-x-8 text-sm md:text-base">
        <Link
          to="/"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="hover:text-purple-400 transition-colors"
        >
          Home
        </Link>
        <button
          onClick={() => scrollToSection("projects")}
          className="hover:text-purple-400 transition-colors"
        >
          Projects
        </button>
        <button
          onClick={() => scrollToSection("about")}
          className="hover:text-purple-400 transition-colors"
        >
          About
        </button>
        <a
          href="/resume.pdf"
          download
          className="hover:text-purple-400 transition-colors"
        >
          Resume
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
