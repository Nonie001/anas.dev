import { CONTACTS, PERSONAL } from "@/app/data/resume-data";
import { HiOutlineArrowRight } from "react-icons/hi";

export function Contact() {
  return (
    <section id="contact" className="px-4 py-16 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div data-reveal className="mb-8 sm:mb-14">
          <span className="section-num mb-3 block sm:mb-4">
            05 {"//"} <span>CONTACT</span>
          </span>
          <h2 className="mb-2 text-2xl font-black tracking-tight sm:mb-3 sm:text-4xl md:text-5xl">
            มาทำงานด้วยกัน
          </h2>
          <p className="max-w-md text-sm text-[var(--text-dim)]">
            พร้อมรับงานและโอกาสใหม่ๆ เสมอครับ ติดต่อผมได้เลย
          </p>
        </div>

        {/* Big email CTA */}
        <a
          href={`mailto:${PERSONAL.email}`}
          data-reveal
          className="group mb-8 flex flex-col gap-4 rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] px-5 py-6 transition-all hover:border-[var(--border-hover)] hover:bg-[var(--bg-hover)] sm:mb-12 sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:py-8"
        >
          <div>
            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--text-dim)]">
              ส่งอีเมลถึงผม
            </p>
            <p className="text-base font-bold text-[var(--text)] sm:text-2xl md:text-3xl">
              {PERSONAL.email}
            </p>
          </div>
          <div className="hidden h-12 w-12 items-center justify-center rounded-full border border-[var(--border)] transition-all group-hover:border-[var(--border-hover)] group-hover:bg-[var(--text)] group-hover:text-[var(--bg)] sm:flex">
            <HiOutlineArrowRight className="transition-transform group-hover:translate-x-1" />
          </div>
        </a>

        {/* Contact links */}
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {CONTACTS.map((c, i) => (
            <a
              key={i}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              data-reveal
              style={{ transitionDelay: `${i * 80}ms` }}
              className="card group flex items-center gap-3 p-4 sm:gap-4 sm:p-5"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--bg-hover)] text-lg text-[var(--text-dim)] transition-colors group-hover:bg-[var(--text)] group-hover:text-[var(--bg)]">
                {c.icon}
              </span>
              <div className="min-w-0">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.15em] text-[var(--text-dim)]">
                  {c.label}
                </p>
                <p className="truncate text-sm font-semibold text-[var(--text-muted)] transition-colors group-hover:text-[var(--text)]">
                  {c.value}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
