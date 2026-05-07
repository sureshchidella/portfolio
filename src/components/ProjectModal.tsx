"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Building2, Layers, CheckCircle2 } from "lucide-react";
import { projects } from "@/data/resume";
import { useEffect } from "react";

type Project = (typeof projects)[0];

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  // Lock body scroll when open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [project]);

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop */}
          <motion.div
            key="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[200] bg-black/60 dark:bg-black/70 backdrop-blur-md"
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            key="modal-panel"
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 30 }}
            transition={{ type: "spring", stiffness: 300, damping: 28 }}
            className="fixed inset-x-4 top-[5vh] bottom-[5vh] md:inset-x-auto md:left-1/2 md:-translate-x-1/2 md:w-full md:max-w-2xl z-[201] overflow-y-auto rounded-2xl"
            style={{ maxHeight: "90vh" }}
          >
            <div className="relative min-h-full glass-card rounded-2xl overflow-hidden">
              {/* Gradient header bar */}
              <div
                className="absolute inset-x-0 top-0 h-1"
                style={{
                  background: `linear-gradient(to right, ${project.gradientFrom}, ${project.gradientTo})`,
                }}
              />

              {/* Background glow */}
              <div
                className="absolute -top-20 -right-20 w-64 h-64 rounded-full opacity-10 pointer-events-none"
                style={{
                  background: `radial-gradient(circle, ${project.gradientFrom} 0%, transparent 70%)`,
                }}
              />

              <div className="p-6 md:p-8">
                {/* Header row */}
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span
                        className="text-xs font-semibold px-2.5 py-1 rounded-full border"
                        style={{
                          backgroundColor: `${project.clientColor}15`,
                          borderColor: `${project.clientColor}40`,
                          color: project.clientColor,
                        }}
                      >
                        {project.client}
                      </span>
                      {project.current && (
                        <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-300 dark:border-emerald-500/20 text-emerald-700 dark:text-emerald-400 flex items-center gap-1">
                          <span className="w-1 h-1 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
                          Active
                        </span>
                      )}
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white" style={{ fontFamily: "var(--font-syne)" }}>
                      {project.title}
                    </h2>
                  </div>
                  <button
                    onClick={onClose}
                    className="flex-shrink-0 w-9 h-9 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-white/10 transition-colors"
                    data-cursor-hover
                  >
                    <X size={16} />
                  </button>
                </div>

                {/* Meta row */}
                <div className="flex flex-wrap gap-4 mb-6 p-4 rounded-xl bg-[var(--color-surface-2)] border border-[var(--color-border)]">
                  <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                    <Calendar size={14} className="text-slate-400 dark:text-slate-500" />
                    {project.period}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                    <Layers size={14} className="text-slate-400 dark:text-slate-500" />
                    {project.domain}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                    <Building2 size={14} className="text-slate-400 dark:text-slate-500" />
                    via Quest Global
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">{project.description}</p>

                {/* Key contributions */}
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-3">
                    Key Contributions
                  </h3>
                  <ul className="space-y-3">
                    {project.highlights.map((point, i) => (
                      <motion.li
                        key={point.slice(0, 50)}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.07 }}
                        className="flex gap-3 text-sm text-slate-700 dark:text-slate-300 leading-relaxed"
                      >
                        <CheckCircle2
                          size={16}
                          className="flex-shrink-0 mt-0.5"
                          style={{ color: project.gradientFrom }}
                        />
                        {point}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Tech stack */}
                <div>
                  <h3 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-3">
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, i) => (
                      <motion.span
                        key={t}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 + i * 0.04, type: "spring", stiffness: 300, damping: 20 }}
                        className="text-sm px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-white/20 hover:text-slate-900 dark:hover:text-white transition-colors cursor-default"
                      >
                        {t}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

