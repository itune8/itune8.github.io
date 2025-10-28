import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, FileDown, Github, Linkedin, ExternalLink, Play } from "lucide-react";

const accent = "from-[#7C3AED] via-[#4F46E5] to-[#06B6D4]";
const glass =
  "backdrop-blur-lg bg-white/5 border border-white/10 hover:shadow-lg hover:shadow-white/10 transition-all duration-300";

const ME = {
  name: "Sahil Kumar",
  description:
    "Hi, I'm Sahil — a Front-End Engineer at Hyper Brain Labs, contributing to impactful client projects while also working with Josh Technology Group as a Software Test Engineer. I craft responsive, scalable web interfaces and ensure product reliability through automation and QA-driven development to deliver seamless, production-ready experiences.",
  location: "Gurugram, Haryana",
  github: "https://github.com/itune8",
  linkedin: "https://www.linkedin.com/in/sahils90/",
  resume: "https://drive.google.com/file/d/1GDBc847bAkxmub1mf2ak6A6viNQMadnr/preview",
};

function Typewriter() {
  const phrases = [
    "Front-End Engineer",
    "Automation Engineer",
    "Agile Explorer",
    "Team Leader",
    "2× Hackathon Winner",
  ];

  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const current = phrases[index];
    const speed = reverse ? 120 : 140;
    const timeout = setTimeout(() => {
      setSubIndex((prev) => {
        if (!reverse && prev < current.length) return prev + 1;
        else if (!reverse && prev === current.length) {
          setReverse(true);
          return prev;
        } else if (reverse && prev > 0) return prev - 1;
        else {
          setReverse(false);
          setIndex((i) => (i + 1) % phrases.length);
          return 0;
        }
      });
    }, speed);
    return () => clearTimeout(timeout);
  }, [subIndex, reverse, index]);

  useEffect(() => {
    const blinkInterval = setInterval(() => setBlink((b) => !b), 650);
    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <motion.p
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-lg md:text-xl text-white/80 mt-2"
    >
      {phrases[index].substring(0, subIndex)}
      <span
        className={`inline-block w-[2px] h-6 bg-white/80 ml-1 transition-opacity ${
          blink ? "opacity-100" : "opacity-0"
        }`}
      ></span>
    </motion.p>
  );
}

