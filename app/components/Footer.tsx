import { PERSONAL, SECTIONS } from "@/app/data/resume-data";
import { SiGithub } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] px-4 py-8 sm:px-6 sm:py-12">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 sm:gap-8 sm:flex-row sm:items-center sm:justify-between">
        {/* Left */}
        <div>
          <p className="mb-1 text-sm font-bold tracking-wider text-[var(--text)]">
            {PERSONAL.name.split(" ")[0]}
            <span className="text-[var(--text-dim)]"> .</span>
          </p>
          <p className="text-xs text-[var(--text-dim)]">
            © {new Date().getFullYear()} {PERSONAL.nameTh}. All rights reserved.
          </p>
        </div>
        {/* Nav */}
        <div className="flex flex-wrap gap-4 sm:gap-6">
          {SECTIONS.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="text-[0.7rem] font-semibold uppercase tracking-wider text-[var(--text-dim)] transition-colors hover:text-[var(--text)]"
            >
              {s.label}
            </a>
          ))}
        </div>

        {/* Social */}
        <div className="flex gap-4">
          <a
            href={PERSONAL.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--text-dim)] transition-colors hover:text-[var(--text)]"
          >
            <SiGithub size={16} />
          </a>
          <a
            href={PERSONAL.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--text-dim)] transition-colors hover:text-[var(--text)]"
          >
            <FaLinkedinIn size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
