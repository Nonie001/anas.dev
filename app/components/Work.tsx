import { PROJECTS } from "@/app/data/resume-data";
import { HiOutlineArrowRight, HiOutlineExternalLink } from "react-icons/hi";
import Link from "next/link";

export function Work() {
  return (
    <section id="work" className="px-4 py-16 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div data-reveal className="mb-8 sm:mb-14">
          <span className="section-num mb-3 block sm:mb-4">
            03 {"//"} <span>WORK</span>
          </span>
          <h2 className="mb-2 text-2xl font-black tracking-tight sm:mb-3 sm:text-4xl md:text-5xl">
            ผลงานที่ผ่านมา
          </h2>
          <p className="max-w-md text-sm text-[var(--text-dim)]">
            โปรเจคที่ได้ออกแบบและพัฒนาด้วยตนเอง
          </p>
        </div>

        {/* Featured project */}
        <div data-reveal className="mb-8">
          <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.2em] text-[var(--text-dim)]">
            Featured Project
          </span>
        </div>

        {/* Project cards */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.slice(0, 3).map((p, i) => (
            <div
              key={i}
              data-reveal
              style={{ transitionDelay: `${i * 120}ms` }}
              className="card group relative overflow-hidden"
            >
              {/* Top accent */}
              <div
                className="h-0.5 w-full"
                style={{
                  background: `linear-gradient(90deg, ${p.color}, transparent)`,
                }}
              />

              {/* Project Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[var(--bg-card)]/80 via-transparent to-transparent" />
              </div>

              <div className="p-4 sm:p-6">
                {/* Subtitle */}
                <span className="mb-1 block text-xs font-semibold uppercase tracking-[0.15em] text-[var(--text-dim)]">
                  {p.subtitle}
                </span>

                {/* Title row */}
                <div className="mb-4 flex items-start justify-between gap-3">
                  <h3 className="text-lg font-bold transition-colors group-hover:text-[var(--text)]">
                    {p.title}
                  </h3>
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-all group-hover:scale-110"
                    style={{ background: p.color + "15", color: p.color }}
                  >
                    <p.Icon size={20} />
                  </div>
                </div>

                {/* Description */}
                <p className="mb-5 line-clamp-2 text-sm leading-relaxed text-[var(--text-dim)]">
                  {p.desc}
                </p>

                {/* Tags */}
                <div className="mb-4 flex flex-wrap gap-1.5">
                  {p.tech.slice(0, 3).map((t) => (
                    <span key={t} className="tag text-[0.6rem]">
                      {t}
                    </span>
                  ))}
                  {p.tech.length > 3 && (
                    <span className="tag text-[0.6rem]">+{p.tech.length - 3}</span>
                  )}
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between">
                  <Link
                    href={`/projects/${p.slug}`}
                    className="flex items-center gap-1.5 text-xs font-semibold text-[var(--text-dim)] transition-colors group-hover:text-[var(--text)]"
                  >
                    ดูรายละเอียด
                    <HiOutlineArrowRight className="transition-transform group-hover:translate-x-1" />
                  </Link>

                  {p.url && (
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex h-8 w-8 items-center justify-center rounded-full text-[var(--text-dim)] transition-all hover:bg-[var(--bg-hover)] hover:text-[var(--text)]"
                    >
                      <HiOutlineExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div data-reveal className="mt-12 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--bg-card)] px-6 py-3 font-semibold text-[var(--text)] transition-all hover:bg-[var(--bg-hover)] hover:scale-105"
          >
            ดูโปรเจคทั้งหมด ({PROJECTS.length})
            <HiOutlineArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}