export default function Portfolio() {
  const [activeProject, setActiveProject] = useState(null);
  const [showResume, setShowResume] = useState(false);
  const [showExperience, setShowExperience] = useState(false);



  const projects = [
    {
      title: "Stutor",
      desc: "Peer-to-peer student learning platform — sessions, reviews, smart matching, and crisp UI.",
      tags: ["React", "Node", "Postgres"],
      icon: "🎓",
      video:
        "https://drive.google.com/file/d/1_2AF-FgEk8S0ZbrVo7v8mBoRIZyEgNez/preview",
      link: "https://itune8.github.io/stutor_/",
    },
    {
      title: "LitterLift",
      desc: "Camera-enabled smart bin that snaps litter, uploads to a dashboard, and pings municipal cleanup with coordinates via Google APIs.",
      tags: ["IoT", "Computer Vision", "Maps API"],
      icon: "🗑️",
      video:
        "https://drive.google.com/file/d/152vUByZILcnee_o-SyZ206mfWms-zVfu/preview",
      link: "https://litter-lift.vercel.app/",
    },
    {
      title: "Banking Management",
      desc: "End-to-end banking management system handling user accounts, transactions, and admin analytics.",
      tags: ["Java", "OOPs", "MySQL"],
      icon: "🏦",
      video: null,
      link: "http://banking-management.gt.tc/",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0B0F1A] text-white">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-[#0B0F1A]/80 backdrop-blur border-b border-white/10">
        <nav className="mx-auto max-w-6xl flex items-center justify-between px-4 py-3">
          
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative group cursor-pointer"
          >
            <motion.span
              className="font-semibold tracking-tight relative z-10"
              animate={{
                textShadow: [
                  "0 0 20px rgba(124, 58, 237, 0.8), 0 0 40px rgba(124, 58, 237, 0.5)",
                  "0 0 20px rgba(236, 72, 153, 0.8), 0 0 40px rgba(236, 72, 153, 0.5)",
                  "0 0 20px rgba(79, 70, 229, 0.8), 0 0 40px rgba(79, 70, 229, 0.5)",
                  "0 0 20px rgba(6, 182, 212, 0.8), 0 0 40px rgba(6, 182, 212, 0.5)",
                  "0 0 20px rgba(16, 185, 129, 0.8), 0 0 40px rgba(16, 185, 129, 0.5)",
                  "0 0 20px rgba(124, 58, 237, 0.8), 0 0 40px rgba(124, 58, 237, 0.5)",
                ],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              sahil.dev
            </motion.span>
            <motion.div
              className="absolute -inset-4 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-300"
              animate={{
                background: [
                  "radial-gradient(circle, rgba(124, 58, 237, 0.6) 0%, transparent 70%)",
                  "radial-gradient(circle, rgba(236, 72, 153, 0.6) 0%, transparent 70%)",
                  "radial-gradient(circle, rgba(79, 70, 229, 0.6) 0%, transparent 70%)",
                  "radial-gradient(circle, rgba(6, 182, 212, 0.6) 0%, transparent 70%)",
                  "radial-gradient(circle, rgba(16, 185, 129, 0.6) 0%, transparent 70%)",
                  "radial-gradient(circle, rgba(124, 58, 237, 0.6) 0%, transparent 70%)",
                ],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </motion.div>

          <div className="hidden md:flex gap-6 text-sm text-white/80">
            <a href="#work" className="hover:text-white">Work</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <button
  onClick={() => setShowExperience(true)}
  className="hover:text-white transition-colors"
>
  Experience
</button>

            <a href="#contact" className="hover:text-white">Contact</a>
          </div>

          <div className="flex items-center gap-2">
            <a href={ME.github} target="_blank" className="p-2 rounded-lg hover:bg-white/5 transition-all">
              <Github className="w-5 h-5 text-white" />
            </a>
            <a href={ME.linkedin} target="_blank" className="p-2 rounded-lg hover:bg-white/5 transition-all">
              <Linkedin className="w-5 h-5 text-[#0A66C2]" />
            </a>
            <a href="#contact" className="ml-2">
              <button className={`rounded-xl px-3 py-2 text-sm bg-gradient-to-r ${accent}`}>Let’s talk</button>
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="mx-auto max-w-6xl px-4 py-16 grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-5xl font-semibold"
          >
            {ME.name}
          </motion.h1>
          <Typewriter />
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-5 text-white/70 leading-relaxed max-w-lg"
          >
            {ME.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-6 flex flex-wrap gap-3 text-sm text-white/80"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
              <MapPin className="w-4 h-4" /> {ME.location}
            </span>
            <a
              href={ME.resume}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 hover:bg-white/10"
            >
              <FileDown className="w-4 h-4" /> Résumé
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="mt-8 flex gap-3"
          >
            <button
              className={`rounded-xl px-4 py-2 text-sm bg-gradient-to-r ${accent}`}
            >
              See my work
            </button>
            <a
              href={ME.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl px-4 py-2 text-sm bg-white/10 border border-white/10 hover:bg-white/20 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] transition-all"
            >
              GitHub
            </a>
          </motion.div>
        </motion.div>

        {/* Cards Section */}
        <div className="grid grid-cols-2 gap-4 content-start">
          {[
            "Professional Edge",
            "Experience",
            "Achievements",
            "Core Skills",
            "Currently",
          ].map((section, i) => (
            <motion.div
              key={section}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className={`${glass} rounded-2xl p-5 hover:scale-105`}
            >
              {section === "Professional Edge" && (
                <>
                  <h3 className="font-medium text-white mb-2">{section}</h3>
                  <p className="text-white/70 text-sm mb-1.5">
                    • Building scalable SaaS products
                  </p>
                  <p className="text-white/70 text-sm mb-1.5">
                    • Client-facing web solutions
                  </p>
                  <p className="text-white/70 text-sm mb-1.5">
                    • QA automation & test-driven development
                  </p>
                  <p className="text-white/70 text-sm mb-1.5">
                    • Agile & Scrum workflows
                  </p>
                  <p className="text-white/70 text-sm">
                    • API testing & backend validation
                  </p>
                </>
              )}
              {section === "Experience" && (
                <>
                  <h3 className="font-medium text-white mb-2">{section}</h3>
                  <p className="text-white/70 text-sm mb-1.5">
                    • Front-End Engineer @ Hyper Brain Labs
                  </p>
                  <p className="text-white/70 text-sm mb-1.5">
                    • Software Test Engineer @ Josh Technology Group
                  </p>
                  <p className="text-white/70 text-sm mb-1.5">
                    • Trainee @ PwC (Salesforce & Cloud)
                  </p>
                  <p className="text-white/70 text-sm">
                    • Frontend Developer @ Prodigy InfoTech
                  </p>
                </>
              )}
                            {section === "Achievements" && (
                <>
                  <h3 className="font-medium text-white mb-2">{section}</h3>
                  <p className="text-white/70 text-sm mb-1.5">
                    • 🥇 2× Winner | Ideathon & Horizon'24
                  </p>
                  <p className="text-white/70 text-sm mb-1.5">
                    • 🥈 Runner-up | Startup Odisha x OUTR'24
                  </p>
                  <p className="text-white/70 text-sm">
                    • 🥇 Winner | HackerWar'25
                  </p>
                </>
              )}
              {section === "Core Skills" && (
                <>
                  <h3 className="font-medium text-white mb-2">{section}</h3>
                  <p className="text-white/70 text-sm mb-1.5">
                    • Java • Python • React • JavaScript
                  </p>
                  <p className="text-white/70 text-sm mb-1.5">
                    • API Testing • Automation Scripts
                  </p>
                  <p className="text-white/70 text-sm">
                    • Selenium | Postman | Jira | Jenkins | AWS
                  </p>
                </>
              )}
              {section === "Currently" && (
                <>
                  <h3 className="font-medium text-white mb-2">{section}</h3>
                  <p className="text-white/70 text-sm mb-1.5">
                    • Working as Front-End Engineer
                  </p>
                  <p className="text-white/70 text-sm mb-1.5">
                    • Building test scripts & automation
                  </p>
                  <p className="text-white/70 text-sm">
                    • Developing scalable SaaS products
                  </p>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </main>

      {/* Endless Tech Line + Feature Cards */}
      <section className="mx-auto max-w-6xl px-4 pb-12">
        <div className="overflow-hidden mb-8">
          <motion.div
            animate={{ x: ["-50%", "0%"] }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: "linear",
            }}
            className="flex items-center gap-10 text-white/80 text-sm whitespace-nowrap"
          >
            <div className="flex items-center gap-10 shrink-0">
              <p>⚡ 2× Award-winning projects</p>
              <p>💡 Pragmatic, test-first development</p>
              <p>🏆 Hackathons '24</p>
              <p>HTML</p>
              <p>CSS</p>
              <p>JavaScript</p>
              <p>React</p>
              <p>☁️ Jira</p>
              <p>☕ Java</p>
            </div>
            <div className="flex items-center gap-10 shrink-0">
              <p>⚡ 2× Award-winning projects</p>
              <p>💡 Pragmatic, test-first development</p>
              <p>🏆 Hackathons '24</p>
              <p>HTML</p>
              <p>CSS</p>
              <p>JavaScript</p>
              <p>React</p>
              <p>☁️ Jira</p>
              <p>☕ Java</p>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`${glass} rounded-2xl p-6 hover:scale-105`}
          >
            <h4 className="font-medium text-white mb-3">
              🧪 Automation & Quality Engineering
            </h4>
            <p className="text-white/70 mb-3">
              Automation that scales quality and keeps products dependable.
            </p>
            <ul className="text-white/70 space-y-2 text-sm">
              <li>• Smart test pipelines & CI/CD flows</li>
              <li>• Performance validation & regression suites</li>
              <li>• Shift-left with an analytical approach</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.06 }}
            className={`${glass} rounded-2xl p-6 hover:scale-105`}
          >
            <h4 className="font-medium text-white mb-3">
              ☁️ Cloud, Salesforce & Analyst Mindset
            </h4>
            <p className="text-white/70 mb-3">
              Bridging tech and business through data-driven insight.
            </p>
            <ul className="text-white/70 space-y-2 text-sm">
              <li>• Salesforce workflows & process optimization</li>
              <li>• Cloud deployment & integration</li>
              <li>• Client engagement with an analytical focus</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className={`${glass} rounded-2xl p-6 hover:scale-105`}
          >
            <h4 className="font-medium text-white mb-3">
              💻 Frontend, Collaboration & Innovation
            </h4>
            <p className="text-white/70 mb-3">
              Designing clean UIs and driving impact through teamwork and
              creativity.
            </p>
            <ul className="text-white/70 space-y-2 text-sm">
              <li>• React, JS interfaces</li>
              <li>• 2× Hackathon wins & product ideathons</li>
              <li>• Collaborative communication & agile delivery</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Selected Work (interactive) */}
      <section id="projects" className="mx-auto max-w-6xl px-4 pb-16">
        <h2 className="text-2xl font-semibold mb-6 text-center">Selected Work</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              onClick={() => setActiveProject(project)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, rotate: 1 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.4, delay: i * 0.15 }}
              className={`${glass} rounded-2xl p-6 cursor-pointer relative overflow-hidden group`}
            >
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br from-[#7C3AED] to-[#06B6D4] transition-opacity duration-500"
              ></motion.div>
              <div className="absolute top-3 right-3 opacity-60 group-hover:opacity-100 transition-all">
                <Play className="w-5 h-5 text-white/80" />
              </div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xl">{project.icon}</span>
                <h4 className="text-white font-semibold text-lg">
                  {project.title}
                </h4>
              </div>
              <p className="text-white/70 mb-3 text-sm">{project.desc}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 bg-white/10 rounded-full border border-white/10 text-white/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal Preview */}
        <AnimatePresence>
          {activeProject && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveProject(null)}
            >
              <motion.div
                onClick={(e) => e.stopPropagation()}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-[#0B0F1A] p-6 rounded-2xl shadow-2xl border border-white/10 max-w-xl w-full relative"
              >
                <button
                  className="absolute top-3 right-3 text-white/60 hover:text-white"
                  onClick={() => setActiveProject(null)}
                >
                  ✕
                </button>
                <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                  <span>{activeProject.icon}</span> {activeProject.title}
                </h3>
                <p className="text-white/70 mb-4 text-sm">
                  {activeProject.desc}
                </p>
                {activeProject.video ? (
                  <iframe
                    src={activeProject.video}
                    className="w-full h-64 rounded-xl border border-white/10 mb-4"
                    allow="autoplay"
                  ></iframe>
                ) : (
                  <div className="text-center text-white/50 py-20 border border-dashed border-white/10 rounded-xl mb-4">
                    No preview available
                  </div>
                )}
                <a
                  href={activeProject.link}
                  target="_blank"
                  rel="noreferrer"
                  className={`w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r ${accent} hover:opacity-90 transition-all font-medium`}
                >
                  <ExternalLink className="w-4 h-4" />
                  Visit Project
                </a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
      {/* Contact Me Section */}
<section
  id="contact"
  className="mx-auto max-w-6xl px-4 py-16 border-t border-white/10"
>
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="text-center"
  >
    <h2 className="text-2xl font-semibold mb-4">Let’s Build Something Useful.</h2>
    <p className="text-white/70 max-w-2xl mx-auto mb-8">
      Blending automation with front-end craftsmanship to build smarter, faster, and beautifully intuitive digital experiences. Always excited to collaborate on
      innovation-driven solutions that make an impact.
    </p>

    <div className="flex flex-wrap justify-center gap-4">
      <a
        href="mailto:sahilgulmohur@gmail.com"
        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
      >
        ✉️ Email
      </a>
    
      <a
        href={ME.github}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
      >
        💻 GitHub
      </a>
      <a
        href={ME.linkedin}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
      >
        💼 LinkedIn
      </a>
      <button
  onClick={() => setShowResume(true)}
  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
>
  📄 Résumé
</button>

    </div>
  </motion.div>
</section>
{/* Résumé Modal */}
<AnimatePresence>
  {showResume && (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setShowResume(false)}
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-[#0B0F1A] p-6 rounded-2xl shadow-2xl border border-white/10 max-w-4xl w-full relative"
      >
        <button
          className="absolute top-3 right-3 text-white/60 hover:text-white text-xl"
          onClick={() => setShowResume(false)}
        >
          ✕
        </button>

        <h3 className="text-xl font-semibold mb-4">📄 My Résumé</h3>
        <iframe
          src="https://drive.google.com/file/d/1GDBc847bAkxmub1mf2ak6A6viNQMadnr/preview"
          className="w-full h-[80vh] rounded-xl border border-white/10"
          allow="autoplay"
        ></iframe>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>

{/* Experience Modal */}
<AnimatePresence>
  {showExperience && (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setShowExperience(false)}
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-[#0B0F1A] p-8 rounded-2xl shadow-2xl border border-white/10 max-w-3xl w-full relative"
      >
        <button
          className="absolute top-3 right-3 text-white/60 hover:text-white text-xl"
          onClick={() => setShowExperience(false)}
        >
          ✕
        </button>

        <h3 className="text-2xl font-semibold mb-6 text-center">📈 My Work Journey</h3>

        <div className="space-y-6">
          {/* Josh Technology Group */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="border-l-4 border-[#4F46E5] pl-4"
          >
            <h4 className="text-white font-semibold">Software Automation Engineer</h4>
            <p className="text-white/60 text-sm">Josh Technology Group | Jul 2025 – Present</p>
            <p className="text-white/70 text-sm mt-2">
              Designing and executing automated test frameworks, debugging backend APIs, and
              ensuring QA excellence under Agile and Scrum workflows.
            </p>
          </motion.div>

          {/* PwC */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="border-l-4 border-[#06B6D4] pl-4"
          >
            <h4 className="text-white font-semibold">Cloud Technology Trainee</h4>
            <p className="text-white/60 text-sm">PwC India | Jul 2025 – Sep 2025</p>
            <p className="text-white/70 text-sm mt-2">
              Trained in Salesforce CRM, Cloud automation, and data analytics; contributed to
              scalable workflow optimization.
            </p>
          </motion.div>

          {/* Prodigy InfoTech */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="border-l-4 border-[#7C3AED] pl-4"
          >
            <h4 className="text-white font-semibold">Frontend Developer Intern</h4>
            <p className="text-white/60 text-sm">Prodigy InfoTech | Aug 2024 – Sep 2024</p>
            <p className="text-white/70 text-sm mt-2">
              Developed clean, responsive interfaces using React, CSS, and JavaScript, reducing
              load time by 25% and improving user engagement.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>




      {/* Footer */}
      <footer className="mx-auto max-w-6xl px-4 py-10 text-white/60 text-sm">
        <div className="flex items-center justify-between">
          <div>
            © {new Date().getFullYear()} Sahil Kumar — Built with care.
          </div>
          <div className="flex gap-4">
            <a href={ME.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={ME.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
