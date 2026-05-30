"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/data/resume";
import { Heart, Mail, Linkedin, ArrowUpRight } from "lucide-react";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  const handleNav = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative pt-12 pb-8 border-t border-slate-200 dark:border-white/5">
      {/* Gradient top edge */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-500/25 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top row */}
          <div className="grid sm:grid-cols-3 gap-8 mb-10 pb-10 border-b border-slate-200 dark:border-white/5">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shadow-[0_0_20px_rgba(99,102,241,0.3)]">
                <span className="text-white font-display font-bold text-sm">
                  {personalInfo.initials}
                </span>
              </div>
              <span className="font-display font-bold text-slate-900 dark:text-white">
                {personalInfo.firstName}
              </span>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed max-w-[220px]">
              Backend Software Engineer specializing in Java, Spring Boot, CQRS & microservices.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">
              Navigation
            </p>
            <nav className="grid grid-cols-2 gap-2">
              {footerLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className="text-sm text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-left"
                  data-cursor-hover
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">
              Connect
            </p>
            <div className="space-y-2">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2 text-sm text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors group"
                data-cursor-hover
              >
                <Mail size={13} />
                <span className="truncate">{personalInfo.email}</span>
                <ArrowUpRight size={11} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors group"
                data-cursor-hover
              >
                <Linkedin size={13} />
                <span>{personalInfo.linkedinHandle}</span>
                <ArrowUpRight size={11} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5"
          >
            Built with
            <Heart size={11} className="text-rose-500 fill-rose-500 animate-pulse" />
            using Next.js, Framer Motion & Tailwind CSS
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xs text-slate-500 dark:text-slate-500"
          >
            © {year} {personalInfo.name}
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
