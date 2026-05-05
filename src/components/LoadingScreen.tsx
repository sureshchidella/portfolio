"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Increment progress quickly to simulate load
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 400);
          return 100;
        }
        // Accelerate near end
        const jump = p < 80 ? 4 + Math.random() * 8 : 2 + Math.random() * 3;
        return Math.min(p + jump, 100);
      });
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#070711] overflow-hidden"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
        >
          {/* Background orbs */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full"
              style={{
                background: "radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)",
              }}
              animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.div
              className="absolute -bottom-40 -right-40 w-[400px] h-[400px] rounded-full"
              style={{
                background: "radial-gradient(circle, rgba(34,211,238,0.1) 0%, transparent 70%)",
              }}
              animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
            />
          </div>

          {/* Logo mark */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
            className="relative mb-10"
          >
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shadow-[0_0_60px_rgba(99,102,241,0.5)]">
              <span className="text-white font-bold text-3xl" style={{ fontFamily: "var(--font-syne)" }}>
                S
              </span>
            </div>
            {/* Spinning ring */}
            <motion.div
              className="absolute inset-0 rounded-2xl border-2 border-indigo-400/30"
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>

          {/* Name */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-slate-400 text-sm tracking-widest uppercase mb-10"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Suresh Venkata Chidella
          </motion.p>

          {/* Progress bar */}
          <div className="w-48 h-0.5 bg-white/5 rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400"
              style={{ width: `${progress}%` }}
              transition={{ ease: "easeOut" }}
            />
          </div>

          {/* Percentage */}
          <motion.p
            className="mt-3 text-xs text-slate-600 tabular-nums"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            {Math.round(progress)}%
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

