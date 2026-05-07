"use client";

import { useState, useEffect, useRef, useCallback } from "react";

export function useTypewriter(
  words: string[],
  typingSpeed = 90,
  deletingSpeed = 50,
  pauseDuration = 2200
) {
  const [displayText, setDisplayText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (words.length === 0) return;

    const currentWord = words[wordIndex % words.length];

    if (isPaused) {
      const pauseTimer = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, pauseDuration);
      return () => clearTimeout(pauseTimer);
    }

    const timeout = setTimeout(
      () => {
        if (isDeleting) {
          const next = currentWord.slice(0, displayText.length - 1);
          setDisplayText(next);
          if (next === "") {
            setIsDeleting(false);
            setWordIndex((prev) => (prev + 1) % words.length);
          }
        } else {
          const next = currentWord.slice(0, displayText.length + 1);
          setDisplayText(next);
          if (next === currentWord) {
            setIsPaused(true);
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, isPaused, wordIndex, words, typingSpeed, deletingSpeed, pauseDuration]);

  return { displayText, isTyping: !isPaused };
}

export function useCountUp(end: number, duration = 1800, startOnMount = false) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(startOnMount);
  const frameRef = useRef<number>(0);

  const start = useCallback(() => setStarted(true), []);

  useEffect(() => {
    if (!started) return;
    let startTime: number | null = null;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(step);
      }
    };

    frameRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameRef.current);
  }, [started, end, duration]);

  return { count, start };
}

