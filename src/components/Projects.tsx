"use client";

import { useRef, useState } from "react";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { projects } from "@/data/resume";
import { ChevronRight } from "lucide-react";
import ProjectModal from "./ProjectModal";

type Project = (typeof projects)[0];

interface ProjectCardProps {
  readonly project: Project;
  readonly index: number;
  readonly isInView: boolean;
  readonly onClick: () => void;
}

function ProjectCard({ project, index, isInView, onClick }: ProjectCardProps) {
  const [hovered, setHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 200, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 200, damping: 25 });
  const rotateX = useTransform(springY, [-0.5, 0.5], ["6deg", "-6deg"]);
  const rotateY = useTransform(springX, [-0.5, 0.5], ["-6deg", "6deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setHovered(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.13, ease: [0.25, 0.1, 0.25, 1] }}
      style={{ perspective: "1200px" }}
    >
      <motion.div
        ref={cardRef}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative h-full"
      >
        <button
          type="button"
          onClick={onClick}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={handleMouseLeave}
          onFocus={() => setHovered(true)}
          onBlur={() => { mouseX.set(0); mouseY.set(0); setHovered(false); }}
          data-cursor-hover
          className="relative h-full w-full text-left glass-card rounded-2xl overflow-hidden cursor-pointer group focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none"
          style={{
            boxShadow: hovered
              ? `0 24px 64px -12px ${project.gradientFrom}25, 0 0 0 1px ${project.gradientFrom}15`
              : "0 2px 16px rgba(0,0,0,0.08)",
            transition: "box-shadow 0.4s ease",
          }}
        >
          {/* Gradient accent top bar */}
          <motion.div
            className="absolute inset-x-0 top-0 h-0.5"
            style={{
              background: `linear-gradient(to right, ${project.gradientFrom}, ${project.gradientTo})`,
            }}
            animate={{ opacity: hovered ? 1 : 0.5 }}
            transition={{ duration: 0.3 }}
          />

          {/* Hover glow overlay */}
          <motion.div
            className="absolute inset-0 pointer-events-none rounded-2xl"
            style={{
              background: `radial-gradient(circle at 50% 0%, ${project.gradientFrom}12 0%, transparent 65%)`,
            }}
            animate={{ opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.4 }}
          />

          {/* Shine sweep on hover */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.04) 50%, transparent 60%)`,
            }}
            animate={{ x: hovered ? "100%" : "-100%" }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          />

          <div className="p-6 h-full flex flex-col">
            {/* Header */}
            <div className="flex items-start justify-between gap-4 mb-3">
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span
                    className="text-xs font-semibold px-2.5 py-1 rounded-full border"
                    style={{
                      backgroundColor: `${project.clientColor}15`,
                      borderColor: `${project.clientColor}30`,
                      color: project.clientColor,
                    }}
                  >
                    {project.client}
                  </span>
                  {project.current && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-300 dark:border-emerald-500/20 text-emerald-700 dark:text-emerald-400 flex items-center gap-1">
                      <span className="w-1 h-1 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />{" "}
                      Active
                    </span>
                  )}
                </div>
                <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white leading-snug group-hover:text-indigo-700 dark:group-hover:text-indigo-100 transition-colors duration-200">
                  {project.title}
                </h3>
              </div>
              <motion.div
                className="flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center bg-slate-100 dark:bg-slate-700/60 border border-slate-200 dark:border-slate-600/70 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-500/25 group-hover:border-indigo-300 dark:group-hover:border-indigo-400/60 transition-colors"
                animate={{ rotate: hovered ? 45 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronRight size={14} className="text-slate-500 dark:text-slate-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors" />
              </motion.div>
            </div>

            {/* Meta */}
            <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-500 mb-4">
              <span>{project.period}</span>
              <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-700" />
              <span>{project.domain}</span>
            </div>

            {/* Description */}
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-5 flex-1">
              {project.description}
            </p>

            {/* Highlights */}
            <ul className="space-y-2 mb-5">
              {project.highlights.slice(0, 2).map((point) => (
                <li key={point.slice(0, 40)} className="flex gap-2.5 text-xs text-slate-500 dark:text-slate-500 leading-relaxed">
                  <span
                    className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0"
                    style={{ backgroundColor: project.gradientFrom }}
                  />
                  {point}
                </li>
              ))}
              {project.highlights.length > 2 && (
                <li className="text-xs text-slate-500 dark:text-slate-600">
                  +{project.highlights.length - 2} more — click to expand
                </li>
              )}
            </ul>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-1.5 mt-auto">
              {project.tech.slice(0, 5).map((t) => (
                <span
                  key={t}
                  className="text-xs px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600/60 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-500 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                >
                  {t}
                </span>
              ))}
              {project.tech.length > 5 && (
                <span className="text-xs px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-700/30 border border-slate-200 dark:border-slate-600/40 text-slate-500 dark:text-slate-400">
                  +{project.tech.length - 5}
                </span>
              )}
            </div>
          </div>
        </button>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        <div className="absolute right-1/4 top-1/3 w-72 h-72 rounded-full bg-cyan-500/5 blur-3xl" />
        <div className="absolute left-1/4 bottom-1/3 w-64 h-64 rounded-full bg-violet-500/5 blur-3xl" />
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
          <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400 tracking-widest uppercase mb-3">
            Portfolio
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white section-heading">
            Projects
          </h2>
          <p className="mt-6 text-slate-600 dark:text-slate-400 max-w-xl">
            Production projects for enterprise clients — Mastercard and Axis Bank — via Quest Global.{" "}
            <span className="text-slate-500 dark:text-slate-500 text-sm">Click any card for details.</span>
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              isInView={isInView}
              onClick={() => setActiveProject(project)}
            />
          ))}
        </div>
      </div>

      {/* Project detail modal */}
      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </section>
  );
}
