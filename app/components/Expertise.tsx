import {
  SKILLS_WEB,
  SKILLS_MOBILE,
  SKILLS_TOOLS,
} from "@/app/data/resume-data";
import type { Skill } from "@/app/data/resume-data";
import { HiOutlineCode, HiOutlineDeviceMobile, HiOutlineCog } from "react-icons/hi";

function SkillGroup({
  title,
  icon,
  skills,
  delay,
}: {
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
  delay: number;
}) {
  return (
    <div
      data-reveal
      style={{ transitionDelay: `${delay}ms` }}
      className="card p-4 sm:p-6"
    >
      <div className="mb-3 flex items-center gap-3 sm:mb-5">
        <span className="text-[var(--text-dim)]">{icon}</span>
        <h3 className="text-sm font-bold uppercase tracking-wider">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((s) => (
          <div
            key={s.name}
            className="group flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--bg)] px-3.5 py-2 transition-all hover:border-[var(--border-hover)] hover:bg-[var(--bg-hover)]"
          >
            <s.icon
              className="text-sm transition-all group-hover:scale-110"
              style={{ color: s.color }}
            />
            <span className="text-xs font-medium text-[var(--text-muted)] transition-colors group-hover:text-[var(--text)]">
              {s.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Expertise() {
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

        {/* Skill groups */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <SkillGroup
            title="Web Development"
            icon={<HiOutlineCode size={18} />}
            skills={SKILLS_WEB}
            delay={0}
          />
          <SkillGroup
            title="Mobile Development"
            icon={<HiOutlineDeviceMobile size={18} />}
            skills={SKILLS_MOBILE}
            delay={100}
          />
          <SkillGroup
            title="Tools & Database"
            icon={<HiOutlineCog size={18} />}
            skills={SKILLS_TOOLS}
            delay={200}
          />
        </div>

        {/* Marquee skill ticker */}
        <div data-reveal className="relative mt-12 overflow-hidden py-4">
          <div className="marquee-track">
            {[...Array(2)].map((_, setIdx) => (
              <div key={setIdx} className="flex items-center gap-8 px-4">
                {[...SKILLS_WEB, ...SKILLS_MOBILE, ...SKILLS_TOOLS].map(
                  (s, i) => (
                    <div
                      key={`${setIdx}-${i}`}
                      className="flex shrink-0 items-center gap-2 text-[var(--text-dim)]"
                    >
                      <s.icon size={14} />
                      <span className="text-xs font-medium">{s.name}</span>
                    </div>
                  )
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
