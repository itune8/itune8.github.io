"use client";

import { useEffect, useRef, useState, Suspense } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ME, typewriterRoles } from "@/data";
import dynamic from "next/dynamic";

const Scene = dynamic(
  () => import("@/components/ui/void-hero").then((mod) => mod.Scene),
  { ssr: false }
);

function Typewriter() {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const current = typewriterRoles[index];
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
          setIndex((i) => (i + 1) % typewriterRoles.length);
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
      {typewriterRoles[index].substring(0, subIndex)}
      <span
        className={`inline-block w-[3px] h-8 md:h-10 bg-accent ml-1 transition-opacity ${
          blink ? "opacity-100" : "opacity-0"
        }`}
      />
    </span>
  );
}

interface HeroProps {
  githubContributions: number;
}

export function Hero({ githubContributions }: HeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch(() => {
        const playOnInteraction = () => {
          video.play();
          document.removeEventListener("touchstart", playOnInteraction);
          document.removeEventListener("click", playOnInteraction);
        };
        document.addEventListener("touchstart", playOnInteraction);
        document.addEventListener("click", playOnInteraction);
      });
    }
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen w-full relative bg-black overflow-hidden"
    >
      {/* 3D Background - Full screen, subtle */}
      <div className="absolute inset-0 z-0">
        <Suspense
          fallback={
            <div className="w-full h-full bg-black flex items-center justify-center">
              <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin" />
            </div>
          }
        >
          <Scene />
        </Suspense>
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/60 z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30 z-10 pointer-events-none" />

      {/* Content */}
      <div className="relative z-20 min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-20 pt-20">
        <div className="max-w-7xl mx-auto w-full">
          {/* Main content grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Text content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center lg:text-left"
            >
              {/* Available badge */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mb-6 flex justify-center lg:justify-start"
              >
                <Badge variant="success" className="gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  Available for work
                </Badge>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4"
              >
                {ME.name}
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-xl md:text-2xl lg:text-3xl font-light text-white/70 mb-6 h-10 flex justify-center lg:justify-start"
              >
                <Typewriter />
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-base text-white/50 mb-8 max-w-md mx-auto lg:mx-0 font-light leading-relaxed"
              >
                {ME.tagline}
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="flex flex-wrap gap-4 mb-8 justify-center lg:justify-start"
              >
                <Button onClick={() => scrollToSection("projects")}>
                  View Work
                </Button>
                <Button variant="outline" onClick={() => scrollToSection("contact")}>
                  Contact
                </Button>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex flex-wrap gap-3 justify-center lg:justify-start"
              >
                <a
                  href={ME.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:border-green-500/50 hover:bg-green-500/5 transition-all text-sm"
                >
                  <Github className="w-4 h-4 text-green-400" />
                  <span className="text-white/70">
                    <span className="font-semibold text-green-400">{githubContributions}+</span> commits
                  </span>
                </a>

                <a
                  href={ME.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:border-blue-500/50 hover:bg-blue-500/5 transition-all text-sm"
                >
                  <Linkedin className="w-4 h-4 text-blue-400" />
                  <span className="text-white/70">
                    <span className="font-semibold text-blue-400">5K+</span> impressions
                  </span>
                </a>
              </motion.div>
            </motion.div>

            {/* Right - Video */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                {/* Glowing ring */}
                <motion.div
                  className="absolute -inset-4 rounded-full bg-gradient-to-r from-accent/50 via-accent/20 to-accent/50 blur-2xl"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                />

                {/* Video container */}
                <motion.div
                  className="relative w-full h-full rounded-full overflow-hidden"
                  style={{
                    border: "4px solid transparent",
                    backgroundImage:
                      "linear-gradient(#000000, #000000), linear-gradient(90deg, #ff6b35, #ff8c42, #ff6b35)",
                    backgroundOrigin: "border-box",
                    backgroundClip: "padding-box, border-box",
                    backgroundSize: "200% 200%",
                  }}
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
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
                  >
                    <source src="/Profile_vid.mp4" type="video/mp4" />
                  </video>
                </motion.div>

                {/* Experience badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  className="absolute -bottom-2 -right-2 bg-black border-2 border-accent/40 rounded-xl px-4 py-2 shadow-xl"
                >
                  <div className="text-accent font-bold text-lg">1+ Yrs</div>
                  <div className="text-white/50 text-xs">Experience</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.button
            onClick={() => scrollToSection("about")}
            className="p-2 rounded-full border border-white/20 hover:border-accent/50 transition-colors"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown className="w-4 h-4 text-white/50" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
