"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { personalInfo } from "@/data/resume";
import { cn } from "@/lib/utils";
import { Menu, X, Sun, Moon, Download } from "lucide-react";
import { useTheme } from "next-themes";

const navLinks = [
	{ label: "About", href: "#about" },
	{ label: "Skills", href: "#skills" },
	{ label: "Experience", href: "#experience" },
	{ label: "Projects", href: "#projects" },
	{ label: "Education", href: "#education" },
	{ label: "Contact", href: "#contact" },
];

export default function Navigation() {
	const [scrolled, setScrolled] = useState(false);
	const [activeSection, setActiveSection] = useState("");
	const [mobileOpen, setMobileOpen] = useState(false);
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	const { scrollYProgress } = useScroll();
	const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });

	useEffect(() => {
		setMounted(true);
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 40);
			const sections = navLinks.map((l) => l.href.slice(1));
			let current = "";
			for (const id of sections) {
				const el = document.getElementById(id);
				if (el && el.getBoundingClientRect().top <= 130) current = id;
			}
			setActiveSection(current);
		};
		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const handleLinkClick = (href: string) => {
		setMobileOpen(false);
		document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<>
			<motion.nav
				initial={{ y: -80, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.6, ease: "easeOut" }}
				className={cn(
					"fixed top-0 left-0 right-0 z-50 transition-all duration-300",
					scrolled
						? "glass border-b shadow-[0_4px_30px_rgba(0,0,0,0.15)] dark:shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
						: "bg-transparent"
				)}
			>
				{/* Scroll progress stripe */}
				<motion.div
					className="absolute inset-x-0 bottom-0 h-[1px] origin-left"
					style={{
						scaleX,
						background:
							"linear-gradient(to right, #6366f1, #8b5cf6, #22d3ee)",
						opacity: scrolled ? 1 : 0,
					}}
				/>

				<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex items-center justify-between h-16">
						{/* Logo */}
						<motion.a
							href="#"
							onClick={(e) => {
								e.preventDefault();
								window.scrollTo({ top: 0, behavior: "smooth" });
							}}
							className="relative flex items-center justify-center w-9 h-9 rounded-xl overflow-hidden group flex-shrink-0"
							whileHover={{ scale: 1.07 }}
							whileTap={{ scale: 0.93 }}
							data-cursor-hover
						>
							<div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-violet-600 opacity-90 group-hover:opacity-100 transition-opacity" />
							<span className="relative text-white font-display font-bold text-sm z-10">
								{personalInfo.initials}
							</span>
						</motion.a>

						{/* Desktop nav */}
						<div className="hidden md:flex items-center gap-1">
							{navLinks.map((link) => {
								const isActive = activeSection === link.href.slice(1);
								return (
									<button
										key={link.href}
										onClick={() => handleLinkClick(link.href)}
										data-cursor-hover
										className={cn(
											"relative px-3.5 py-2 text-sm font-medium rounded-lg transition-colors duration-200",
											isActive
												? "text-indigo-600 dark:text-indigo-400"
												: "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
										)}
									>
										{isActive && (
											<motion.div
												layoutId="nav-active-pill"
												className="absolute inset-0 rounded-lg bg-indigo-500/10 border border-indigo-500/20"
												transition={{
													type: "spring",
													bounce: 0.2,
													duration: 0.45,
												}}
											/>
										)}
										<span className="relative">{link.label}</span>
									</button>
								);
							})}
						</div>

						{/* Right controls */}
						<div className="hidden md:flex items-center gap-2">
							{/* Download CV */}
							<motion.a
								href="/Suresh_Chidella.pdf"
								download="Suresh_Chidella.pdf"
								data-cursor-hover
								className="flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-lg text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-300 hover:bg-indigo-50 dark:hover:bg-indigo-500/10 transition-colors duration-200 border border-transparent hover:border-indigo-200 dark:hover:border-indigo-500/30"
								whileHover={{ scale: 1.04 }}
								whileTap={{ scale: 0.96 }}
							>
								<Download size={14} />
								<span>Resume</span>
							</motion.a>

							{/* Theme toggle */}
							{mounted && (
								<motion.button
									onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
									data-cursor-hover
									className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 transition-colors duration-200"
									whileHover={{ scale: 1.07 }}
									whileTap={{ scale: 0.93 }}
									aria-label="Toggle theme"
								>
									<AnimatePresence mode="wait">
										<motion.div
											key={theme}
											initial={{ rotate: -90, opacity: 0, scale: 0.7 }}
											animate={{ rotate: 0, opacity: 1, scale: 1 }}
											exit={{ rotate: 90, opacity: 0, scale: 0.7 }}
											transition={{ duration: 0.2 }}
										>
											{theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
										</motion.div>
									</AnimatePresence>
								</motion.button>
							)}

							{/* Hire me CTA */}
							<motion.a
								href={`mailto:${personalInfo.email}`}
								data-cursor-hover
								className="relative group px-4 py-2 text-sm font-medium rounded-lg overflow-hidden text-indigo-600 dark:text-indigo-300 border border-indigo-300 dark:border-indigo-500/30 hover:border-indigo-400 dark:hover:border-indigo-400/50 hover:text-indigo-700 dark:hover:text-indigo-200 transition-colors duration-200"
								whileHover={{ scale: 1.04 }}
								whileTap={{ scale: 0.96 }}
							>
								<div className="absolute inset-0 bg-indigo-600/0 group-hover:bg-indigo-600/5 dark:group-hover:bg-indigo-600/15 transition-colors duration-200" />
								<span className="relative">Hire Me</span>
							</motion.a>
						</div>

						{/* Mobile right: theme toggle + hamburger */}
						<div className="flex md:hidden items-center gap-1">
							{mounted && (
								<button
									onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
									className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
									aria-label="Toggle theme"
								>
									{theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
								</button>
							)}
							<button
								onClick={() => setMobileOpen(!mobileOpen)}
								className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
								data-cursor-hover
								aria-label="Open menu"
							>
								<AnimatePresence mode="wait">
									<motion.div
										key={mobileOpen ? "x" : "menu"}
										initial={{ rotate: -90, opacity: 0 }}
										animate={{ rotate: 0, opacity: 1 }}
										exit={{ rotate: 90, opacity: 0 }}
										transition={{ duration: 0.15 }}
									>
										{mobileOpen ? <X size={20} /> : <Menu size={20} />}
									</motion.div>
								</AnimatePresence>
							</button>
						</div>
					</div>
				</div>
			</motion.nav>

			{/* Mobile drawer */}
			<AnimatePresence>
				{mobileOpen && (
					<motion.div
						initial={{ opacity: 0, x: "100%" }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: "100%" }}
						transition={{ type: "spring", bounce: 0, duration: 0.38 }}
						className="fixed inset-0 z-40 md:hidden"
					>
						{/* Backdrop — aria-hidden keeps it out of the accessibility tree */}
						{/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
						<div
							aria-hidden="true"
							className="absolute inset-0 bg-black/50 backdrop-blur-sm"
							onClick={() => setMobileOpen(false)}
						/>
						<div
							className="absolute right-0 top-0 bottom-0 w-72 bg-white dark:bg-[#0e0e1a] border-l border-gray-200 dark:border-white/5 p-6 flex flex-col shadow-2xl"
							role="dialog"
							aria-modal="true"
							aria-label="Navigation menu"
							onKeyDown={(e) => { if (e.key === "Escape") setMobileOpen(false); }}
						>
							<div className="flex items-center justify-between mb-8 mt-2">
								<span className="font-display font-bold text-lg gradient-text">
									{personalInfo.firstName}
								</span>
								<button
									onClick={() => setMobileOpen(false)}
									className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5"
									aria-label="Close menu"
								>
									<X size={18} />
								</button>
							</div>
							<nav className="flex flex-col gap-1">
								{navLinks.map((link, i) => (
									<motion.button
										key={link.href}
										initial={{ opacity: 0, x: 20 }}
										animate={{ opacity: 1, x: 0 }}
										transition={{ delay: i * 0.055 }}
										onClick={() => handleLinkClick(link.href)}
										className={cn(
											"px-4 py-3 text-sm font-medium rounded-lg text-left transition-colors",
											activeSection === link.href.slice(1)
												? "bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-500/20"
												: "text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5"
										)}
									>
										{link.label}
									</motion.button>
								))}
							</nav>
							<div className="mt-6 space-y-3">
								{/* Download Resume in mobile */}
								<a
									href="/Suresh_Chidella.pdf"
									download="Suresh_Chidella.pdf"
									className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl border border-indigo-300 dark:border-indigo-500/30 text-indigo-600 dark:text-indigo-300 text-sm font-medium hover:bg-indigo-50 dark:hover:bg-indigo-500/10 transition-all"
								>
									<Download size={14} />
									Download Resume
								</a>
								<a
									href={`mailto:${personalInfo.email}`}
									className="block w-full text-center px-4 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-sm font-medium hover:from-indigo-500 hover:to-violet-500 transition-all"
								>
									Get in Touch
								</a>
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}

