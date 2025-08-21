import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaGraduationCap, FaBrain, FaCode } from "react-icons/fa";

function AboutFullPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [jsSkill, setJsSkill] = useState(0);
  const [javaSkill, setJavaSkill] = useState(0);
  const [reactSkill, setReactSkill] = useState(0);
  const [tailwindSkill, setTailwindSkill] = useState(0);
  const [postgresSkill, setPostgresSkill] = useState(0);
  const [gitSkill, setGitSkill] = useState(0);

  useEffect(() => {
    const skills = [
      [setJsSkill, 85],
      [setJavaSkill, 80],
      [setReactSkill, 90],
      [setTailwindSkill, 85],
      [setPostgresSkill, 75],
      [setGitSkill, 88],
    ];

    const observers = [];

    skills.forEach(([setSkill, end], index) => {
      const element = document.getElementById(`skill-${index}`);
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            let start = 0;
            const timer = setInterval(() => {
              start++;
              setSkill(start);
              if (start >= end) clearInterval(timer);
            }, 20);
            observer.unobserve(element);
          }
        },
        { threshold: 0.5 }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  const skillsData = [
    { name: "JavaScript", logo: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png", progress: jsSkill },
    { name: "Java", logo: "https://cdn-icons-png.flaticon.com/512/226/226777.png", progress: javaSkill },
    { name: "React.js", logo: "https://cdn-icons-png.flaticon.com/512/1126/1126012.png", progress: reactSkill },
    { name: "Tailwind CSS", logo: "https://cdn-icons-png.flaticon.com/512/732/732190.png", progress: tailwindSkill },
    { name: "PostgreSQL", logo: "https://cdn-icons-png.flaticon.com/512/5968/5968342.png", progress: postgresSkill },
    { name: "Git & GitHub", logo: "https://cdn-icons-png.flaticon.com/512/733/733553.png", progress: gitSkill },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-black via-[#140e23] to-[#1c012b] text-white">
      <Navbar />

      <motion.main
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-grow pt-28 px-4 pb-16 flex flex-col items-center text-center"
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold"
        >
          About{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600">
            Me
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-300 text-lg md:text-1xl py-6 max-w-2xl leading-relaxed"
        >
          Passionate Full Stack Developer crafting digital experiences with modern technologies like Java, React, Spring Boot, and PostgreSQL.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-10 w-full max-w-4xl grid md:grid-cols-2 gap-6 text-left"
        >
          <div className="bg-[#1f0f2b] p-6 rounded-2xl border border-purple-800 shadow-md hover:shadow-purple-500/30 transition-all">
            <div className="flex items-center mb-4 gap-3">
              <FaGraduationCap className="text-purple-400 text-2xl" />
              <h2 className="text-2xl font-semibold text-purple-300">Education</h2>
            </div>
            <p className="text-lg font-medium text-white">B.Tech Information Technology Engineering</p>
            <p className="text-sm text-gray-400 mt-1">Sipna College Of Engineering And Technology</p>
          </div>

          <div className="bg-[#1f0f2b] p-6 rounded-2xl border border-purple-800 shadow-md hover:shadow-purple-500/30 transition-all">
            <div className="flex items-center mb-4 gap-3">
              <FaBrain className="text-purple-400 text-2xl" />
              <h2 className="text-2xl font-semibold text-purple-300">Expertise</h2>
            </div>
            <div className="flex items-start gap-3 mb-2">
              <FaCode className="text-purple-500 mt-1" />
              <span className="text-white">Full Stack Development</span>
            </div>
            <div className="flex items-start gap-3">
              <FaBrain className="text-purple-500 mt-1" />
              <span className="text-white">Deep Learning & AI Technologies</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-10 w-full max-w-4xl bg-[#1f0f2b] p-6 rounded-2xl border border-purple-800 shadow-md hover:shadow-purple-500/30 transition-all text-left"
        >
          <p className="font-medium px-1">
            Hello! I'm Nikhil Baba Galfade, a passionate Java Full Stack Developer and Machine Learning enthusiast.
          </p>
          <p className="font-medium px-1 py-4">
            I specialize in the Java Full stack and have a keen interest in Machine Learning and AI technologies.
          </p>
          <p className="font-medium px-1 pt-2">
            When I'm not coding, I explore open-source projects or the latest trends in AI and web development.
          </p>
        </motion.div>

        <section id="Skills" className="w-full mt-10 flex justify-center">
          <div className="max-w-6xl w-full">
            <div className="text-center pb-4">
              <h2 className="text-4xl md:text-5xl font-bold">
                Technical{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600">
                  Skills
                </span>
              </h2>
              <p className="text-gray-300 text-lg py-2 max-w-2xl mx-auto">
                A quick look at my strongest tech skills
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 py-12 place-items-center">
              {skillsData.map((skill, i) => (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  id={`skill-${i}`}
                  key={i}
                  className="bg-gradient-to-br from-[#2d1a40] to-[#1f0f2b] h-56 w-full max-w-xs border border-purple-700 shadow-lg hover:shadow-purple-600/40 rounded-xl p-4 flex flex-col items-center justify-between transition-transform hover:scale-105 duration-300 ease-in-out"
                >
                  <img src={skill.logo} alt={skill.name} className="h-12 w-12 mt-2 animate-pulse" />
                  <h3 className="text-white text-lg font-bold mt-3 tracking-wide">{skill.name}</h3>
                  <div className="mt-3 w-full">
                    <div className="text-xs text-gray-400 mb-1 flex justify-between px-1">
                      <span>Skill</span>
                      <span className="text-yellow-300 font-bold">{skill.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <div className="bg-yellow-400 h-full rounded-full" style={{ width: `${skill.progress}%` }}></div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </motion.main>

      <Footer />
    </div>
  );
}

export default AboutFullPage;
