"use client";

import { motion } from "framer-motion";
import { ME } from "@/data";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Large name */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white/5 select-none">
            {ME.name}
          </h2>
        </motion.div>

        {/* Bottom info */}
        <div className="text-center text-white/40 text-sm space-y-2">
          <p>
            Designed & Built by{" "}
            <span className="text-accent">{ME.name}</span>
          </p>
          <p>© {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
