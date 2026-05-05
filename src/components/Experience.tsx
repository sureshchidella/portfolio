"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { experiences, awards } from "@/data/resume";
import { Briefcase, Award, MapPin, Calendar } from "lucide-react";

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="py-24 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-violet-500/5 blur-3xl" />
      </div>

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
            Work History
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white section-heading">
            Experience
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main experience */}
          <div className="lg:col-span-2 space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: index * 0.15 }}
              >
                <div className="relative">
                  {/* Timeline dot */}
                  <div className="absolute -left-0 top-0 hidden lg:flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-indigo-500 ring-4 ring-indigo-500/20 z-10" />
                  </div>

                  {/* Card */}
                  <div className="glass-card rounded-2xl p-6 lg:p-8 relative overflow-hidden group">
                    {/* Gradient top border */}
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-indigo-500/60 via-violet-500/40 to-transparent" />

                    {/* Live badge */}
                    {exp.current && (
                      <div className="absolute top-4 right-4 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="text-xs text-emerald-400 font-medium">Current</span>
                      </div>
                    )}

                    {/* Header */}
                    <div className="flex items-start gap-4 mb-6">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
                        <Briefcase size={20} className="text-indigo-400" />
                      </div>
                      <div>
                        <h3 className="font-display text-xl font-bold text-white">{exp.title}</h3>
                        <p className="text-indigo-300 font-medium text-sm mt-0.5">{exp.company}</p>
                        <div className="flex flex-wrap gap-3 mt-2">
                          <span className="flex items-center gap-1.5 text-xs text-slate-500">
                            <MapPin size={12} />
                            {exp.location}
                          </span>
                          <span className="flex items-center gap-1.5 text-xs text-slate-500">
                            <Calendar size={12} />
                            {exp.period}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Highlights */}
                    <ul className="space-y-2.5">
                      {exp.highlights.map((point, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: 0.3 + i * 0.07 }}
                          className="flex gap-3 text-sm text-slate-400 leading-relaxed"
                        >
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500/60 flex-shrink-0" />
                          <span>{point}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Sidebar: Award */}
          <div className="space-y-6">
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
              className="text-sm font-medium text-indigo-400 tracking-widest uppercase"
            >
              Recognition
            </motion.p>

            {awards.map((award, i) => (
              <motion.div
                key={award.title}
                initial={{ opacity: 0, y: 30, scale: 0.96 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
                className="glass-card rounded-2xl p-6 relative overflow-hidden group"
              >
                {/* Corner glow */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-amber-500/15 transition-colors duration-500" />
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />

                <div className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                      <Award size={18} className="text-amber-400" />
                    </div>
                    <div>
                      <p className="text-xs text-amber-400 font-medium">{award.date}</p>
                    </div>
                  </div>

                  <h4 className="font-display text-lg font-bold text-white mb-1">{award.title}</h4>
                  <p className="text-xs text-slate-500 mb-3">{award.organization}</p>
                  <p className="text-sm text-slate-400 leading-relaxed">{award.description}</p>
                </div>
              </motion.div>
            ))}

            {/* Timeline note */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8 }}
              className="glass-card rounded-xl p-4 text-center"
            >
              <p className="text-xs text-slate-500 leading-relaxed">
                2+ years of continuous delivery on Mastercard and Axis Bank production systems.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

