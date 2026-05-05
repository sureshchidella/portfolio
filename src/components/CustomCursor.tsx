"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [clicking, setClicking] = useState(false);
  const [hovering, setHovering] = useState(false);

  const rawX = useMotionValue(-100);
  const rawY = useMotionValue(-100);

  // Outer ring: springy / lagging
  const springX = useSpring(rawX, { stiffness: 120, damping: 18, mass: 0.5 });
  const springY = useSpring(rawY, { stiffness: 120, damping: 18, mass: 0.5 });

  // Inner dot: near-instant
  const dotX = useSpring(rawX, { stiffness: 800, damping: 30 });
  const dotY = useSpring(rawY, { stiffness: 800, damping: 30 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      rawX.set(e.clientX);
      rawY.set(e.clientY);
      setVisible(true);
    };

    const enter = () => setVisible(true);
    const leave = () => setVisible(false);
    const down = () => setClicking(true);
    const up = () => setClicking(false);

    const checkHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setHovering(
        !!(
          target.closest("a") ||
          target.closest("button") ||
          target.closest("[data-cursor-hover]") ||
          target.tagName === "A" ||
          target.tagName === "BUTTON"
        )
      );
    };

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mousemove", checkHover, { passive: true });
    window.addEventListener("mouseenter", enter);
    window.addEventListener("mouseleave", leave);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousemove", checkHover);
      window.removeEventListener("mouseenter", enter);
      window.removeEventListener("mouseleave", leave);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
    };
  }, [rawX, rawY]);

  return (
    <>
      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] mix-blend-difference"
        style={{ x: springX, y: springY }}
        animate={{
          opacity: visible ? 1 : 0,
          scale: clicking ? 0.7 : hovering ? 1.6 : 1,
        }}
        transition={{ opacity: { duration: 0.2 }, scale: { duration: 0.15 } }}
      >
        <div
          className="rounded-full border transition-colors duration-200"
          style={{
            width: 36,
            height: 36,
            marginLeft: -18,
            marginTop: -18,
            borderColor: hovering ? "rgba(99,102,241,0.9)" : "rgba(255,255,255,0.6)",
            backgroundColor: hovering ? "rgba(99,102,241,0.1)" : "transparent",
          }}
        />
      </motion.div>

      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{ x: dotX, y: dotY }}
        animate={{ opacity: visible ? 1 : 0, scale: clicking ? 0.5 : 1 }}
        transition={{ opacity: { duration: 0.2 } }}
      >
        <div
          className="rounded-full"
          style={{
            width: 6,
            height: 6,
            marginLeft: -3,
            marginTop: -3,
            backgroundColor: hovering ? "#6366f1" : "white",
          }}
        />
      </motion.div>
    </>
  );
}

