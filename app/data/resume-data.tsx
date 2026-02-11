import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineDeviceMobile,
  HiOutlineSparkles,
  HiOutlineGlobe,
} from "react-icons/hi";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiFlutter,
  SiDart,
  SiFigma,
  SiGit,
  SiGithub,
  SiHtml5,
  SiCss3,
  SiFirebase,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiPython,
} from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import type { IconType } from "react-icons";
import type { ReactNode } from "react";

/* ─── Types ─── */
export interface Skill {
  name: string;
  icon: IconType;
  color: string;
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  desc: string;
  tags: string[];
  url?: string;
}

export interface Project {
  title: string;
  subtitle: string;
  desc: string;
  tech: string[];
  Icon: IconType;
  color: string;
  url?: string;
}

export interface Education {
  degree: string;
  field: string;
  school: string;
  period: string;
  detail: string;
}

export interface ContactLink {
  icon: ReactNode;
  label: string;
  value: string;
  href: string;
}

/* ─── Navigation ─── */
export const SECTIONS = [
  { id: "hero", label: "HOME", num: "01" },
  { id: "expertise", label: "EXPERTISE", num: "02" },
  { id: "work", label: "WORK", num: "03" },
  { id: "experience", label: "EXPERIENCE", num: "04" },
  { id: "contact", label: "CONTACT", num: "05" },
];

/* ─── Personal ─── */
export const PERSONAL = {
  name: "ANAS AOMING",
  nameTh: "อานัส เอามิง",
  title: "SOFTWARE ENGINEER, WEB & MOBILE DEVELOPER.",
  bio: "สร้างเว็บไซต์และแอปมือถือด้วย React, Next.js และ Flutter ออกแบบ UI/UX ที่ทันสมัย ใช้งานง่าย และมีประสิทธิภาพสูง",
  email: "anas@example.com",
  phone: "+66 xx-xxx-xxxx",
  location: "Thailand",
  github: "https://github.com/anas",
  linkedin: "https://linkedin.com/in/anas",
};

/* ─── Skills ─── */
export const SKILLS_WEB: Skill[] = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#fff" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", icon: SiCss3, color: "#1572B6" },
];

export const SKILLS_MOBILE: Skill[] = [
  { name: "Flutter", icon: SiFlutter, color: "#02569B" },
  { name: "Dart", icon: SiDart, color: "#0175C2" },
  { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
];

export const SKILLS_TOOLS: Skill[] = [
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "Figma", icon: SiFigma, color: "#F24E1E" },
];

/* ─── Experience ─── */
export const EXPERIENCES: Experience[] = [
  {
    role: "Web Developer",
    company: "Freelance / Projects",
    location: "Thailand",
    period: "2024 – ปัจจุบัน",
    desc: "ออกแบบและพัฒนาเว็บไซต์ด้วย React, Next.js และ Tailwind CSS รองรับ responsive design, SEO optimization และ performance tuning ให้กับลูกค้าหลายราย",
    tags: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
  },
  {
    role: "Mobile App Developer",
    company: "Freelance / Projects",
    location: "Thailand",
    period: "2023 – ปัจจุบัน",
    desc: "พัฒนา Mobile Application ด้วย Flutter สำหรับ iOS และ Android รองรับ cross-platform พร้อม native-like performance และ UX ที่ลื่นไหล",
    tags: ["Flutter", "Dart", "Firebase", "REST API"],
  },
];

/* ─── Projects ─── */
export const PROJECTS: Project[] = [
  {
    title: "E-Commerce Platform",
    subtitle: "Web Application",
    desc: "ระบบ e-commerce ครบวงจร มีระบบตะกร้า, ชำระเงินออนไลน์, จัดการสินค้า และ dashboard สำหรับ admin",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
    Icon: HiOutlineGlobe,
    color: "#818cf8",
  },
  {
    title: "Delivery App",
    subtitle: "Cross-Platform Mobile App",
    desc: "แอปจัดส่งอาหาร real-time tracking, push notification, ระบบจ่ายเงินออนไลน์ และ in-app chat",
    tech: ["Flutter", "Dart", "Firebase", "Google Maps"],
    Icon: HiOutlineDeviceMobile,
    color: "#22d3ee",
  },
  {
    title: "Portfolio Website",
    subtitle: "Web Application",
    desc: "เว็บไซต์ portfolio แบบ minimal dark theme พร้อม scroll animation และ responsive design",
    tech: ["Next.js", "React", "Tailwind CSS", "CSS Animations"],
    Icon: HiOutlineSparkles,
    color: "#f472b6",
  },
];

/* ─── Education ─── */
export const EDUCATION: Education[] = [
  {
    degree: "ปริญญาตรี",
    field: "Computer Science / IT",
    school: "มหาวิทยาลัย",
    period: "2021 – 2025",
    detail: "ศึกษาด้าน Computer Science เน้น Web Development & Mobile Application Development",
  },
];

/* ─── Contact ─── */
export const CONTACTS: ContactLink[] = [
  {
    icon: <HiOutlineMail />,
    label: "Email",
    value: "anas@example.com",
    href: "mailto:anas@example.com",
  },
  {
    icon: <HiOutlinePhone />,
    label: "Phone",
    value: "+66 xx-xxx-xxxx",
    href: "tel:+66xxxxxxxx",
  },
  {
    icon: <SiGithub />,
    label: "GitHub",
    value: "github.com/anas",
    href: "https://github.com/anas",
  },
  {
    icon: <FaLinkedinIn />,
    label: "LinkedIn",
    value: "Anas Aoming",
    href: "https://linkedin.com/in/anas",
  },
];
