import { IoLocationOutline } from "react-icons/io5";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

// Animation variants
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section 
     id="about" className="w-full flex flex-col justify-center items-center px-4 py-16 text-white bg-gradient-to-b from-[#0a0a0a] via-[#1a0e26] to-[#10061a]">
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">
          Know Who{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600">
            I Am
          </span>
        </h1>
      </div>

      <div className="relative max-w-4xl w-full" ref={ref}>
        <div className="absolute inset-0 rounded-2xl z-0 pointer-events-none animate-glow-border" />

        {/* ✨ Static box, animated content only inside */}
        <div className="relative z-10 bg-black/80 backdrop-blur-lg border border-white/30 rounded-2xl p-8 md:p-12 text-left">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
          >
            {/* Location */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-2 mb-6 text-purple-300"
            >
              <IoLocationOutline className="text-xl" />
              <p className="text-lg font-semibold text-white">Based in</p>
              <p className="text-lg font-semibold text-purple-400">
                Chandrapur, Maharashtra, India
              </p>
            </motion.div>

            {/* Paragraphs */}
            <motion.p
              variants={itemVariants}
              className="text-gray-200 text-base md:text-lg leading-relaxed mb-4"
            >
              As a passionate Software Development Engineer, I bring expertise in{" "}
              <span className="text-purple-400">full-stack development</span> and a
              deep commitment to crafting innovative solutions.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-gray-200 text-base md:text-lg leading-relaxed mb-8"
            >
              I thrive in dynamic environments where I can collaborate with talented
              teams, solve complex problems, and continuously expand my technical
              horizons while making meaningful contributions to impactful projects.
            </motion.p>

            {/* Skill Tags */}
            <motion.div
              variants={itemVariants}
              className="md:space-x-4 text-center gap-3 font-semibold text-purple-400 mb-8"
            >
              <span className="bg-white/10 px-3 py-2 rounded-full border border-purple-500">
                Problem Solving
              </span>
              <span className="bg-white/10 px-5 py-2 rounded-full border border-purple-500">
                Team Collaboration
              </span>
              <span className="bg-white/10 px-6 py-2 rounded-full border border-purple-500">
                Innovation
              </span>
            </motion.div>

            {/* Button */}
            <motion.div variants={itemVariants} className="text-center">
              


<div className="text-center">
  <Link to="/about">
    <button className="bg-purple-500 hover:bg-purple-700 px-6 py-2 rounded-full font-semibold transition-colors">
      Know More
    </button>
  </Link>
</div>


            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
