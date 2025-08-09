function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-md text-white px-8 md:px-32 py-4 flex justify-between items-center border-b border-white/20 shadow-md">

      {/* Logo or Name */}
      <h1 className="text-xl md:text-2xl font-bold">Nikhil</h1>

      {/* Navigation Links */}
      <div className="space-x-4 md:space-x-8 text-sm md:text-base">
        <a href="#" className="hover:text-purple-400 transition-colors">Home</a>
        <a href="#projects" className="hover:text-purple-400 transition-colors">Projects</a>
        <a href="#about" className="hover:text-purple-400 transition-colors">About</a>
        <a href="#" className="hover:text-purple-400 transition-colors">Resume</a>
      </div>

    </nav>
  );
}
export default Navbar;
