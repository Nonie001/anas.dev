"use client";

import { PROJECTS } from "@/app/data/resume-data";
import { HiOutlineArrowRight, HiOutlineExternalLink, HiArrowLeft } from "react-icons/hi";
import Link from "next/link";
import { useReveal } from "@/app/hooks/useReveal";

export function ProjectsClient() {
  const revealRef = useReveal();

  return (
    <div ref={revealRef} className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-28">
        {/* Header */}
        <div data-reveal className="mb-8 sm:mb-14">
          <Link 
            href="/" 
            className="mb-4 inline-flex items-center gap-2 text-sm text-[var(--text-dim)] transition-colors hover:text-[var(--text)]"
          >
            <HiArrowLeft size={16} />
            กลับไปหน้าหลัก
          </Link>
          
          <h1 className="mb-4 text-4xl font-black tracking-tight sm:text-5xl md:text-6xl">
            ผลงานทั้งหมด
          </h1>
          <p className="max-w-2xl text-lg text-[var(--text-muted)]">
            รวมโปรเจคและผลงานที่ได้ออกแบบและพัฒนาด้วยตนเอง ครอบคลุมทั้งเว็บไซต์ แอปมือถือ และระบบต่างๆ
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, i) => (
            <div
              key={project.slug}
              data-reveal
              style={{ transitionDelay: `${i * 120}ms` }}
              className="group relative overflow-hidden rounded-xl bg-[var(--bg-card)] transition-all duration-300 hover:bg-[var(--bg-hover)]"
            >
              {/* Project Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[var(--bg-card)]/90 via-[var(--bg-card)]/20 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Subtitle */}
                <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-[var(--text-dim)]">
                  {project.subtitle}
                </span>

                {/* Title */}
                <h3 className="mb-3 text-xl font-bold transition-colors group-hover:text-[var(--text)]">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="mb-4 line-clamp-3 text-sm leading-relaxed text-[var(--text-muted)]">
                  {project.desc}
                </p>

                {/* Tech Tags */}
                <div className="mb-6 flex flex-wrap gap-1.5">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span key={tech} className="tag text-xs">
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="tag text-xs">+{project.tech.length - 3}</span>
                  )}
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="flex items-center gap-2 text-sm font-semibold text-[var(--text-dim)] transition-colors group-hover:text-[var(--text)]"
                  >
                    ดูรายละเอียด
                    <HiOutlineArrowRight className="transition-transform group-hover:translate-x-1" />
                  </Link>

                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-8 w-8 items-center justify-center rounded-full text-[var(--text-dim)] transition-all hover:bg-[var(--bg-hover)] hover:text-[var(--text)]"
                    >
                      <HiOutlineExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>

              {/* Top accent */}
              <div
                className="absolute left-0 top-0 h-1 w-full"
                style={{
                  background: `linear-gradient(90deg, ${project.color}, transparent)`,
                }}
              />
            </div>
          ))}
        </div>

        {/* Stats */}
        <div data-reveal className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="text-center">
            <div className="text-3xl font-bold text-[var(--text)]">{PROJECTS.length}</div>
            <div className="text-sm text-[var(--text-muted)]">โปรเจคทั้งหมด</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[var(--text)]">
              {PROJECTS.filter(p => p.subtitle.includes('Website')).length}
            </div>
            <div className="text-sm text-[var(--text-muted)]">เว็บไซต์</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[var(--text)]">
              {PROJECTS.filter(p => p.subtitle.includes('App')).length}
            </div>
            <div className="text-sm text-[var(--text-muted)]">แอปพลิเคชัน</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[var(--text)]">
              {PROJECTS.filter(p => p.subtitle.includes('System')).length}
            </div>
            <div className="text-sm text-[var(--text-muted)]">ระบบ</div>
          </div>
        </div>
      </div>
    </div>
  );
}