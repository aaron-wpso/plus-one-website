"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const TYPEWRITER_LINES = [
  "We build the system that fixes it.",
  "We built one for a rooftop bar in KL.",
  "We built one for a fitness studio in Cheras.",
  "We built one for an interior design firm.",
  "We built one for a heavy machinery marketplace.",
];

function useTypewriter(lines: string[], speed = 50, pause = 2200) {
  const [display, setDisplay] = useState("");
  const [lineIdx, setLineIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = lines[lineIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIdx < current.length) {
      timeout = setTimeout(() => setCharIdx((c) => c + 1), speed);
    } else if (!deleting && charIdx === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx((c) => c - 1), speed / 2);
    } else if (deleting && charIdx === 0) {
      setDeleting(false);
      setLineIdx((i) => (i + 1) % lines.length);
    }

    setDisplay(current.slice(0, charIdx));
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, lineIdx, lines, speed, pause]);

  return display;
}

function PlusAnimation() {
  const pathRef = useRef<SVGPathElement>(null);
  const [drawn, setDrawn] = useState(false);

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;
    const len = path.getTotalLength();
    path.style.strokeDasharray = `${len}`;
    path.style.strokeDashoffset = `${len}`;

    const timer = setTimeout(() => {
      path.style.transition = "stroke-dashoffset 1.8s ease-in-out";
      path.style.strokeDashoffset = "0";
      setTimeout(() => setDrawn(true), 2000);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex items-center justify-center mb-8">
      <svg
        width="80"
        height="80"
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Tangled path — complexity */}
        <path
          ref={pathRef}
          d="M40 10 C20 10 10 25 25 35 C40 45 55 20 45 40 C35 60 15 55 20 45 C25 35 50 38 55 50 C60 62 45 70 40 65 C35 60 38 40 40 40 C42 40 45 55 50 50 C55 45 52 30 40 30 C28 30 20 42 30 50 C40 58 60 50 60 40 C60 30 48 10 40 10Z"
          stroke="#EA580C"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
          opacity={drawn ? 0.15 : 1}
          style={{ transition: drawn ? "opacity 0.6s ease" : undefined }}
        />
        {/* Plus sign — revealed after draw */}
        <g
          style={{
            opacity: drawn ? 1 : 0,
            transition: "opacity 0.5s ease 0.2s",
          }}
        >
          <rect x="36" y="20" width="8" height="40" rx="4" fill="#EA580C" />
          <rect x="20" y="36" width="40" height="8" rx="4" fill="#EA580C" />
        </g>
      </svg>
    </div>
  );
}

export function Hero() {
  const typed = useTypewriter(TYPEWRITER_LINES);

  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center px-5 md:px-10 pt-16 pb-24 text-center relative overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at 20% 50%, #FFF3E0 0%, #FAFAF7 45%, #EEF2FF 100%)",
      }}
    >
      <PlusAnimation />

      <h1
        className="text-[48px] md:text-[72px] lg:text-[80px] font-extrabold leading-[1.02] tracking-tight text-[#111110] max-w-[900px]"
        style={{ fontFamily: "var(--font-plus-jakarta)" }}
      >
        Your business runs on chaos.
      </h1>

      <p
        className="mt-4 text-[18px] md:text-[20px] text-[#6B6B63] min-h-[32px]"
        style={{ fontFamily: "var(--font-inter)" }}
      >
        {typed}
        <span className="inline-block w-[2px] h-[1.1em] bg-[#EA580C] ml-0.5 align-middle animate-pulse" />
      </p>

      <p
        className="mt-6 text-[16px] md:text-[18px] text-[#6B6B63] max-w-[520px] leading-relaxed"
        style={{ fontFamily: "var(--font-inter)" }}
      >
        Plus One builds custom software for Malaysian SMEs — web apps, mobile
        apps, AI tools, and digitalization systems. Built for your operations.
        Not a template.
      </p>

      <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 bg-[#EA580C] hover:bg-[#C2410C] text-white font-semibold text-[15px] px-7 py-3.5 rounded-full transition-all duration-150 hover:scale-[1.02]"
          style={{ fontFamily: "var(--font-plus-jakarta)" }}
        >
          See Our Work →
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 border border-[#E5E5DF] hover:border-[#EA580C] text-[#111110] hover:text-[#EA580C] font-semibold text-[15px] px-7 py-3.5 rounded-full transition-all duration-150"
          style={{ fontFamily: "var(--font-plus-jakarta)" }}
        >
          Book a Free Call
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-40">
        <div className="w-[1px] h-8 bg-[#6B6B63] animate-pulse" />
        <p
          className="text-[11px] text-[#9B9B92] uppercase tracking-widest"
          style={{ fontFamily: "var(--font-jetbrains)" }}
        >
          scroll
        </p>
      </div>
    </section>
  );
}
