"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { education } from "@/data/resume";
import { GraduationCap, Calendar } from "lucide-react";

export default function Education() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="education" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-sm font-medium text-indigo-400 tracking-widest uppercase mb-3">
            Academic
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white section-heading">
            Education
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <motion.div
            className="absolute left-6 top-0 w-px bg-gradient-to-b from-indigo-500/50 via-violet-500/30 to-transparent"
            initial={{ height: 0 }}
            animate={isInView ? { height: "100%" } : {}}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          />

          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                className="relative pl-16"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-4 flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 z-10">
                  <GraduationCap size={20} className="text-indigo-400" />
                </div>

                {/* Card */}
                <div className="glass-card rounded-2xl p-6 relative overflow-hidden group">
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-indigo-500/40 to-transparent" />

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">
                      {edu.degree}
                    </h3>
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 flex-shrink-0">
                      <Calendar size={12} />
                      {edu.period}
                    </div>
                  </div>
                  <p className="text-indigo-300 text-sm font-medium">
                    {edu.institution}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

