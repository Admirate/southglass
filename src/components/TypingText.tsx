"use client";

import { useEffect, useState } from "react";

interface TypingTextProps {
  text: string;
  speed?: number;
  className?: string;
}

export default function TypingText({
  text,
  speed = 40,
  className = "",
}: TypingTextProps) {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    if (index > text.length) return;

    const timeout = setTimeout(() => {
      setDisplayed(text.slice(0, index));
      setIndex((prev) => prev + 1);
    }, speed);

    return () => clearTimeout(timeout);
  }, [index, text, speed]);

  return <p className={className}>{displayed}</p>;
}
