function Contact() {
  return (
    <section
      id="contact"
      className="w-full px-6 py-24 bg-gradient-to-b from-black via-[#0a0a0a] to-[#10061a] text-white relative overflow-hidden"
    >
      {/* 💡 Heading */}
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold">
          Let's{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600">
            Connect
          </span>
        </h2>
        <p className="text-gray-400 mt-3 text-base max-w-xl mx-auto">
          Whether you have an idea, a project, or just want to say hi, my inbox is always open.
        </p>
      </div>

      {/* ✉️ Contact Card */}
      <div className="relative z-10 max-w-3xl mx-auto bg-black/70 border border-purple-600/30 backdrop-blur-md p-10 rounded-3xl shadow-xl">
        <form className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
          ></textarea>
          <div className="text-center">
            <button
              type="submit"
              className="w-full md:w-fit bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 transition-colors px-8 py-3 rounded-full font-bold shadow-lg"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>

      {/* 🔮 Glow Behind the Card */}
      <div className="absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[36rem] h-[36rem] bg-purple-500/20 blur-[120px] rounded-full z-0 animate-glow-fast"></div>
    </section>
  );
}

export default Contact;
