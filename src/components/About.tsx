"use client";

import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { stats, summary } from "@/data/resume";
import { useCountUp } from "@/hooks/useTypewriter";
import { Building2, Cog, TestTubes, Rocket } from "lucide-react";

interface StatCardProps {
  readonly value: number;
  readonly suffix: string;
  readonly label: string;
  readonly delay: number;
}

function StatCard({ value, suffix, label, delay }: StatCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const { count, start } = useCountUp(value, 1600);

  useEffect(() => {
    if (isInView) start();
  }, [isInView, start]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className="relative group glass-card stat-glow rounded-2xl p-6 text-center overflow-hidden"
    >
      {/* Glow on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl bg-gradient-to-br from-indigo-500/5 to-violet-500/5" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative">
        <span className="font-display text-4xl font-bold gradient-text">
          {count}
          {suffix}
        </span>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400 font-medium">{label}</p>
      </div>
    </motion.div>
  );
}

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative overflow-hidden">
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
            About Me
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white section-heading">
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
            <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed mb-6">
              {summary}
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              I started my journey through a Diploma in Electrical & Electronics
              Engineering, then transitioned to software via a B.Tech degree.
              Since joining Quest Global in 2023, I&apos;ve delivered features
              across cross-border money transfers, currency mandate flows, and
              loan management systems — comfortable across the full backend
              delivery cycle.
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
                icon: Building2,
                title: "Enterprise clients",
                desc: "Mastercard & Axis Bank — production-scale systems",
                iconColor: "text-indigo-600 dark:text-indigo-400",
                iconBg: "bg-indigo-50 dark:bg-indigo-500/10 border-indigo-200 dark:border-indigo-500/25",
              },
              {
                icon: Cog,
                title: "Event-driven architecture",
                desc: "CQRS & Event Sourcing with Axon Framework, Kafka-backed async processing",
                iconColor: "text-violet-600 dark:text-violet-400",
                iconBg: "bg-violet-50 dark:bg-violet-500/10 border-violet-200 dark:border-violet-500/25",
              },
              {
                icon: TestTubes,
                title: "Multi-layer testing",
                desc: "JUnit 5, Karate, ArchUnit, JMeter, BlazeMeter, mutation testing & SonarQube",
                iconColor: "text-cyan-600 dark:text-cyan-400",
                iconBg: "bg-cyan-50 dark:bg-cyan-500/10 border-cyan-200 dark:border-cyan-500/25",
              },
              {
                icon: Rocket,
                title: "Full delivery cycle",
                desc: "API design → service integration → CI/CD → testing → production monitoring",
                iconColor: "text-emerald-600 dark:text-emerald-400",
                iconBg: "bg-emerald-50 dark:bg-emerald-500/10 border-emerald-200 dark:border-emerald-500/25",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="flex gap-4 p-4 glass-card rounded-xl group"
              >
                <div className={`flex-shrink-0 w-10 h-10 rounded-lg border flex items-center justify-center ${item.iconBg}`}>
                  <Icon size={18} className={item.iconColor} />
                </div>
                <div>
                  <p className="text-slate-800 dark:text-white font-medium text-sm">{item.title}</p>
                  <p className="text-slate-500 dark:text-slate-500 text-sm mt-0.5">{item.desc}</p>
                </div>
              </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
