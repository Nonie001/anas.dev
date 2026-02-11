import { EXPERIENCES, EDUCATION } from "@/app/data/resume-data";
import { HiOutlineLocationMarker, HiOutlineAcademicCap } from "react-icons/hi";

export function Experience() {
  return (
    <section id="experience" className="px-4 py-16 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div data-reveal className="mb-8 sm:mb-14">
          <span className="section-num mb-3 block sm:mb-4">
            04 {"//"} <span>EXPERIENCE</span>
          </span>
          <h2 className="mb-2 text-2xl font-black tracking-tight sm:mb-3 sm:text-4xl md:text-5xl">
            ประสบการณ์ทำงาน
          </h2>
          <p className="max-w-md text-sm text-[#555]">
            เส้นทางอาชีพและประสบการณ์การพัฒนา
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Line */}
          <div className="absolute left-[7px] top-3 h-[calc(100%-24px)] w-px bg-gradient-to-b from-[#333] via-[#222] to-transparent" />

          <div className="space-y-12">
            {EXPERIENCES.map((exp, i) => (
              <div
                key={i}
                data-reveal="left"
                style={{ transitionDelay: `${i * 150}ms` }}
                className="relative pl-8 sm:pl-12"
              >
                {/* Dot */}
                <div className="absolute left-0 top-2.5">
                  <span className="relative flex h-[15px] w-[15px]">
                    <span className="absolute inset-0 rounded-full bg-white/10" />
                    <span className="relative left-[3.5px] top-[3.5px] h-2 w-2 rounded-full bg-white" />
                  </span>
                </div>

                {/* Card */}
                <div className="card p-4 sm:p-6">
                  {/* Top row */}
                  <div className="mb-3 flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="text-base font-bold">{exp.role}</h3>
                      <p className="text-sm font-semibold text-[#666]">
                        {exp.company}
                      </p>
                    </div>
                    <span className="shrink-0 rounded-full border border-[#1f1f1f] bg-[#111] px-3 py-1 text-[0.65rem] font-semibold text-[#666]">
                      {exp.period}
                    </span>
                  </div>

                  {/* Location */}
                  <div className="mb-3 flex items-center gap-1.5 text-[0.7rem] text-[#444]">
                    <HiOutlineLocationMarker size={12} />
                    {exp.location}
                  </div>

                  {/* Description */}
                  <p className="mb-4 text-[0.82rem] leading-relaxed text-[#555]">
                    {exp.desc}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {exp.tags.map((t) => (
                      <span key={t} className="tag text-[0.6rem]">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Education ── */}
        <div data-reveal className="mt-20 mb-8">
          <span className="section-num mb-4 block">
            <span>EDUCATION</span>
          </span>
        </div>

        {EDUCATION.map((edu, i) => (
          <div
            key={i}
            data-reveal
            style={{ transitionDelay: `${i * 100}ms` }}
            className="card flex flex-col gap-3 p-4 sm:flex-row sm:items-start sm:gap-4 sm:p-6"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#1a1a1a] text-[#555]">
              <HiOutlineAcademicCap size={22} />
            </div>
            <div>
              <h3 className="text-base font-bold">{edu.degree}</h3>
              <p className="text-sm font-semibold text-[#666]">{edu.field}</p>
              <p className="text-xs text-[#444]">{edu.school}</p>
              <span className="mt-1 inline-block text-[0.65rem] text-[#444]">
                {edu.period}
              </span>
              <p className="mt-3 text-[0.82rem] leading-relaxed text-[#555]">
                {edu.detail}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
