"use client";

import { EDUCATION, LANGUAGES } from "@/app/data/resume-data";
import { HiAcademicCap, HiGlobeAlt } from "react-icons/hi2";

export function Education() {
  return (
    <section id="education" className="px-4 py-16 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div data-reveal className="mb-8 sm:mb-14">
          <span className="section-num mb-3 block sm:mb-4">
            05 {"//"} <span>EDUCATION</span>
          </span>
          <h2 className="mb-2 text-2xl font-black tracking-tight sm:mb-3 sm:text-4xl md:text-5xl">
            การศึกษาและภาษา
          </h2>
          <p className="max-w-md text-sm text-[var(--text-dim)]">
            ประวัติการศึกษาและทักษะด้านภาษา
          </p>
        </div>

        {/* Education */}
        <div className="mb-16">
          {EDUCATION.map((edu, index) => (
            <div
              key={index}
              data-reveal="left"
              style={{ transitionDelay: `${index * 150}ms` }}
              className="card p-4 sm:p-6"
            >
              <div className="mb-3 flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="text-base font-bold text-[var(--accent)]">
                    {edu.degree}
                  </h3>
                  <p className="text-sm font-semibold">{edu.field}</p>
                  <p className="text-sm text-[var(--text-muted)]">{edu.school}</p>
                </div>
                <span className="shrink-0 rounded-full border border-[var(--border)] bg-[var(--bg-card)] px-3 py-1 text-xs font-semibold text-[var(--text-muted)]">
                  {edu.period}
                </span>
              </div>
              <p className="text-sm text-[var(--text-dim)]">{edu.detail}</p>
            </div>
          ))}
        </div>

        {/* Languages */}
        <div>
          <div data-reveal className="mb-6">
            <div className="flex items-center gap-2">
              <HiGlobeAlt className="text-xl text-[var(--accent)]" />
              <h3 className="text-lg font-bold">Languages</h3>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {LANGUAGES.map((lang, index) => (
              <div
                key={index}
                data-reveal
                style={{ transitionDelay: `${index * 120}ms` }}
                className="card p-4 text-center sm:p-6"
              >
                <h4 className="mb-1 text-base font-semibold">{lang.name}</h4>
                <p className="text-sm text-[var(--accent)]">{lang.level}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
