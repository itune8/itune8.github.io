import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, FileDown, Github, Linkedin, ExternalLink, Mail, ArrowRight, Code2, Briefcase, Award, CheckCircle } from "lucide-react";

const accent = "from-[#7C3AED] via-[#4F46E5] to-[#06B6D4]";

function FloatingParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
}

function Typewriter() {
  const roles = [
    "Front-End Engineer",
    "Test Automation Engineer",
    "Adept Team Player"
  ];

  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const current = roles[index];
    const speed = reverse ? 50 : 100;
    const timeout = setTimeout(() => {
      setSubIndex((prev) => {
        if (!reverse && prev < current.length) return prev + 1;
        else if (!reverse && prev === current.length) {
          setTimeout(() => setReverse(true), 1500);
          return prev;
        } else if (reverse && prev > 0) return prev - 1;
        else {
          setReverse(false);
          setIndex((i) => (i + 1) % roles.length);
          return 0;
        }
      });
    }, speed);
    return () => clearTimeout(timeout);
  }, [subIndex, reverse, index]);

  useEffect(() => {
    const blinkInterval = setInterval(() => setBlink((b) => !b), 530);
    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <span className="inline-flex items-center">
      {roles[index].substring(0, subIndex)}
      <span
        className={`inline-block w-[3px] h-12 bg-cyan-400 ml-1 transition-opacity ${
          blink ? "opacity-100" : "opacity-0"
        }`}
      ></span>
    </span>
  );
}

const ME = {
  name: "Sahil Kumar",
  role: "Front-End Engineer & QA Specialist",
  tagline: "Building exceptional digital experiences with precision and creativity",
  location: "Gurugram, Haryana",
  email: "sahilgulmohur@gmail.com",
  github: "https://github.com/itune8",
  linkedin: "https://www.linkedin.com/in/sahils90/",
  resume: "https://drive.google.com/file/d/1uXfHXF4NcJq1R5li8U_gxunQOLxZZYWw/preview",
};

const experiences = [
  {
    id: 1,
    company: "HyperBrain Labs",
    position: "FrontEnd Developer",
    type: "Internship",
    duration: "Oct 2025 - Present",
    location: "Bengaluru",
    description: [
      "Developed and maintained responsive front-end interfaces using React, JavaScript, and CSS improving overall UI performance by 30%",
      "Collaborated with backend teams to integrate APIs, enhancing data-loading efficiency by 25%",
      "Implemented UI/UX enhancements across the SaaS platform built with Next.js and Turborepo, increasing user engagement and reducing bounce rates by 20%"
    ],
    color: "from-purple-500 to-pink-500"
  },
  {
    id: 2,
    company: "Josh Technology Group",
    position: "Software Test Engineer",
    type: "Internship",
    duration: "Jul 2025 - Nov 2025",
    location: "Gurugram",
    description: [
      "Tested React-based web applications to ensure UI functionality and performance",
      "Created 200+ test cases for frontend features including forms, buttons, and API integrations",
      "Built automated test scripts that reduced testing time by 40%",
      "Worked in Agile sprints to report bugs and helped developers fix issues quickly, reducing production bugs by 30%"
    ],
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: 3,
    company: "PwC",
    position: "Salesforce Cloud Trainee",
    type: "Apprentenship",
    duration: "Jul 2025 - Sep 2025",
    location: "India",
    description: [
      "Trained in Cloud technologies, Salesforce CRM, automation, and data analytics",
      "Assisted in developing cloud-based solutions and automation workflows"
    ],
    color: "from-orange-500 to-red-500"
  },
  {
    id: 4,
    company: "Showera",
    position: "Web Developer",
    type: "Internship",
    duration: "Nov 2024 - Feb 2025",
    location: "Remote",
    description: [
      "Designed and implemented backend architecture using the MVC design pattern, resulting in a 25% code maintainability improvement",
      "Developed RESTful APIs for movie ticket booking and scanning, leading to a 30% faster booking process",
      "Created unified APIs improving cross-platform performance by 20%"
    ],
    color: "from-green-500 to-emerald-500"
  },
  {
    id: 5,
    company: "TailUX",
    position: "FrontEnd Developer",
    type: "Internship",
    duration: "Mar 2024 - Jun 2024",
    location: "Remote",
    description: [
      "Developed frontend for e-commerce platform using React and JavaScript",
      "Built product listing pages, shopping cart, and checkout flow with React components",
      "Connected frontend with backend APIs to display products, manage cart, and process orders",
      "Created responsive layouts using CSS3 and HTML5 for better mobile experience"
    ],
    color: "from-yellow-500 to-orange-500"
  }
];

