"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isTouchDevice, setIsTouchDevice] = useState<boolean | null>(null);
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
    // Only show custom cursor on fine-pointer (mouse) devices, not touch
    const mq = window.matchMedia("(pointer: fine) and (hover: hover)");
    setIsTouchDevice(!mq.matches);
    if (!mq.matches) return;

    const move = (e: MouseEvent) => {
      rawX.set(e.clientX);
      rawY.set(e.clientY);
      setVisible(true);
    };

    // Hide when mouse leaves the browser document
    const leave = () => setVisible(false);
    // Show again when mouse re-enters
    const enter = () => setVisible(true);
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

    document.addEventListener("mousemove", move, { passive: true });
    document.addEventListener("mousemove", checkHover, { passive: true });
    // document-level mouseleave fires when cursor exits the viewport
    document.documentElement.addEventListener("mouseleave", leave);
    document.documentElement.addEventListener("mouseenter", enter);
    document.addEventListener("mousedown", down);
    document.addEventListener("mouseup", up);

    return () => {
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mousemove", checkHover);
      document.documentElement.removeEventListener("mouseleave", leave);
      document.documentElement.removeEventListener("mouseenter", enter);
      document.removeEventListener("mousedown", down);
      document.removeEventListener("mouseup", up);
    };
  }, [rawX, rawY]);

  // Don't render on touch/coarse-pointer devices
  if (isTouchDevice === null || isTouchDevice) return null;

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

