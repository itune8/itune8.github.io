"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin, Calendar, Briefcase, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export interface ExperienceItem {
  id: number;
  company: string;
  position: string;
  type: string;
  duration: string;
  location: string;
  description: string[];
}

interface ExperienceTimelineCardProps {
  experience: ExperienceItem;
  isOpen: boolean;
  onClose: () => void;
}

export function ExperienceTimelineCard({
  experience,
  isOpen,
  onClose,
}: ExperienceTimelineCardProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="w-full max-w-2xl"
          >
            <Card className="bg-black/95 border-white/10 shadow-2xl overflow-hidden">
              <CardHeader className="relative pb-4">
                {/* Close button */}
                <motion.button
                  onClick={onClose}
                  className="absolute top-4 right-4 p-2 rounded-lg hover:bg-white/5 transition-colors z-10"
                  whileHover={{ rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="w-5 h-5 text-white/60" />
                </motion.button>

                {/* Header content */}
                <div className="flex items-start gap-4">
                  <motion.div
                    className="p-3 rounded-xl bg-accent/10 border border-accent/20"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.1, type: "spring" }}
                  >
                    <Briefcase className="w-6 h-6 text-accent" />
                  </motion.div>
                  <div className="flex-1 pr-8">
                    <CardTitle className="text-xl mb-1">{experience.position}</CardTitle>
                    <CardDescription className="text-accent text-base font-medium">
                      {experience.company}
                    </CardDescription>
                  </div>
                </div>

                {/* Meta info */}
                <div className="flex flex-wrap items-center gap-4 mt-4 text-sm text-white/50">
                  <Badge variant="outline" className="text-xs">
                    {experience.type}
                  </Badge>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    {experience.duration}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4" />
                    {experience.location}
                  </span>
                </div>
              </CardHeader>

              <CardContent className="pt-2">
                {/* Simple description list */}
                <ul className="space-y-3">
                  {experience.description.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + index * 0.1 }}
                      className="flex items-start gap-3 text-white/70 text-sm"
                    >
                      <ArrowRight className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
