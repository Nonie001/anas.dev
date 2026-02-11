"use client";

import { PROJECTS } from "@/app/data/resume-data";
import { HiOutlineExternalLink, HiArrowLeft, HiOutlineGlobe, HiCheckCircle, HiOutlineArrowRight } from "react-icons/hi";
import Link from "next/link";
import { useReveal } from "@/app/hooks/useReveal";
import { notFound } from "next/navigation";
import { use } from "react";

interface ProjectDetailProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function ProjectDetail({ params }: ProjectDetailProps) {
  const { slug } = use(params);
  const revealRef = useReveal();
  const project = PROJECTS.find(p => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div ref={revealRef} className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-28">
        {/* Header */}
        <div data-reveal className="mb-8 sm:mb-14">
          <div className="mb-6 flex items-center gap-4">
            <Link 
              href="/projects" 
              className="inline-flex items-center gap-2 text-sm text-[var(--text-dim)] transition-colors hover:text-[var(--text)]"
            >
              <HiArrowLeft size={16} />
              กลับไปโปรเจคทั้งหมด
            </Link>
            
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--text)] transition-all hover:opacity-70"
              >
                <HiOutlineExternalLink size={16} />
                เปิดเว็บไซต์
              </a>
            )}
          </div>

          {/* Project Category */}
          <span className="mb-3 block text-sm font-semibold uppercase tracking-[0.15em] text-[var(--text-dim)]">
            {project.subtitle}
          </span>

          {/* Project Title */}
          <h1 className="mb-6 text-4xl font-black tracking-tight sm:text-5xl md:text-6xl">
            {project.title}
          </h1>

          {/* Project Description */}
          <p className="mb-8 text-lg leading-relaxed text-[var(--text-muted)]">
            {project.desc}
          </p>
        </div>

        {/* Project Image */}
        <div data-reveal className="mb-12">
          <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-[var(--bg-card)]">
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover"
            />
            <div 
              className="absolute left-0 top-0 h-2 w-full"
              style={{
                background: `linear-gradient(90deg, ${project.color}, transparent)`,
              }}
            />
          </div>
        </div>

        <div className="grid gap-12 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Features Section */}
            <div data-reveal className="mb-12">
              <h2 className="mb-6 text-2xl font-bold">ฟีเจอร์หลัก</h2>
              <div className="space-y-3">
                {project.features.map((feature, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 rounded-lg bg-[var(--bg-card)] p-4 transition-colors hover:bg-[var(--bg-hover)]"
                  >
                    <HiCheckCircle 
                      className="mt-0.5 shrink-0" 
                      style={{ color: project.color }}
                      size={20} 
                    />
                    <span className="text-[var(--text-muted)]">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies Used */}
            <div data-reveal className="mb-12">
              <h2 className="mb-6 text-2xl font-bold">เทคโนโลยีที่ใช้</h2>
              <div className="flex flex-wrap gap-3">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-[var(--bg-card)] px-4 py-2 text-sm font-semibold transition-colors hover:bg-[var(--bg-hover)]"
                    style={{ 
                      borderLeft: `3px solid ${project.color}` 
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Project Info */}
            <div data-reveal className="rounded-xl bg-[var(--bg-card)] p-6">
              <h3 className="mb-4 text-lg font-bold">ข้อมูลโปรเจค</h3>
              
              <div className="space-y-4">
                <div>
                  <dt className="text-sm font-semibold text-[var(--text-muted)]">ประเภท</dt>
                  <dd className="text-[var(--text)]">{project.subtitle}</dd>
                </div>
                
                <div>
                  <dt className="text-sm font-semibold text-[var(--text-muted)]">เทคโนโลยีหลัก</dt>
                  <dd className="text-[var(--text)]">{project.tech[0]}</dd>
                </div>

                {project.url && (
                  <div>
                    <dt className="text-sm font-semibold text-[var(--text-muted)]">เว็บไซต์</dt>
                    <dd>
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[var(--text)] transition-colors hover:opacity-70"
                      >
                        <HiOutlineGlobe size={16} />
                        ดูเว็บไซต์
                      </a>
                    </dd>
                  </div>
                )}
              </div>
            </div>

            {/* Action Button */}
            {project.url && (
              <div data-reveal>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-xl px-6 py-4 text-center font-bold text-white transition-all hover:scale-105"
                  style={{
                    background: `linear-gradient(135deg, ${project.color}, ${project.color}99)`,
                  }}
                >
                  เปิดโปรเจคนี้
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Other Projects */}
        <div data-reveal className="mt-16">
          <h2 className="mb-8 text-2xl font-bold">โปรเจคอื่นๆ</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.filter(p => p.slug !== project.slug)
              .slice(0, 3)
              .map((otherProject) => (
              <Link
                key={otherProject.slug}
                href={`/projects/${otherProject.slug}`}
                className="group rounded-xl bg-[var(--bg-card)] p-4 transition-all hover:bg-[var(--bg-hover)] hover:scale-105"
              >
                <div className="mb-3 flex items-center justify-between">
                  <otherProject.Icon 
                    size={24} 
                    style={{ color: otherProject.color }} 
                  />
                  <HiOutlineArrowRight 
                    className="transition-transform group-hover:translate-x-1" 
                    size={16} 
                  />
                </div>
                <h3 className="mb-2 font-bold text-[var(--text)]">{otherProject.title}</h3>
                <p className="text-sm text-[var(--text-muted)]">{otherProject.subtitle}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}