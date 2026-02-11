import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineDeviceMobile,
  HiOutlineSparkles,
  HiOutlineGlobe,
  HiOutlineCalculator,
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
  image: string;
  slug: string;
  features: string[];
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
  email: "anas.aouming@gmail.com",
  phone: "098-113-5654",
  location: "Ramkhamhaeng, Bangkapi, Bangkok, Thailand",
  github: "https://github.com/Nonie001",
  github2: "https://github.com/SP-Nut",
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
    role: "Web Master",
    company: "SP Group (เอสพี กรุ๊ป)",
    location: "Bangkok, Thailand",
    period: "2024 – ปัจจุบัน",
    desc: "ดูแลและพัฒนาเว็บไซต์ของบริษัทในเครือ SP Group ได้แก่ SP Kansard, SP Warehouse และ SP Hardwares รับผิดชอบงานด้าน Digital Marketing การยิงโฆษณา (Ads), การทำ SEO และพัฒนาเว็บไซต์ใหม่",
    tags: ["Web Development", "SEO", "Digital Marketing", "Google Ads"],
    url: "https://spkansard.com/",
  },
];

/* ─── Projects ─── */
export const PROJECTS: Project[] = [
  {
    title: "SP Kansard Company Website",
    subtitle: "Corporate Website",
    desc: "พัฒนาเว็บไซต์บริษัทเพื่อแสดงข้อมูลสินค้าและบริการ ออกแบบโครงสร้างเว็บไซต์ให้รองรับ SEO เน้น UX/UI เพื่อให้ลูกค้าเข้าถึงข้อมูลได้ง่าย",
    tech: ["React", "Next.js", "SEO", "Responsive Design"],
    Icon: HiOutlineGlobe,
    color: "#818cf8",
    url: "https://spkansard.com/",
    image: "/images/projects/sp-kansard.svg",
    slug: "sp-kansard-company-website",
    features: [
      "ออกแบบโครงสร้างเว็บไซต์ให้รองรับ SEO",
      "เน้น UX/UI เพื่อให้ลูกค้าเข้าถึงข้อมูลได้ง่าย",
      "ดูแลการ deploy และจัดการระบบเว็บไซต์",
      "Responsive Design รองรับทุกอุปกรณ์"
    ]
  },
  {
    title: "SP Warehouse",
    subtitle: "E-commerce Website",
    desc: "พัฒนาเว็บไซต์ขายวัสดุและสินค้าออนไลน์ ระบบเลือกซื้อสินค้า (Online Shopping) ออกแบบระบบแสดงสินค้าและจัดการข้อมูล รองรับการขยายระบบในอนาคต",
    tech: ["React", "Next.js", "E-commerce", "Database Design"],
    Icon: HiOutlineGlobe,
    color: "#22d3ee",
    url: "https://spwarehouse9.com/",
    image: "/images/projects/sp-warehouse.svg",
    slug: "sp-warehouse-ecommerce",
    features: [
      "ระบบเลือกซื้อสินค้า (Online Shopping)",
      "ออกแบบระบบแสดงสินค้าและจัดการข้อมูล",
      "รองรับการขยายระบบในอนาคต",
      "ระบบจัดการสินค้าและคลังสินค้า"
    ]
  },
  {
    title: "SP Hardwares Website",
    subtitle: "Hardware E-commerce",
    desc: "พัฒนาเว็บไซต์สินค้า Hardware และวัสดุ จัดโครงสร้างเว็บไซต์ให้ใช้งานง่าย ปรับ performance และ UX ให้เหมาะกับผู้ใช้งานจริง",
    tech: ["React", "Next.js", "Performance Optimization", "UX Design"],
    Icon: HiOutlineGlobe,
    color: "#f472b6",
    url: "https://sphardwares.com/",
    image: "/images/projects/sp-hardwares.svg",
    slug: "sp-hardwares-website",
    features: [
      "จัดโครงสร้างเว็บไซต์ให้ใช้งานง่าย",
      "ปรับ performance และ UX ให้เหมาะกับผู้ใช้งานจริง",
      "แสดงสินค้า Hardware และวัสดุ",
      "ระบบค้นหาและกรองสินค้าที่มีประสิทธิภาพ"
    ]
  },
  {
    title: "Weekend POS System",
    subtitle: "Point of Sale Application",
    desc: "พัฒนาระบบ POS สำหรับร้านกาแฟ ระบบขายหน้าร้าน ระบบสมาชิกและสะสมแต้ม สรุปยอดขายและรายงาน ออกใบเสร็จและพิมพ์บิล Dashboard สำหรับจัดการร้าน",
    tech: ["React", "Next.js", "Dashboard", "POS System"],
    Icon: HiOutlineSparkles,
    color: "#10b981",
    url: "https://weekend-pos.vercel.app/pos",
    image: "/images/projects/weekend-pos.svg",
    slug: "weekend-pos-system",
    features: [
      "ระบบขายหน้าร้าน (Point of Sale)",
      "ระบบสมาชิกและสะสมแต้ม (Loyalty Program)",
      "สรุปยอดขายและรายงานต่าง ๆ",
      "ออกใบเสร็จและพิมพ์บิลได้",
      "Dashboard สำหรับจัดการร้าน"
    ]
  },
  {
    title: "Muslim Plus",
    subtitle: "Muslim Center Mobile App",
    desc: "พัฒนาแอปมือถือสำหรับผู้ใช้งานชาวมุสลิม แสดงเวลาละหมาดในประเทศไทย รวมฟีเจอร์ด้านศาสนาในแอปเดียว ปรับปรุง UI/UX และระบบแจ้งเตือน",
    tech: ["Flutter", "Dart", "Firebase", "Push Notifications"],
    Icon: HiOutlineDeviceMobile,
    color: "#8b5cf6",
    url: "https://play.google.com/store/apps/details?id=com.anasauming.muslimplus",
    image: "/images/projects/muslim-plus.svg",
    slug: "muslim-plus-app",
    features: [
      "แสดงเวลาละหมาดในประเทศไทย",
      "รวมฟีเจอร์ด้านศาสนาในแอปเดียว",
      "ปรับปรุง UI/UX และระบบแจ้งเตือน",
      "ดาวน์โหลดได้จาก Google Play Store"
    ]
  },
  {
    title: "ระบบคำนวณราคากันสาด",
    subtitle: "Price Calculator Web App",
    desc: "ระบบคำนวณราคากันสาดออนไลน์ ช่วยให้ลูกค้าสามารถคำนวณราคาได้ด้วยตนเอง เลือกขนาด วัสดุ และรูปแบบกันสาดที่ต้องการ พร้อมแสดงผลราคาทันที",
    tech: ["React", "Next.js", "Calculator", "UX Design"],
    Icon: HiOutlineCalculator,
    color: "#f59e0b",
    url: "https://cal-customer.vercel.app/",
    image: "/images/projects/canopy-calculator.svg",
    slug: "canopy-price-calculator",
    features: [
      "คำนวณราคากันสาดตามขนาดที่ต้องการ",
      "เลือกวัสดุและรูปแบบกันสาดได้หลากหลาย",
      "แสดงผลราคาแบบ Real-time",
      "ใช้งานง่าย UI/UX ทันสมัย",
      "รองรับการใช้งานบนมือถือ"
    ]
  },
];

/* ─── Education ─── */
export const EDUCATION: Education[] = [
  {
    degree: "ปริญญาตรี",
    field: "วิศวกรรมคอมพิวเตอร์ (Computer Engineering)",
    school: "มหาวิทยาลัยเกษตรศาสตร์",
    period: "2020 – 2024",
    detail: "ศึกษาด้านวิศวกรรมคอมพิวเตอร์ เน้น Web Development & Mobile Application Development",
  },
];

/* ─── Contact ─── */
export const CONTACTS: ContactLink[] = [
  {
    icon: <HiOutlineMail />,
    label: "Email",
    value: "anas.aouming@gmail.com",
    href: "mailto:anas.aouming@gmail.com",
  },
  {
    icon: <HiOutlinePhone />,
    label: "Phone",
    value: "098-113-5654",
    href: "tel:+66981135654",
  },
  {
    icon: <SiGithub />,
    label: "GitHub (Personal)",
    value: "github.com/Nonie001",
    href: "https://github.com/Nonie001",
  },
  {
    icon: <SiGithub />,
    label: "GitHub (Work)",
    value: "github.com/SP-Nut",
    href: "https://github.com/SP-Nut",
  },
];
