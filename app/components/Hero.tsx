"use client";

import { useTheme } from "@/app/context/ThemeContext";
import { PERSONAL } from "@/app/data/resume-data";
import { HiOutlineArrowDown } from "react-icons/hi";
import { GeoCubes } from "./GeoCubes";

export function Hero() {
  const { theme } = useTheme();
  
  const bgStyle = theme === 'dark' 
    ? { background: "radial-gradient(ellipse at 50% 35%, #162030 0%, #0c0c0c 65%)" }
    : { background: "radial-gradient(ellipse at 50% 40%, #f0f2f5 0%, #d8dde4 45%, #b8c2cc 75%, #a0aab5 100%)" };

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 sm:px-6"
      style={bgStyle}
    >
      {/* 3D Geometric cubes */}
      <GeoCubes />

      {/* Content — centered, above cubes */}
      <div className="relative z-20 flex flex-col items-center text-center">
        {/* Greeting */}
        <div className="anim-up mb-4 flex items-center gap-2 sm:mb-6 sm:gap-3">
          <span className="flex h-2.5 w-2.5 items-center justify-center">
            <span className="absolute h-2.5 w-2.5 animate-ping rounded-full bg-emerald-400 opacity-60" />
            <span className="relative h-2.5 w-2.5 rounded-full bg-emerald-400" />
          </span>
          <span className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[var(--text-dim)] sm:text-xs sm:tracking-[0.25em]">
            Available for work
          </span>
        </div>

        {/* Name */}
        <h1 className="anim-up d1 mb-4 text-4xl font-light leading-[1.08] tracking-tight sm:mb-6 sm:text-6xl md:text-8xl lg:text-[10rem]">
          <span className="text-[var(--text)] drop-shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
            {PERSONAL.name}
          </span>
        </h1>

        {/* Title */}
        <h2 className="anim-up d2 mb-6 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-[var(--text-muted)] sm:mb-10 sm:text-sm sm:tracking-[0.3em] md:text-lg">
          {PERSONAL.title}
        </h2>

        {/* Bio */}
        <p className="anim-up d3 mb-8 max-w-xs text-[0.82rem] leading-relaxed text-[var(--text-muted)] sm:mb-12 sm:max-w-lg sm:text-[0.9rem]">
          {PERSONAL.bio}
        </p>

        {/* CTA */}
        <div className="anim-up d4 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <a
            href="#contact"
            className="group flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--text)] px-5 py-3 text-sm font-bold text-[var(--bg)] transition-all hover:opacity-90 hover:shadow-lg sm:gap-3 sm:px-7 sm:py-3.5"
          >
            ติดต่อผม
            <HiOutlineArrowDown
              aria-hidden="true"
              className="-rotate-90 transition-transform group-hover:translate-x-1"
            />
          </a>
          <a
            href="#work"
            className="flex items-center gap-2 rounded-full border border-[var(--border)] px-5 py-3 text-sm font-bold text-[var(--text)] transition-all hover:bg-[var(--bg-hover)] sm:gap-3 sm:px-7 sm:py-3.5"
          >
            ดูผลงาน
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="anim-in d10 absolute bottom-6 left-1/2 -translate-x-1/2 sm:bottom-8">
        <div className="flex flex-col items-center gap-3">
          <span className="text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-[var(--text-dim)]">
            Scroll
          </span>
          <div className="h-8 w-px bg-linear-to-b from-[var(--text-dim)] to-transparent sm:h-12" />
        </div>
      </div>
    </section>
  );
}
