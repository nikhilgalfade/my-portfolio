import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./footer3d.css"; // Import the 3D hover effect

function Footer() {
  return (
    <footer className="w-full bg-gradient-to-t from-black/90 to-transparent text-gray-400 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6">

        {/* 👤 About Section (Left) */}
        <div>
          <h3 className="text-3xl font-bold text-purple-400">Nikhil Galfade</h3>
          <p className="mt-3 font-semiboldtext-sm leading-relaxed text-gray-300">
            Full Stack Developer crafting digital experiences with modern
            technologies and innovative solutions.
          </p>
        </div>

 <div className="flex justify-center items-center gap-6">
    <a
      href="https://github.com/your-github"
      target="_blank"
      rel="noopener noreferrer"
      className="social-3d"
    >
      <FaGithub size={22} />
    </a>
    <a
      href="https://linkedin.com/in/your-linkedin"
      target="_blank"
      rel="noopener noreferrer"
      className="social-3d"
    >
      <FaLinkedin size={22} />
    </a>
    <a href="mailto:nikhilgalfade42@gmail.com" className="social-3d">
      <FaEnvelope size={22} />
    </a>
  </div>

        {/* 🔗 Quick Links (Right) */}
        <div className="text-left md:text-left">
          <h3 className="text-2xl font-semibold text-white">Quick Links</h3>
          <div className="mt-3 grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
            <a href="#home" className="hover:text-purple-300 font-bold">Home</a>
            <a href="#about" className="hover:text-purple-300 font-bold md:text-right">About</a>
            <a href="#projects" className="hover:text-purple-300 font-bold">Projects</a>
            <a href="#contact" className="hover:text-purple-300 md:text-right font-bold">Contact</a>
          </div>
        </div>
      </div> {/* ✅ closed main grid container */}

      {/* ⚖️ Bottom Section */}
<div className="mt-10 text-center">
  <div className="inline-block w-auto max-w-full border-t border-gray-700 pt-4 text-xs text-gray-500 px-6">
    © {new Date().getFullYear()}{" "}
    <span className="text-purple-300">Nikhil Galfade</span>. All rights reserved.
  </div>
</div>




    </footer>
  );
}

export default Footer;
