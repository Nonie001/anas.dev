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
  SiFlutter,
  SiDart,
  SiSupabase,
  SiWordpress,
  SiGit,
  SiGithub,
  SiHtml5,
  SiCss3,
  SiPostgresql,
  SiVercel,
} from "react-icons/si";
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

export interface Language {
  name: string;
  level: string;
}

/* ─── Navigation ─── */
export const SECTIONS = [
  { id: "hero", label: "HOME", num: "01" },
  { id: "expertise", label: "EXPERTISE", num: "02" },
  { id: "work", label: "WORK", num: "03" },
  { id: "experience", label: "EXPERIENCE", num: "04" },
  { id: "education", label: "EDUCATION", num: "05" },
  { id: "contact", label: "CONTACT", num: "06" },
];

/* ─── Personal ─── */
export const PERSONAL = {
  name: "ANAS AOMING",
  nameTh: "อานัส เอามิง",
  title: "Full-Stack Developer | Web & Mobile Application",
  bio: "Full-Stack Developer จบวิศวกรรมคอมพิวเตอร์ มหาวิทยาลัยเกษตรศาสตร์ เชี่ยวชาญพัฒนาเว็บไซต์และแอปมือถือครบวงจร ตั้งแต่ออกแบบ UI/UX, พัฒนา Frontend-Backend, วาง SEO, บริหาร Digital Marketing ไปจนถึง Deploy และดูแลระบบจริง มีผลงานหลากหลายที่ใช้งานจริงทั้ง Web Application และ Mobile Application",
  email: "anas.aouming@gmail.com",
  phone: "098-113-5654",
  location: "Ramkhamhaeng, Bangkapi, Bangkok, Thailand",
  github: "https://github.com/Nonie001",
  github2: "https://github.com/SP-Nut",
};

/* ─── Skills ─── */
export const SKILLS_WEB: Skill[] = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#fff" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "WordPress", icon: SiWordpress, color: "#21759B" },
  { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", icon: SiCss3, color: "#1572B6" },
];

export const SKILLS_MOBILE: Skill[] = [
  { name: "Flutter", icon: SiFlutter, color: "#02569B" },
  { name: "Dart", icon: SiDart, color: "#0175C2" },
];

export const SKILLS_TOOLS: Skill[] = [
  { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "Vercel", icon: SiVercel, color: "#000000" },
];

/* ─── Experience ─── */
export const EXPERIENCES: Experience[] = [
  {
    role: "Web Master & Full-Stack Developer",
    company: "SP Group (เอสพี กรุ๊ป)",
    location: "Bangkok, Thailand",
    period: "2024 – ปัจจุบัน",
    desc: "ดูแลและพัฒนาเว็บไซต์ 3 แห่งในเครือ SP Group ได้แก่ SP Kansard, SP Warehouse และ SP Hardwares ด้วย React/Next.js ตั้งแต่ออกแบบ UI/UX จนถึง Deploy ระบบจริง วาง SEO On-page/Off-page จนเว็บไซต์ติดอันดับ Google หน้าแรก บริหารแคมเปญ Google Ads และ Facebook Ads วิเคราะห์ข้อมูลผู้เข้าชมผ่าน Google Analytics เพื่อปรับปรุงประสิทธิภาพอย่างต่อเนื่อง พัฒนาระบบคำนวณราคาสินค้าออนไลน์ช่วยลดภาระทีมขาย ดูแลระบบ Hosting, Domain, SSL และ CI/CD สำหรับ Deploy อัตโนมัติ",
    tags: ["React", "Next.js", "TypeScript", "SEO", "Google Ads", "Facebook Ads", "Google Analytics", "CI/CD"],
    url: "https://spkansard.com/",
  },
  {
    role: "Freelance Digital Marketer",
    company: "งานอิสระ (Freelance)",
    location: "Bangkok, Thailand",
    period: "งานเสริม",
    desc: "รับงานวางแผนประชาสัมพันธ์และการตลาดดิจิทัลให้กับองค์กรภายนอก โดยรับผิดชอบวางกลยุทธ์และบริหารแคมเปญโปรโมทพรรคประชาชาติผ่าน Facebook Page วางแผนคอนเทนต์ให้สอดคล้องกับกลุ่มเป้าหมาย ตั้งค่าและบริหารงบประมาณยิง Facebook Ads เพื่อเพิ่ม Reach, Engagement และ Followers ให้ตรงกลุ่มเป้าหมาย วิเคราะห์ผลลัพธ์แคมเปญเพื่อปรับปรุงประสิทธิภาพอย่างต่อเนื่อง",
    tags: ["Facebook Ads", "Digital Marketing", "Content Strategy", "Branding", "Social Media Marketing"],
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
    tech: ["Flutter", "Dart", "Supabase", "Push Notifications"],
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
  {
    title: "Prayertime Thailand",
    subtitle: "Islamic Web Application",
    desc: "พัฒนา Web Application แสดงเวลาละหมาดทั่วประเทศไทย เชื่อมต่อ Aladhan API ดึงข้อมูลแบบ Real-time พร้อมระบบ Geolocation ตรวจจับตำแหน่งอัตโนมัติ มีฟีเจอร์หาทิศกิบละห์ และเครื่องมือคำนวณซะกาต/มรดก",
    tech: ["React", "Next.js", "API Integration", "Geolocation", "Responsive Design"],
    Icon: HiOutlineGlobe,
    color: "#10b981",
    url: "https://prayertime.in.th/",
    image: "/images/projects/prayertime.svg",
    slug: "prayertime-thailand",
    features: [
      "เชื่อมต่อ Aladhan API แสดงเวลาละหมาดแบบ Real-time",
      "ระบบ Geolocation ตรวจจับตำแหน่งผู้ใช้อัตโนมัติ",
      "คำนวณทิศกิบละห์ (Qibla Direction)",
      "เครื่องมือคำนวณซะกาตและการแบ่งมรดก",
      "Responsive Design รองรับทุกอุปกรณ์",
      "Modern Web Application Architecture"
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
    detail: "ศึกษาด้านวิศวกรรมคอมพิวเตอร์ เน้น Web Development & Mobile Application Development เคยดำรงตำแหน่งคณะกรรมการสภานิสิต มีประสบการณ์จัดกิจกรรมและทำงานเป็นทีม",
  },
];

/* ─── Languages ─── */
export const LANGUAGES: Language[] = [
  {
    name: "Thai",
    level: "Native",
  },
  {
    name: "Bahasa Melayu",
    level: "Native",
  },
  {
    name: "English",
    level: "Intermediate",
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
