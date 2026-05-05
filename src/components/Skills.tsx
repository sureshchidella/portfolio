"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skills } from "@/data/resume";

// Skill-level metadata (approximate, for visualization only)
const skillLevels: Record<string, number> = {
  "Java 17": 92,
  "Spring Boot": 90,
  "Microservices": 88,
  "REST APIs": 92,
  JPA: 82,
  Hibernate: 80,
  RabbitMQ: 72,
  MySQL: 80,
  SQL: 82,
  "JUnit": 85,
  "Mockito": 83,
  "JMeter": 80,
  "BlazeMeter": 75,
  "Postman": 88,
  "Karate": 78,
  "ArchUnit": 72,
  "Maven": 85,
  "Jenkins": 82,
  "PCF": 75,
  "SonarQube": 84,
  "Dynatrace": 70,
  "JaCoCo": 80,
  "Git": 88,
  "IntelliJ IDEA": 90,
  "Swagger/OpenAPI": 84,
  "Jira": 80,
  "Axon (Kafka)": 72,
};

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

const pillVariants = {
  hidden: { opacity: 0, scale: 0.75, y: 12 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 280, damping: 18 },
  },
};

function SkillPill({
  item,
  bgClass,
  level,
}: {
  item: string;
  bgClass: string;
  level: number;
}) {
  return (
    <motion.div
      variants={pillVariants}
      className={`skill-pill group relative inline-flex flex-col gap-1.5 px-4 py-2.5 rounded-xl text-sm font-medium border ${bgClass} text-slate-300 hover:text-white cursor-default select-none overflow-hidden`}
      title={`Proficiency: ${level}%`}
    >
      {/* Progress bar underline */}
      <span className="relative z-10">{item}</span>
      <div className="relative h-[2px] bg-white/5 rounded-full w-full overflow-hidden">
        <motion.div
          className="absolute inset-y-0 left-0 rounded-full"
          style={{
            background: "linear-gradient(to right, currentColor, currentColor)",
          }}
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="py-24 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-indigo-500/5 blur-3xl" />
        <div className="absolute left-0 bottom-0 w-64 h-64 rounded-full bg-violet-500/4 blur-3xl" />
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
            Technical Skills
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white section-heading">
            What I Work With
          </h2>
          <p className="mt-5 text-sm text-slate-500">
            Each skill bar reflects relative proficiency — hover to see the level.
          </p>
        </motion.div>

        {/* Skill categories */}
        <div className="space-y-12">
          {skills.map((group, groupIndex) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: groupIndex * 0.1 }}
            >
              <div className="flex items-center gap-3 mb-5">
                <motion.div
                  className={`w-2.5 h-2.5 rounded-full ${group.dotClass}`}
                  animate={{ scale: [1, 1.4, 1] }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    delay: groupIndex * 0.4,
                  }}
                />
                <h3
                  className={`font-display text-sm font-semibold uppercase tracking-widest ${group.colorClass}`}
                >
                  {group.category}
                </h3>
                <div className="flex-1 h-px bg-white/5" />
                <span className="text-xs text-slate-600 tabular-nums">
                  {group.items.length} tools
                </span>
              </div>

              <motion.div
                className="flex flex-wrap gap-3"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "show" : "hidden"}
              >
                {group.items.map((item) => (
                  <SkillPill
                    key={item}
                    item={item}
                    bgClass={group.bgClass}
                    level={skillLevels[item] ?? 75}
                  />
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Decorative bottom line */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 1.2, delay: 0.9, ease: "easeOut" }}
          className="mt-16 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent origin-left"
        />
      </div>
    </section>
  );
}
