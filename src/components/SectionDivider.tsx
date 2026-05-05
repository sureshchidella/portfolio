"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function SectionDivider() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="flex items-center justify-center py-4">
      <motion.div
        className="h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
        transition={{ duration: 1.2, ease: "easeOut" }}
        style={{ width: "100%", maxWidth: "48rem" }}
      />
    </div>
  );
}

