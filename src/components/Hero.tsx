"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Mail, Linkedin, MapPin, Download, FileText } from "lucide-react";
import { personalInfo } from "@/data/resume";
import { useTypewriter } from "@/hooks/useTypewriter";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.4 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.25, 0.1, 0.25, 1] } },
};

// Stable column positions for the animated grid lines
const GRID_LINES = [20, 40, 60, 80, 100] as const;
const PARTICLES = Array.from({ length: 22 }, (_, i) => ({
  id: i,
  left: ((i * 47) % 97) + 1.5,
  top: ((i * 31 + 13) % 95) + 2,
  duration: 3 + ((i * 13) % 4),
  delay: (i * 7) % 5,
  size: i % 3 === 0 ? 2 : 1,
}));

export default function Hero() {
  const { displayText, isTyping } = useTypewriter(personalInfo.roles, 80, 42, 2200);
  const cursorRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  // Parallax on scroll
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 600], [0, -80]);
  const y2 = useTransform(scrollY, [0, 600], [0, -120]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  // Cursor glow — only bind on devices with a fine pointer (desktops)
  useEffect(() => {
    const mq = typeof window !== "undefined" && window.matchMedia("(pointer: fine)");
    if (!mq || !mq.matches) return;
    const handleMouseMove = (e: MouseEvent) => {
      if (!cursorRef.current) return;
      cursorRef.current.style.left = `${e.clientX}px`;
      cursorRef.current.style.top = `${e.clientY}px`;
    };
    document.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollDown = () =>
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden grid-bg"
    >
      {/* Cursor glow */}
      <div ref={cursorRef} className="cursor-glow" />

      {/* Mesh gradient orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute -top-40 -left-40 w-[800px] h-[800px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(99,102,241,0.16) 0%, rgba(139,92,246,0.07) 40%, transparent 70%)",
            y: y1,
          }}
          animate={{ x: [0, 50, -20, 0], scale: [1, 1.06, 0.97, 1] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-48 -right-40 w-[700px] h-[700px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(34,211,238,0.12) 0%, rgba(99,102,241,0.05) 40%, transparent 70%)",
            y: y2,
          }}
          animate={{ x: [0, -60, 30, 0], scale: [1, 0.94, 1.06, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 65%)",
          }}
          animate={{ scale: [1, 1.25, 0.88, 1], opacity: [0.4, 0.7, 0.35, 0.4] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Floating particles */}
      {PARTICLES.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-indigo-400/25 pointer-events-none"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size * 4,
            height: p.size * 4,
          }}
          animate={{ y: [0, -28, 0], opacity: [0, 0.7, 0] }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Animated grid lines (vertical) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
        {GRID_LINES.map((pos) => (
          <motion.div
            key={pos}
            className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-indigo-500/15 to-transparent"
            style={{ left: `${pos}%` }}
            animate={{ opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 4 + pos / 20, repeat: Infinity, delay: (pos / 20) * 0.8 }}
          />
        ))}
      </div>

      {/* Main content */}
      <motion.div
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        style={{ opacity }}
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Location badge */}
        <motion.div variants={item} className="flex justify-center mb-7">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-indigo-300/30 dark:border-indigo-500/25 text-sm text-indigo-600 dark:text-indigo-300"
            whileHover={{ scale: 1.04, borderColor: "rgba(99,102,241,0.5)" }}
          >
            <MapPin size={13} className="text-indigo-400" />
            {personalInfo.location}
            <span className="mx-1 w-px h-3 bg-slate-300 dark:bg-white/10" />
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-emerald-600 dark:text-emerald-400 text-xs font-medium">Open to work</span>
          </motion.div>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={item}
          className="font-display text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight mb-5 leading-[0.9]"
        >
          <span className="block text-slate-900 dark:text-white">{personalInfo.firstName}</span>
          <span className="block gradient-text">
            {personalInfo.name.split(" ").slice(1).join(" ")}
          </span>
        </motion.h1>

        {/* Typewriter subtitle */}
        <motion.div
          variants={item}
          className="h-11 flex items-center justify-center mb-6"
        >
          <span className="text-xl sm:text-2xl text-slate-600 dark:text-slate-400 font-medium font-display">
            {displayText}
            <motion.span
              animate={{ opacity: isTyping ? [1, 0] : 1 }}
              transition={{ repeat: Infinity, duration: 0.75 }}
              className="inline-block ml-1 w-[2px] h-6 bg-indigo-400 align-middle rounded-full"
            />
          </span>
        </motion.div>

        {/* Bio summary */}
        <motion.p
          variants={item}
          className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed mb-11"
        >
          Building production-grade microservices for{" "}
          <span className="text-slate-900 dark:text-white font-semibold">Mastercard</span> &{" "}
          <span className="text-slate-900 dark:text-white font-semibold">Axis Bank</span>
          {" "}— Java 17, Spring Boot, event-driven architecture.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={item}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-14"
        >
          {/* Primary */}
          <motion.button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="relative group px-8 py-3.5 rounded-xl font-medium text-white overflow-hidden"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            data-cursor-hover
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-violet-600 group-hover:from-indigo-500 group-hover:to-violet-500 transition-all duration-300" />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.1),transparent_70%)]" />
            {/* Shimmer */}
            <motion.div
              className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent"
            />
            <span className="relative flex items-center gap-2 justify-center">
              View Projects
              <ArrowDown size={15} className="group-hover:translate-y-0.5 transition-transform" />
            </span>
          </motion.button>

          {/* Download Resume */}
          <motion.a
            href="/Suresh_Chidella.pdf"
            download="Suresh_Chidella.pdf"
            className="relative group px-8 py-3.5 rounded-xl font-medium overflow-hidden text-indigo-600 dark:text-indigo-300 border border-indigo-300 dark:border-indigo-500/40 hover:border-indigo-500 dark:hover:border-indigo-400/60 hover:bg-indigo-50 dark:hover:bg-indigo-500/10 transition-all duration-300"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            data-cursor-hover
          >
            <span className="flex items-center gap-2 justify-center">
              <FileText size={15} />
              Download CV
              <Download size={13} className="group-hover:translate-y-0.5 transition-transform opacity-70" />
            </span>
          </motion.a>

          {/* Get in Touch */}
          <motion.a
            href={`mailto:${personalInfo.email}`}
            className="group px-8 py-3.5 rounded-xl font-medium text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-white/10 hover:border-indigo-400/40 dark:hover:border-indigo-500/40 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-indigo-500/5 transition-all duration-300"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            data-cursor-hover
          >
            <span className="flex items-center gap-2 justify-center">
              <Mail size={15} />
              Get in Touch
            </span>
          </motion.a>
        </motion.div>

        {/* Social links row */}
        <motion.div variants={item} className="flex items-center justify-center gap-5">
          <a
            href={`mailto:${personalInfo.email}`}
            className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors group"
            data-cursor-hover
          >
            <Mail size={14} className="group-hover:scale-110 transition-transform" />
            <span className="hidden sm:inline">{personalInfo.email}</span>
          </a>
          <div className="w-px h-4 bg-slate-200 dark:bg-white/10" />
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors group"
            data-cursor-hover
          >
            <Linkedin size={14} className="group-hover:scale-110 transition-transform" />
            <span className="hidden sm:inline">{personalInfo.linkedinHandle}</span>
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 hover:text-slate-300 transition-colors group"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        data-cursor-hover
      >
        <span className="text-[10px] tracking-[0.25em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 9, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-9 rounded-full border border-white/15 flex items-start justify-center pt-1.5 group-hover:border-indigo-500/40 transition-colors"
        >
          <motion.div
            className="w-1 h-2 rounded-full bg-white/30 group-hover:bg-indigo-400/60 transition-colors"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 2.2, repeat: Infinity }}
          />
        </motion.div>
      </motion.button>
    </section>
  );
}

