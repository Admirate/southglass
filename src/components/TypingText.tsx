"use client";

import { useEffect, useRef, useState } from "react";

interface TypingTextProps {
  text: string;
  speed?: number;
  className?: string;
}

export default function TypingText({
  text,
  speed = 80,
  className = "",
}: TypingTextProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [startTyping, setStartTyping] = useState(false);
  const indexRef = useRef(0);
  const ref = useRef<HTMLParagraphElement>(null);

  // Start typing only when visible
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartTyping(true);
          observer.disconnect();
        }
      },
      { threshold: 0.6 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Typing logic 
  useEffect(() => {
    if (!startTyping) return;

    const interval = setInterval(() => {
      if (indexRef.current >= text.length) {
        clearInterval(interval);
        return;
      }

      setDisplayedText((prev) => prev + text.charAt(indexRef.current));
      indexRef.current += 1;
    }, speed);

    return () => clearInterval(interval);
  }, [startTyping, text, speed]);

  return (
    <p ref={ref} className={className}>
      {displayedText}
    </p>
  );
}
