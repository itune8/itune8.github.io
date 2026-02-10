"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";
import { ME, stats } from "@/data";

export default function Portfolio() {
  const [showResume, setShowResume] = useState(false);
  const [githubContributions, setGithubContributions] = useState(stats.githubContributionsFallback);

  useEffect(() => {
    const fetchGithubStats = async () => {
      try {
        const username = "itune8";
        const response = await fetch(
          `https://github-contributions-api.jogruber.de/v4/${username}`
        );
        const data = await response.json();
        if (data && data.total) {
          const totalContributions = Object.values(data.total).reduce(
            (sum: number, count) => sum + (count as number),
            0
          );
          setGithubContributions(totalContributions);
        }
      } catch {
        // Keep default value on error
      }
    };

    fetchGithubStats();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar onResumeClick={() => setShowResume(true)} />

      <main>
        <Hero githubContributions={githubContributions} />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <Footer />

      {/* Resume Modal */}
      <AnimatePresence>
        {showResume && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowResume(false)}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-black/95 p-6 rounded-2xl shadow-2xl border border-white/10 max-w-5xl w-full max-h-[90vh] overflow-hidden"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold">Resume</h3>
                <motion.button
                  onClick={() => setShowResume(false)}
                  className="p-2 rounded-lg hover:bg-white/5 text-white/60 hover:text-white transition-colors"
                  whileHover={{ rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </motion.button>
              </div>
              <iframe
                src={ME.resume}
                className="w-full h-[calc(90vh-8rem)] rounded-xl border border-white/10"
                allow="autoplay"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
