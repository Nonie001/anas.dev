import {
  SKILLS_WEB,
  SKILLS_MOBILE,
  SKILLS_TOOLS,
} from "@/app/data/resume-data";
import type { Skill } from "@/app/data/resume-data";

export function Expertise() {
  const allSkills: Skill[] = [...SKILLS_WEB, ...SKILLS_MOBILE, ...SKILLS_TOOLS];

  return (
    <section id="expertise" className="px-4 py-16 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div data-reveal className="mb-8 sm:mb-14">
          <span className="section-num mb-3 block sm:mb-4">
            02 {"//"} <span>EXPERTISE</span>
          </span>
          <h2 className="mb-2 text-2xl font-black tracking-tight sm:mb-3 sm:text-4xl md:text-5xl">
            เทคโนโลยีที่ถนัด
          </h2>
          <p className="max-w-md text-sm text-[var(--text-dim)]">
            เครื่องมือและเทคโนโลยีที่ใช้ในการสร้างสรรค์ผลงานทั้งเว็บและมือถือ
          </p>
        </div>

        {/* Skills — single grid */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          {allSkills.map((s, i) => (
            <div
              key={s.name}
              data-reveal
              style={{ transitionDelay: `${i * 50}ms` }}
              className="group flex items-center gap-2.5 rounded-full border border-[var(--border)] bg-[var(--bg-card)] px-5 py-3 transition-all hover:border-[var(--border-hover)] hover:bg-[var(--bg-hover)] hover:-translate-y-1 hover:shadow-lg"
            >
              <s.icon
                className="text-lg transition-transform group-hover:scale-110"
                style={{ color: s.color }}
              />
              <span className="text-sm font-semibold text-[var(--text-muted)] transition-colors group-hover:text-[var(--text)]">
                {s.name}
              </span>
            </div>
          ))}
        </div>

        {/* Marquee skill ticker */}
        <div data-reveal className="relative mt-12 overflow-hidden py-4">
          <div className="marquee-track">
            {[...Array(2)].map((_, setIdx) => (
              <div key={setIdx} className="flex items-center gap-8 px-4">
                {allSkills.map((s, i) => (
                  <div
                    key={`${setIdx}-${i}`}
                    className="flex shrink-0 items-center gap-2 text-[var(--text-dim)]"
                  >
                    <s.icon size={14} />
                    <span className="text-xs font-medium">{s.name}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
