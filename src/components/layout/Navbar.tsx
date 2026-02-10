"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ME } from "@/data";

interface NavbarProps {
  onResumeClick: () => void;
}

const navItems = ["About", "Experience", "Projects", "Contact"];

export function Navbar({ onResumeClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ["home", "about", "experience", "projects", "contact"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId.toLowerCase());
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.165, 0.84, 0.44, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-black/80 backdrop-blur-xl border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.button
              onClick={() => scrollToSection("home")}
              className="text-2xl font-bold text-accent"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              SK
            </motion.button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <motion.button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`text-sm transition-colors relative ${
                    activeSection === item.toLowerCase()
                      ? "text-white font-medium"
                      : "text-white/60 hover:text-white"
                  }`}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                  {activeSection === item.toLowerCase() && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent"
                      layoutId="activeNav"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-3">
              <motion.a
                href={ME.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg hover:bg-white/5 transition-colors hidden sm:block"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-5 h-5 text-white/70 hover:text-accent transition-colors" />
              </motion.a>
              <motion.a
                href={ME.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg hover:bg-white/5 transition-colors hidden sm:block"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin className="w-5 h-5 text-white/70 hover:text-accent transition-colors" />
              </motion.a>
              <Button onClick={onResumeClick} size="sm" className="hidden sm:flex">
                Resume
              </Button>

              {/* Mobile Menu Button */}
              <motion.button
                className="p-2 rounded-lg hover:bg-white/5 md:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                whileTap={{ scale: 0.95 }}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[72px] left-0 right-0 z-40 bg-black/95 backdrop-blur-xl border-b border-white/10 md:hidden"
          >
            <div className="px-6 py-4 space-y-4">
              {navItems.map((item) => (
                <motion.button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`block w-full text-left py-2 text-lg ${
                    activeSection === item.toLowerCase()
                      ? "text-accent font-medium"
                      : "text-white/70"
                  }`}
                  whileTap={{ scale: 0.98 }}
                >
                  {item}
                </motion.button>
              ))}
              <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                <a
                  href={ME.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg hover:bg-white/5"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={ME.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg hover:bg-white/5"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <Button onClick={onResumeClick} size="sm" className="ml-auto">
                  Resume
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