const projects = [
  {
    id: 1,
    title: "AllowBox",
    description: "Led 100% of front-end development for a scalable multi-tenant SaaS platform using React, Next.js, and Turborepo. Improved UI performance by ~40% and enhanced workflows across 4 major panels resulting in ~30% faster navigation.",
    tags: ["React", "Next.js", "Turborepo", "SaaS"],
    icon: "🏫",
    link: "https://github.com/codewprincee/allow-box-frontend",
    featured: true
  },
  {
    id: 2,
    title: "Stutor",
    description: "Peer-to-peer student learning platform with sessions, reviews, smart matching, and crisp UI for seamless educational experiences.",
    tags: ["React", "Node.js", "PostgreSQL"],
    icon: "🎓",
    video: "https://drive.google.com/file/d/1_2AF-FgEk8S0ZbrVo7v8mBoRIZyEgNez/preview",
    link: "https://stutor.vercel.app",
    featured: true
  },
  {
    id: 3,
    title: "LitterLift",
    description: "Smart IoT solution with camera-enabled bin that captures litter, uploads to dashboard, and coordinates municipal cleanup using Google APIs.",
    tags: ["IoT", "Computer Vision", "Maps API"],
    icon: "🗑️",
    video: "https://drive.google.com/file/d/152vUByZILcnee_o-SyZ206mfWms-zVfu/preview",
    link: "https://litter-lift.vercel.app/",
    featured: false
  },
  {
    id: 4,
    title: "Banking Management",
    description: "Comprehensive banking management system handling user accounts, transactions, and admin analytics with secure authentication.",
    tags: ["Java", "OOP", "MySQL"],
    icon: "🏦",
    link: "http://banking-management.gt.tc/",
    featured: false
  }
];

