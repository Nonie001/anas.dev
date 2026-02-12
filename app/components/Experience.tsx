import { EXPERIENCES } from "@/app/data/resume-data";
import { HiOutlineLocationMarker } from "react-icons/hi";

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
          <p className="max-w-md text-sm text-[var(--text-dim)]">
            เส้นทางอาชีพและประสบการณ์การพัฒนา
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Line */}
          <div className="absolute left-[7px] top-3 h-[calc(100%-24px)] w-px bg-gradient-to-b from-[var(--border-hover)] via-[var(--border)] to-transparent" />

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
                    <span className="absolute inset-0 rounded-full bg-[var(--text)]/10" />
                    <span className="relative left-[3.5px] top-[3.5px] h-2 w-2 rounded-full bg-[var(--text)]" />
                  </span>
                </div>

                {/* Card */}
                <div className="card p-4 sm:p-6">
                  {/* Top row */}
                  <div className="mb-3 flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="text-base font-bold">{exp.role}</h3>
                      <p className="text-sm font-semibold text-[var(--text-muted)]">
                        {exp.company}
                      </p>
                    </div>
                    <span className="shrink-0 rounded-full border border-[var(--border)] bg-[var(--bg-card)] px-3 py-1 text-xs font-semibold text-[var(--text-muted)]">
                      {exp.period}
                    </span>
                  </div>

                  {/* Location */}
                  <div className="mb-3 flex items-center gap-1.5 text-xs text-[var(--text-dim)]">
                    <HiOutlineLocationMarker size={12} />
                    {exp.location}
                  </div>

                  {/* Description */}
                  <p className="mb-4 text-sm leading-relaxed text-[var(--text-dim)]">
                    {exp.desc}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {exp.tags.map((t) => (
                      <span key={t} className="tag text-[0.7rem]">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
