"use client";

import { useState } from "react";
import { motion, useScroll, useSpring, useMotionValueEvent } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (v) => setVisible(v > 0.01));

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] z-[60] origin-left"
      style={{
        scaleX,
        background: "linear-gradient(to right, #6366f1, #8b5cf6, #22d3ee)",
        opacity: visible ? 1 : 0,
      }}
      transition={{ opacity: { duration: 0.3 } }}
    />
  );
}

