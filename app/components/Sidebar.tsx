"use client";

import { useEffect, useState } from "react";
import { SECTIONS } from "@/app/data/resume-data";

export function Sidebar() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { threshold: 0.3 }
    );

    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed left-0 top-0 z-50 hidden h-screen w-16 flex-col items-center justify-center gap-6 lg:flex">
      {SECTIONS.map((s) => (
        <a
          key={s.id}
          href={`#${s.id}`}
          className="group relative flex flex-col items-center"
          aria-label={s.label}
        >
          <span
            className={`nav-dot transition-all ${
              active === s.id ? "active scale-125" : ""
            }`}
          />
          {/* Tooltip */}
          <span className="pointer-events-none absolute left-10 whitespace-nowrap rounded bg-[var(--bg-hover)] px-3 py-1.5 text-[0.6rem] font-semibold tracking-wider text-[var(--text-muted)] opacity-0 transition-all group-hover:opacity-100">
            {s.num} {"//"} {s.label}
          </span>
        </a>
      ))}
    </nav>
  );
}
