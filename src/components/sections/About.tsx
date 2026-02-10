"use client";

import { motion } from "framer-motion";
import { Code2, Briefcase, Award, CheckCircle } from "lucide-react";
import { RevealAnimation, StaggerContainer, StaggerItem } from "@/components/shared/RevealAnimation";
import { Badge } from "@/components/ui/badge";
import { skills, stats } from "@/data";

const statCards = [
  { icon: Code2, label: "Clean Code", value: "Always" },
  { icon: Briefcase, label: "Projects", value: stats.projectsCount },
  { icon: Award, label: "Hackathons", value: stats.hackathons },
  { icon: CheckCircle, label: "Test Suites", value: stats.testSuites },
];

export function About() {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <RevealAnimation>
          <div className="flex items-center gap-4 mb-12">
            <span className="text-accent font-mono text-lg">01.</span>
            <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-white/10 via-accent/30 to-transparent" />
          </div>
        </RevealAnimation>

        {/* Bio */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <RevealAnimation delay={0.1}>
            <div className="space-y-4 text-white/70 leading-relaxed">
              <p>
                I'm a passionate Front-End Engineer with a keen eye for detail and a love for creating
                seamless user experiences. Currently working at{" "}
                <span className="text-accent font-medium">Blend (Dubai - Remote)</span>, I specialize in
                building responsive, performant web applications using modern technologies.
              </p>
              <p>
                My journey in tech has been diverse - from developing full-stack applications to ensuring
                quality through rigorous testing. Previously at{" "}
                <span className="text-accent font-medium">HyperBrain Labs</span> and{" "}
                <span className="text-accent font-medium">Josh Technology Group</span>, this unique
                combination gives me a holistic view of the development lifecycle.
              </p>
              <p>
                I'm particularly interested in SaaS platforms, performance optimization, and creating
                intuitive user interfaces that solve real-world problems.
              </p>
            </div>
          </RevealAnimation>

          {/* Stats Cards - Right side */}
          <RevealAnimation delay={0.2}>
            <StaggerContainer className="grid grid-cols-2 gap-4" staggerDelay={0.1}>
              {statCards.map((stat, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    className="p-5 rounded-xl bg-white/5 border border-white/10 hover:border-accent/30 transition-all group"
                    whileHover={{ y: -4 }}
                  >
                    <stat.icon className="w-6 h-6 text-accent mb-3 group-hover:scale-110 transition-transform" />
                    <div className="text-2xl font-bold mb-1 group-hover:text-accent transition-colors">
                      {stat.value}
                    </div>
                    <div className="text-xs text-white/50">{stat.label}</div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </RevealAnimation>
        </div>

        {/* Skills */}
        <RevealAnimation delay={0.3}>
          <h3 className="text-xl font-semibold mb-6">Technologies I work with</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {Object.entries(skills).map(([category, items]) => (
              <motion.div
                key={category}
                className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-accent/20 transition-colors"
                whileHover={{ y: -2 }}
              >
                <h4 className="text-accent font-medium mb-3 text-sm">{category}</h4>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
}
