"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { RevealAnimation } from "@/components/shared/RevealAnimation";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ExperienceTimelineCard } from "@/components/ui/experience-timeline-card";
import { experiences, type Experience } from "@/data";

export function Experience() {
  const [selectedExp, setSelectedExp] = useState<Experience | null>(null);

  return (
    <section id="experience" className="py-24 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <RevealAnimation>
          <div className="flex items-center gap-4 mb-12">
            <span className="text-accent font-mono text-lg">02.</span>
            <h2 className="text-3xl md:text-4xl font-bold">Experience</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-white/10 via-accent/30 to-transparent" />
          </div>
        </RevealAnimation>

        {/* Horizontal Timeline Card */}
        <RevealAnimation delay={0.2}>
          <Card className="bg-white/[0.02] border-white/10 shadow-xl">
            <CardHeader>
              <CardTitle className="text-xl">Career Journey</CardTitle>
              <CardDescription>Click on any role to view details</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-0 right-0 top-4 h-px bg-white/20" />

                {/* Timeline Items */}
                <div className="flex justify-between overflow-x-auto pb-4 gap-2">
                  {experiences.map((exp, index) => {
                    const isFirst = index === 0;
                    return (
                      <motion.button
                        key={exp.id}
                        className="relative pt-10 text-center flex-1 min-w-[120px] sm:min-w-[140px] px-1 sm:px-2 group"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        onClick={() => setSelectedExp(exp)}
                      >
                        {/* Timeline Dot */}
                        <motion.div
                          whileHover={{ scale: 1.3 }}
                          className={`absolute left-1/2 top-2 -translate-x-1/2 h-4 w-4 rounded-full flex items-center justify-center transition-colors ${
                            isFirst
                              ? "bg-accent"
                              : "bg-white/20 group-hover:bg-accent"
                          }`}
                        >
                          <div className={`h-1.5 w-1.5 rounded-full ${isFirst ? "bg-black" : "bg-black/50 group-hover:bg-black"}`} />
                        </motion.div>

                        {/* Duration Badge */}
                        <Badge
                          variant={isFirst ? "default" : "outline"}
                          className={`mb-2 text-[10px] sm:text-[11px] whitespace-nowrap ${
                            isFirst ? "bg-accent hover:bg-accent" : "group-hover:border-accent/50"
                          }`}
                        >
                          {exp.duration.split(" - ")[0]}
                        </Badge>

                        {/* Position */}
                        <h4 className="text-xs sm:text-sm font-medium text-white group-hover:text-accent transition-colors line-clamp-2">
                          {exp.position}
                        </h4>

                        {/* Company */}
                        <p className="text-[10px] sm:text-xs text-accent mt-1">
                          {exp.company}
                        </p>
                      </motion.button>
                    );
                  })}
                </div>
              </div>
            </CardContent>
          </Card>
        </RevealAnimation>
      </div>

      {/* Detail Modal */}
      {selectedExp && (
        <ExperienceTimelineCard
          experience={selectedExp}
          isOpen={!!selectedExp}
          onClose={() => setSelectedExp(null)}
        />
      )}
    </section>
  );
}
