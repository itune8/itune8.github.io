"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";
import { RevealAnimation } from "@/components/shared/RevealAnimation";
import { ProfileCard } from "@/components/ui/profile-card";
import { ME } from "@/data";

export function Contact() {
  const handleHireClick = () => {
    window.open(`mailto:${ME.email}?subject=Job Opportunity`, "_blank");
  };

  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <RevealAnimation>
          <div className="text-center mb-12">
            <span className="text-accent font-mono text-lg block mb-4">
              04. What's Next?
            </span>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Get In Touch</h2>
            <p className="text-lg text-white/60 max-w-xl mx-auto">
              I'm currently looking for new opportunities and my inbox is always
              open. Whether you have a question or just want to say hi, I'll try
              my best to get back to you!
            </p>
          </div>
        </RevealAnimation>

        {/* Profile Card */}
        <RevealAnimation delay={0.2}>
          <ProfileCard
            name={ME.name}
            role="Front-End Engineer & QA Specialist"
            email={ME.email}
            avatarSrc="/profile.jpg"
            statusText="Available for work"
            statusColor="bg-green-500"
            glowText="Let's Build Something Amazing Together"
            onHireClick={handleHireClick}
          />
        </RevealAnimation>

        {/* Social Links */}
        <RevealAnimation delay={0.3}>
          <div className="flex items-center justify-center gap-6 mt-16">
            <motion.a
              href={ME.github}
              target="_blank"
              rel="noreferrer"
              className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-accent/50 hover:bg-accent/5 transition-all"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-6 h-6" />
            </motion.a>
            <motion.a
              href={ME.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-accent/50 hover:bg-accent/5 transition-all"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>
            <motion.a
              href={`mailto:${ME.email}`}
              className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-accent/50 hover:bg-accent/5 transition-all"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-6 h-6" />
            </motion.a>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
}
