import { PROJECTS } from "@/app/data/resume-data";
import { HiOutlineArrowRight } from "react-icons/hi";

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
          <p className="max-w-md text-sm text-[#555]">
            โปรเจคที่ได้ออกแบบและพัฒนาด้วยตนเอง
          </p>
        </div>

        {/* Featured project */}
        <div data-reveal className="mb-8">
          <span className="mb-3 block text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[#444]">
            Featured Project
          </span>
        </div>

        {/* Project cards */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p, i) => (
            <div
              key={i}
              data-reveal
              style={{ transitionDelay: `${i * 120}ms` }}
              className="card group relative overflow-hidden"
            >
              {/* Top accent */}
              <div
                className="h-[2px] w-full"
                style={{
                  background: `linear-gradient(90deg, ${p.color}, transparent)`,
                }}
              />

              <div className="p-4 sm:p-6">
                {/* Subtitle */}
                <span className="mb-1 block text-[0.65rem] font-semibold uppercase tracking-[0.15em] text-[#444]">
                  {p.subtitle}
                </span>

                {/* Title row */}
                <div className="mb-4 flex items-start justify-between gap-3">
                  <h3 className="text-lg font-bold transition-colors group-hover:text-white">
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
                <p className="mb-5 text-[0.8rem] leading-relaxed text-[#555]">
                  {p.desc}
                </p>

                {/* Tags */}
                <div className="mb-4 flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span key={t} className="tag text-[0.6rem]">
                      {t}
                    </span>
                  ))}
                </div>

                {/* View link */}
                <div className="flex items-center gap-1.5 text-xs font-semibold text-[#444] transition-colors group-hover:text-white">
                  View Project
                  <HiOutlineArrowRight className="transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
