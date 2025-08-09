import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./footer3d.css"; // Import the 3D hover effect

function Footer() {
  return (
    <footer className="w-full bg-gradient-to-t from-black/80 to-transparent text-gray-400 py-12">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-6 px-4">

        {/* 🔗 Connect Heading */}
        <h3 className="text-lg font-semibold text-white">Connect</h3>

        {/* 🌐 3D Social Icons */}
        <div className="flex gap-6">
          <a
            href="https://github.com/your-github"
            target="_blank"
            rel="noopener noreferrer"
            className="social-3d"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/your-linkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="social-3d"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:nikhilgalfade42@gmail.com"
            className="social-3d"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* 📧 Email Address */}
        <a
          href="mailto:nikhilgalfade42@gmail.com"
          className="text-sm hover:underline"
        >
          nikhilgalfade42@gmail.com
        </a>

        {/* 🏷 Copyright */}
        <div className="text-xs text-gray-500">
          © {new Date().getFullYear()}{" "}
          <span className="text-purple-300">Nikhil Galfade</span>. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
