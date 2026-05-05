"use client";

import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { stats, summary } from "@/data/resume";
import { useCountUp } from "@/hooks/useTypewriter";

function StatCard({ value, suffix, label, delay }: {
  value: number;
  suffix: string;
  label: string;
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const { count, start } = useCountUp(value, 1600);

  useEffect(() => {
    if (isInView) start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className="relative group glass-card rounded-2xl p-6 text-center overflow-hidden"
    >
      {/* Glow on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl bg-gradient-to-br from-indigo-500/5 to-violet-500/5" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative">
        <span className="font-display text-4xl font-bold gradient-text">
          {count}
          {suffix}
        </span>
        <p className="mt-1 text-sm text-muted font-medium">{label}</p>
      </div>
    </motion.div>
  );
}

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative">
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
            About Me
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white section-heading">
            Who I Am
          </h2>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} {...stat} delay={i * 0.1} />
          ))}
        </div>

        {/* Bio */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              {summary}
            </p>
            <p className="text-slate-400 leading-relaxed">
              I started my journey through a Diploma in Electrical & Electronics
              Engineering, then transitioned to software via a B.Tech degree.
              Since joining Quest Global in 2023, I've contributed to
              mission-critical payment and banking systems that serve real
              customers at scale.
            </p>
          </motion.div>

          {/* Right: highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="space-y-4"
          >
            {[
              {
                icon: "🏦",
                title: "Enterprise clients",
                desc: "Mastercard & Axis Bank — production-scale systems",
              },
              {
                icon: "⚙️",
                title: "Microservices first",
                desc: "Designing and building distributed systems with Java 17 & Spring Boot",
              },
              {
                icon: "🔬",
                title: "Quality focused",
                desc: "Strong testing culture: JUnit, Karate, JMeter, SonarQube integration",
              },
              {
                icon: "🚀",
                title: "CI/CD automation",
                desc: "Jenkins pipelines and PCF deployments across environments",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="flex gap-4 p-4 glass-card rounded-xl group"
              >
                <span className="text-2xl mt-0.5 flex-shrink-0">{item.icon}</span>
                <div>
                  <p className="text-white font-medium text-sm">{item.title}</p>
                  <p className="text-slate-500 text-sm mt-0.5">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
