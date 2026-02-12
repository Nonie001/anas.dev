"use client";

import { useReveal } from "@/app/hooks/useReveal";
import { Sidebar } from "@/app/components/Sidebar";
import { TopNav } from "@/app/components/TopNav";
import { Hero } from "@/app/components/Hero";
import { Expertise } from "@/app/components/Expertise";
import { Work } from "@/app/components/Work";
import { Experience } from "@/app/components/Experience";
import { Education } from "@/app/components/Education";
import { Contact } from "@/app/components/Contact";
import { Footer } from "@/app/components/Footer";

export default function Home() {
  const revealRef = useReveal();

  return (
    <div ref={revealRef} className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <Sidebar />
      <TopNav />
      <Hero />
      <div className="sep" />
      <Expertise />
      <div className="sep" />
      <Work />
      <div className="sep" />
      <Experience />
      <div className="sep" />
      <Education />
      <div className="sep" />
      <Contact />
      <Footer />
    </div>
  );
}