const skills = {
  "Frontend": ["React", "Next.js", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Framer Motion"],
  "Backend": ["Node.js", "REST APIs", "MVC Pattern"],
  "Testing & QA": ["Selenium", "Test Automation", "Jest", "Postman", "API Testing"],
  "Tools & Others": ["Git", "GitHub", "Jira", "Agile/Scrum", "Turborepo", "Vite"]
};

export default function Portfolio() {
  const [activeProject, setActiveProject] = useState(null);
  const [showResume, setShowResume] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [githubContributions, setGithubContributions] = useState(477);
  const videoRef = React.useRef(null);

  useEffect(() => {
    // Ensure video plays on mount and after any pause
    const video = videoRef.current;
    if (video) {
      const playVideo = () => {
        video.play().catch((error) => {
          console.log('Autoplay prevented:', error);
        });
      };

      // Try to play immediately
      playVideo();
      
      // Force replay if video pauses
      video.addEventListener('pause', playVideo);
      video.addEventListener('ended', playVideo);
      
      // Also try on user interaction
      const handleInteraction = () => {
        playVideo();
        document.removeEventListener('touchstart', handleInteraction);
        document.removeEventListener('click', handleInteraction);
      };
      
      document.addEventListener('touchstart', handleInteraction);
      document.addEventListener('click', handleInteraction);

      return () => {
        video.removeEventListener('pause', playVideo);
        video.removeEventListener('ended', playVideo);
        document.removeEventListener('touchstart', handleInteraction);
        document.removeEventListener('click', handleInteraction);
      };
    }
  }, []);

  useEffect(() => {
    // Fetch GitHub contributions for the entire year
    const fetchGithubStats = async () => {
      try {
        // Using GitHub's contribution graph scraper
        const username = 'itune8';
        const year = new Date().getFullYear();
        
        // Fetch from GitHub's contribution SVG endpoint
        const response = await fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=${year}`);
        const data = await response.json();
        
        if (data && data.total && data.total[year]) {
          setGithubContributions(data.total[year]);
        } else {
          // Fallback to 461 if API fails
          setGithubContributions(461);
        }
      } catch {
        console.log('Using default GitHub stats');
        setGithubContributions(461);
      }
    };

    fetchGithubStats();
    // Refresh every 30 minutes
    const interval = setInterval(fetchGithubStats, 30 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0B0F1A] text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0B0F1A]/90 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"
            >
              SK
            </motion.div>
            
            <div className="hidden md:flex items-center gap-8">
              {['Home', 'About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
                <motion.button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm transition-colors relative ${
                    activeSection === item.toLowerCase()
                      ? 'text-white font-semibold'
                      : 'text-white/60 hover:text-white'
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                  {activeSection === item.toLowerCase() && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500"
                      layoutId="activeSection"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <motion.a 
                href={ME.github} 
                target="_blank" 
                rel="noreferrer" 
                className="p-2 rounded-lg hover:bg-white/5 transition-all"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a 
                href={ME.linkedin} 
                target="_blank" 
                rel="noreferrer" 
                className="p-2 rounded-lg hover:bg-white/5 transition-all"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.button
                onClick={() => setShowResume(true)}
                className={`px-4 py-2 rounded-lg bg-gradient-to-r ${accent} text-sm font-medium relative overflow-hidden`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  boxShadow: [
                    '0 0 0 0 rgba(124, 58, 237, 0)',
                    '0 0 0 10px rgba(124, 58, 237, 0)',
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              >
                Resume
              </motion.button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">
        {/* Animated background gradient */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-cyan-900/20"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          style={{ backgroundSize: '200% 200%' }}
        />
        <FloatingParticles />
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-cyan-400 font-mono mb-4"
            >
              Hi, my name is
            </motion.p>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold mb-4 relative"
            >
              <motion.span
                className="bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                style={{ backgroundSize: '200% auto' }}
              >
                {ME.name}
              </motion.span>
            </motion.h1>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-3xl md:text-5xl font-bold text-white/80 mb-6"
            >
              <Typewriter />
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-white/70 mb-8 max-w-lg"
            >
              {ME.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-2 text-white/60 mb-8"
            >
              <MapPin className="w-4 h-4" />
              <span>{ME.location}</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex gap-4"
            >
              <motion.button
                onClick={() => scrollToSection('projects')}
                className={`px-6 py-3 rounded-lg bg-gradient-to-r ${accent} font-medium transition-all flex items-center gap-2 relative overflow-hidden group`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">View My Work</span>
                <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.5 }}
                />
              </motion.button>
              <motion.button
                onClick={() => scrollToSection('contact')}
                className="px-6 py-3 rounded-lg border border-white/20 hover:bg-white/5 transition-all relative overflow-hidden group"
                whileHover={{ scale: 1.05, borderColor: 'rgba(255,255,255,0.4)' }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.button>
            </motion.div>

            {/* GitHub & LinkedIn Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="mt-8"
            >
              <div className="flex flex-col gap-2">
                <motion.div 
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm cursor-pointer"
                  whileHover={{ 
                    scale: 1.05,
                    borderColor: 'rgba(74, 222, 128, 0.5)',
                    boxShadow: '0 0 20px rgba(74, 222, 128, 0.3)'
                  }}
                >
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  >
                    <Github className="w-4 h-4 text-green-400" />
                  </motion.div>
                  <span className="text-sm text-white/70">
                    <span className="font-semibold text-green-400">{githubContributions}</span> contributions this year
                  </span>
                </motion.div>
                
                <motion.div 
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm cursor-pointer"
                  whileHover={{ 
                    scale: 1.05,
                    borderColor: 'rgba(96, 165, 250, 0.5)',
                    boxShadow: '0 0 20px rgba(96, 165, 250, 0.3)'
                  }}
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Linkedin className="w-4 h-4 text-blue-400" />
                  </motion.div>
                  <span className="text-sm text-white/70">
                    <span className="font-semibold text-blue-400">5K+</span> post impressions
                  </span>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-xl mx-auto">
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 blur-3xl opacity-20"
                animate={{
                  rotate: 360,
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
                  scale: { duration: 4, repeat: Infinity },
                }}
              />
              <motion.div 
                className="relative aspect-square overflow-hidden shadow-2xl rounded-2xl bg-black"
                style={{
                  border: '4px solid transparent',
                  backgroundImage: 'linear-gradient(#0B0F1A, #0B0F1A), linear-gradient(90deg, #7C3AED, #06B6D4, #7C3AED)',
                  backgroundOrigin: 'border-box',
                  backgroundClip: 'padding-box, border-box',
                }}
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              >
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  webkit-playsinline="true"
                  x5-playsinline="true"
                  style={{ pointerEvents: 'none' }}
                >
                  <source src="/Profile_vid.mov" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              {/* Available for Work Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute top-4 left-4 bg-white border-2 border-gray-200 rounded-lg px-4 py-2 shadow-xl flex items-center gap-2"
              >
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-black font-medium text-sm">Available for work</span>
              </motion.div>
              {/* Experience Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute bottom-8 right-0 bg-black border-2 border-white/20 rounded-lg px-4 py-2 shadow-xl"
              >
                <div className="text-white font-bold text-sm">1+ Years</div>
                <div className="text-white/60 text-xs">Experience</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center px-6 py-20">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-12 flex items-center gap-4">
              <motion.span 
                className="text-cyan-400 font-mono text-2xl"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.6 }}
              >01.</motion.span>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >About Me</motion.span>
              <motion.div 
                className="flex-1 h-px bg-gradient-to-r from-white/10 via-cyan-500/50 to-transparent ml-4"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                style={{ transformOrigin: 'left' }}
              />
            </h2>

            <div className="grid md:grid-cols-2 gap-12">
              <motion.div 
                className="space-y-4 text-white/70 leading-relaxed"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <motion.p
                  whileHover={{ x: 5 }}
                  className="p-4 rounded-lg hover:bg-white/5 transition-colors cursor-default"
                >
                  I'm a passionate Front-End Engineer with a keen eye for detail and a love for creating 
                  seamless user experiences. Currently working at <motion.span 
                    className="text-purple-400 font-semibold"
                    whileHover={{ scale: 1.05, display: 'inline-block' }}
                  >HyperBrain Labs</motion.span>, 
                  I specialize in building responsive, performant web applications using modern technologies.
                </motion.p>
                <motion.p
                  whileHover={{ x: 5 }}
                  className="p-4 rounded-lg hover:bg-white/5 transition-colors cursor-default"
                >
                  My journey in tech has been diverse - from developing full-stack applications to ensuring 
                  quality through rigorous testing at <motion.span 
                    className="text-blue-400 font-semibold"
                    whileHover={{ scale: 1.05, display: 'inline-block' }}
                  >Josh Technology Group</motion.span>. 
                  This unique combination gives me a holistic view of the development lifecycle.
                </motion.p>
                <motion.p
                  whileHover={{ x: 5 }}
                  className="p-4 rounded-lg hover:bg-white/5 transition-colors cursor-default"
                >
                  I'm particularly interested in SaaS platforms, performance optimization, and creating 
                  intuitive user interfaces that solve real-world problems.
                </motion.p>
              </motion.div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Code2, label: "Clean Code", value: "Always", subtitle: "" },
                  { icon: Briefcase, label: "Projects", value: "5+", subtitle: "" },
                  { icon: Award, label: "Hackathons", value: "3× Winner", subtitle: "1× Runner-up Ideathon" },
                  { icon: CheckCircle, label: "Test Suites", value: "100+", subtitle: "Manual & Automated" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ 
                      scale: 1.05, 
                      borderColor: 'rgba(6, 182, 212, 0.5)',
                      boxShadow: '0 0 20px rgba(6, 182, 212, 0.3)'
                    }}
                    className="p-6 rounded-xl bg-white/5 border border-white/10 transition-all cursor-pointer group"
                  >
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.6 }}
                    >
                      <stat.icon className="w-8 h-8 text-cyan-400 mb-3" />
                    </motion.div>
                    <motion.div 
                      className="text-2xl font-bold mb-1"
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.1 }}
                    >{stat.value}</motion.div>
                    <div className="text-sm text-white/60">{stat.label}</div>
                    {stat.subtitle && (
                      <div className="text-xs text-white/40 mt-1">{stat.subtitle}</div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="min-h-screen flex items-center px-6 py-20">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-12 flex items-center gap-4">
              <motion.span 
                className="text-cyan-400 font-mono text-2xl"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.6 }}
              >02.</motion.span>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >Work Experience</motion.span>
              <motion.div 
                className="flex-1 h-px bg-gradient-to-r from-white/10 via-cyan-500/50 to-transparent ml-4"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                style={{ transformOrigin: 'left' }}
              />
            </h2>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, type: 'spring', stiffness: 100 }}
                  whileHover={{ x: 10, transition: { duration: 0.3 } }}
                  className="relative pl-8 border-l-2 border-white/10 hover:border-cyan-400/50 transition-all group"
                >
                  <motion.div 
                    className={`absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-gradient-to-r ${exp.color}`}
                    whileHover={{ scale: 1.5 }}
                    animate={{ 
                      boxShadow: [
                        '0 0 0 0 rgba(124, 58, 237, 0.7)',
                        '0 0 0 10px rgba(124, 58, 237, 0)',
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  ></motion.div>
                  
                  <div className="mb-2 flex flex-wrap items-center gap-3">
                    <h3 className="text-2xl font-bold">{exp.position}</h3>
                    <span className="px-3 py-1 rounded-full bg-white/5 text-xs text-cyan-400 border border-white/10">
                      {exp.type}
                    </span>
                  </div>
                  
                  <div className="text-lg text-purple-400 mb-2">{exp.company}</div>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-white/60 mb-4">
                    <span>{exp.duration}</span>
                    <span>•</span>
                    <span>{exp.location}</span>
                  </div>
                  
                  <ul className="space-y-2 text-white/70">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <ArrowRight className="w-4 h-4 text-cyan-400 mt-1 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex items-center px-6 py-20">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-12 flex items-center gap-4">
              <motion.span 
                className="text-cyan-400 font-mono text-2xl"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.6 }}
              >03.</motion.span>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >Featured Projects</motion.span>
              <motion.div 
                className="flex-1 h-px bg-gradient-to-r from-white/10 via-cyan-500/50 to-transparent ml-4"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                style={{ transformOrigin: 'left' }}
              />
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setActiveProject(project)}
                  whileHover={{ 
                    y: -10,
                    scale: 1.02,
                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
                    borderColor: 'rgba(6, 182, 212, 0.5)'
                  }}
                  className={`group relative p-6 rounded-2xl bg-white/5 border border-white/10 transition-all cursor-pointer ${
                    project.featured ? 'md:col-span-2' : ''
                  }`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <motion.div 
                      className="text-4xl"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >{project.icon}</motion.div>
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 45 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ExternalLink className="w-5 h-5 text-white/40 group-hover:text-cyan-400 transition-colors" />
                    </motion.div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-white/70 mb-4 line-clamp-3">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <motion.span
                        key={i}
                        className="px-3 py-1 rounded-full bg-white/5 text-xs text-cyan-400 border border-white/10 cursor-pointer"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                        whileHover={{ 
                          scale: 1.15,
                          rotateY: 180,
                          backgroundColor: 'rgba(6, 182, 212, 0.3)',
                          borderColor: 'rgba(6, 182, 212, 0.8)'
                        }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen flex items-center px-6 py-20">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-12 flex items-center gap-4">
              <motion.span 
                className="text-cyan-400 font-mono text-2xl"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.6 }}
              >04.</motion.span>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >Skills & Technologies</motion.span>
              <motion.div 
                className="flex-1 h-px bg-gradient-to-r from-white/10 via-cyan-500/50 to-transparent ml-4"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                style={{ transformOrigin: 'left' }}
              />
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {Object.entries(skills).map(([category, items], index) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ 
                    scale: 1.03,
                    borderColor: 'rgba(6, 182, 212, 0.4)',
                    boxShadow: '0 10px 30px rgba(6, 182, 212, 0.2)'
                  }}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10"
                >
                  <h3 className="text-xl font-bold mb-4 text-cyan-400">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                        whileHover={{ 
                          scale: 1.1, 
                          backgroundColor: 'rgba(6, 182, 212, 0.2)',
                          borderColor: 'rgba(6, 182, 212, 0.8)'
                        }}
                        className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm transition-all cursor-pointer"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center px-6 py-20">
        <div className="max-w-3xl mx-auto w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-cyan-400 font-mono mb-4">05. What's Next?</p>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Get In Touch</h2>
            <p className="text-lg text-white/70 mb-12 max-w-xl mx-auto">
              I'm currently looking for new opportunities and my inbox is always open. 
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <motion.a
                href={`mailto:${ME.email}`}
                className="px-8 py-4 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 font-medium transition-all flex items-center gap-2 relative overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-5 h-5 relative z-10" />
                <span className="relative z-10">Send Email</span>
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.5 }}
                />
              </motion.a>
              <motion.a
                href={ME.linkedin}
                target="_blank"
                rel="noreferrer"
                className="px-8 py-4 rounded-lg border border-white/20 hover:bg-white/5 transition-all flex items-center gap-2"
                whileHover={{ scale: 1.05, borderColor: 'rgba(255,255,255,0.4)' }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </motion.a>
            </div>

            <div className="flex items-center justify-center gap-6">
              <a href={ME.github} target="_blank" rel="noreferrer" className="text-white/60 hover:text-cyan-400 transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href={ME.linkedin} target="_blank" rel="noreferrer" className="text-white/60 hover:text-cyan-400 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-6">
        <div className="max-w-7xl mx-auto text-center text-white/60 text-sm">
          <p>Designed & Built by {ME.name}</p>
          <p className="mt-2">© {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </footer>

      {/* Resume Modal */}
      <AnimatePresence>
        {showResume && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
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
              className="bg-[#0B0F1A] p-6 rounded-2xl shadow-2xl border border-white/10 max-w-5xl w-full max-h-[90vh] overflow-hidden"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold">Resume</h3>
                <button
                  onClick={() => setShowResume(false)}
                  className="text-white/60 hover:text-white text-2xl"
                >
                  ✕
                </button>
              </div>
              <iframe
                src={ME.resume}
                className="w-full h-[calc(90vh-8rem)] rounded-xl border border-white/10"
                allow="autoplay"
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Project Modal */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
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
              className="bg-[#0B0F1A] p-8 rounded-2xl shadow-2xl border border-white/10 max-w-3xl w-full"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-3">
                  <span className="text-4xl">{activeProject.icon}</span>
                  <h3 className="text-3xl font-bold">{activeProject.title}</h3>
                </div>
                <button
                  onClick={() => setActiveProject(null)}
                  className="text-white/60 hover:text-white text-2xl"
                >
                  ✕
                </button>
              </div>

              <p className="text-white/70 mb-6 leading-relaxed">{activeProject.description}</p>

              {activeProject.video && (
                <iframe
                  src={activeProject.video}
                  className="w-full h-64 rounded-xl border border-white/10 mb-6"
                  allow="autoplay"
                ></iframe>
              )}

              <div className="flex flex-wrap gap-2 mb-6">
                {activeProject.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-cyan-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={activeProject.link}
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-cyan-500 hover:opacity-90 transition-all font-medium"
              >
                <ExternalLink className="w-5 h-5" />
                View Project
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
₹    </div>
  );
}
