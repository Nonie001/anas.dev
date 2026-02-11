"use client";

import { useState, useEffect } from "react";
import { SECTIONS, PERSONAL } from "@/app/data/resume-data";
import { SiGithub } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";

export function TopNav() {
  const [open, setOpen] = useState(false);

  // Close on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className="fixed top-0 z-40 w-full">
      {/* Backdrop blur bar */}
      <div className="absolute inset-0 bg-[#0c0c0c]/70 backdrop-blur-md md:bg-transparent md:backdrop-blur-none" />

      <div className="relative mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-6 md:py-5">
        {/* Logo */}
        <a href="#hero" className="text-sm font-bold tracking-wider text-white">
          {PERSONAL.name.split(" ")[0]}
          <span className="text-[#444]"> .</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          {SECTIONS.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="section-num transition-colors hover:text-zinc-300"
            >
              {s.num} {"//"} <span>{s.label}</span>
            </a>
          ))}
        </div>

        {/* Social + hamburger */}
        <div className="flex items-center gap-4">
          <a
            href={PERSONAL.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#555] transition-colors hover:text-white"
          >
            <SiGithub size={16} />
          </a>
          <a
            href={PERSONAL.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#555] transition-colors hover:text-white"
          >
            <FaLinkedinIn size={16} />
          </a>

          {/* Hamburger button — mobile only */}
          <button
            onClick={() => setOpen(!open)}
            className="ml-1 flex h-9 w-9 items-center justify-center rounded-lg border border-[#222] text-white transition-colors hover:bg-[#1a1a1a] md:hidden"
            aria-label="Toggle menu"
          >
            {open ? <HiOutlineX size={20} /> : <HiOutlineMenuAlt3 size={20} />}
          </button>
        </div>
      </div>

      {/* ── Mobile menu overlay ── */}
      <div
        className={`fixed inset-0 top-[56px] z-50 flex flex-col bg-[#0c0c0c]/95 backdrop-blur-xl transition-all duration-300 md:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <nav className="flex flex-1 flex-col items-center justify-center gap-6">
          {SECTIONS.map((s, i) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              onClick={() => setOpen(false)}
              className="text-lg font-semibold text-[#888] transition-colors hover:text-white"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <span className="mr-2 text-xs text-[#444]">{s.num} {"//"}  </span>
              {s.label}
            </a>
          ))}
        </nav>

        {/* Bottom social in mobile menu */}
        <div className="flex items-center justify-center gap-6 pb-12">
          <a href={PERSONAL.github} target="_blank" rel="noopener noreferrer" className="text-[#555] transition-colors hover:text-white">
            <SiGithub size={20} />
          </a>
          <a href={PERSONAL.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#555] transition-colors hover:text-white">
            <FaLinkedinIn size={20} />
          </a>
        </div>
      </div>
    </header>
  );
}
