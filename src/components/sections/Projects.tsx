"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, X, Play } from "lucide-react";
import { RevealAnimation } from "@/components/shared/RevealAnimation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CardStack, type CardStackItem } from "@/components/ui/card-stack";
import { projects, type Project } from "@/data";

function useWindowSize() {
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    function handleResize() {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return size;
}

type ProjectCardItem = CardStackItem & {
  tags: string[];
  video?: string;
  icon: string;
};

export function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const { width } = useWindowSize();

  // Responsive card dimensions
  const isMobile = width > 0 && width < 640;
  const isTablet = width >= 640 && width < 1024;

  const cardWidth = isMobile ? Math.min(width - 48, 320) : isTablet ? 400 : 480;
  const cardHeight = isMobile ? 220 : isTablet ? 260 : 300;
  const overlap = isMobile ? 0.65 : 0.5;
  const spreadDeg = isMobile ? 25 : 40;
  const maxVisible = isMobile ? 3 : 5;

  // Transform projects data for CardStack
  const cardItems: ProjectCardItem[] = projects.map((project) => ({
    id: project.id,
    title: project.title,
    description: project.description,
    imageSrc: project.image,
    href: project.link,
    tag: project.tags[0],
    tags: project.tags,
    video: project.video,
    icon: project.icon,
  }));

  const handleCardChange = (_index: number) => {
    // Optional: track active card
  };

  return (
    <section id="projects" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <RevealAnimation>
          <div className="flex items-center gap-4 mb-12">
            <span className="text-accent font-mono text-lg">03.</span>
            <h2 className="text-3xl md:text-4xl font-bold">Projects</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-white/10 via-accent/30 to-transparent" />
          </div>
        </RevealAnimation>

        {/* Card Stack Carousel */}
        <RevealAnimation delay={0.2}>
          <CardStack
            items={cardItems}
            initialIndex={0}
            autoAdvance
            intervalMs={4000}
            pauseOnHover
            showDots
            cardWidth={cardWidth}
            cardHeight={cardHeight}
            overlap={overlap}
            spreadDeg={spreadDeg}
            maxVisible={maxVisible}
            onChangeIndex={handleCardChange}
            renderCard={(item, { active }) => (
              <ProjectCard
                item={item as ProjectCardItem}
                active={active}
                onViewDetails={() => {
                  const project = projects.find((p) => p.id === item.id);
                  if (project) setActiveProject(project);
                }}
              />
            )}
          />
        </RevealAnimation>

        {/* View All Projects hint */}
        <RevealAnimation delay={0.3}>
          <p className="text-center text-white/40 text-sm mt-8">
            Swipe or use arrow keys to navigate • Click card for details
          </p>
        </RevealAnimation>

        {/* Project Modal */}
        <AnimatePresence>
          {activeProject && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveProject(null)}
            >
              <motion.div
                onClick={(e) => e.stopPropagation()}
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="bg-black/95 p-8 rounded-2xl shadow-2xl border border-white/10 max-w-3xl w-full max-h-[90vh] overflow-y-auto"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <span className="text-4xl">{activeProject.icon}</span>
                    <h3 className="text-2xl font-bold">{activeProject.title}</h3>
                  </div>
                  <motion.button
                    onClick={() => setActiveProject(null)}
                    className="p-2 rounded-lg hover:bg-white/5 transition-colors"
                    whileHover={{ rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.button>
                </div>

                <p className="text-white/70 mb-6 leading-relaxed">
                  {activeProject.description}
                </p>

                {activeProject.video && (
                  <div className="mb-6 rounded-xl overflow-hidden border border-white/10">
                    <iframe
                      src={activeProject.video}
                      className="w-full aspect-video"
                      allow="autoplay"
                    />
                  </div>
                )}

                <div className="flex flex-wrap gap-2 mb-6">
                  {activeProject.tags.map((tag) => (
                    <Badge key={tag}>{tag}</Badge>
                  ))}
                </div>

                <Button asChild className="w-full">
                  <a
                    href={activeProject.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <ExternalLink className="w-5 h-5" />
                    View Project
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

function ProjectCard({
  item,
  active,
  onViewDetails,
}: {
  item: ProjectCardItem;
  active: boolean;
  onViewDetails: () => void;
}) {
  return (
    <div
      className="relative h-full w-full bg-black group"
      onClick={(e) => {
        if (active) {
          e.stopPropagation();
          onViewDetails();
        }
      }}
    >
      {/* Image */}
      <div className="absolute inset-0">
        {item.imageSrc ? (
          <img
            src={item.imageSrc}
            alt={item.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            draggable={false}
            loading="eager"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-accent/20 to-accent/5">
            <span className="text-6xl">{item.icon}</span>
          </div>
        )}
      </div>

      {/* Gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

      {/* Video indicator */}
      {item.video && (
        <div className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10">
          <div className="p-1.5 sm:p-2 rounded-lg bg-black/50 backdrop-blur-sm text-accent">
            <Play className="w-3 h-3 sm:w-4 sm:h-4" />
          </div>
        </div>
      )}

      {/* Tag */}
      <div className="absolute top-2 left-2 sm:top-4 sm:left-4 z-10">
        <span className="px-2 py-0.5 sm:px-3 sm:py-1 text-[10px] sm:text-xs font-medium bg-accent text-white rounded-full">
          {item.tag}
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-end p-3 sm:p-5">
        <div className="flex items-center gap-1.5 sm:gap-2 mb-0.5 sm:mb-1">
          <span className="text-lg sm:text-2xl">{item.icon}</span>
          <h3 className="text-base sm:text-xl font-bold text-white truncate">{item.title}</h3>
        </div>
        {item.description && (
          <p className="mt-0.5 sm:mt-1 line-clamp-2 text-xs sm:text-sm text-white/70">
            {item.description}
          </p>
        )}

        {/* Tags - hidden on very small screens */}
        <div className="hidden sm:flex flex-wrap gap-1.5 mt-2 sm:mt-3">
          {item.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 text-xs bg-white/10 text-white/80 rounded"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* View details hint on active */}
        {active && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-2 sm:mt-3 text-[10px] sm:text-xs text-accent font-medium"
          >
            Tap to view details →
          </motion.div>
        )}
      </div>
    </div>
  );
}
