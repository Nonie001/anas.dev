import { Metadata } from "next";
import { ProjectsClient } from "./components/ProjectsClient";

export const metadata: Metadata = {
  title: "โปรเจคทั้งหมด | Anas Aoming Portfolio",
  description: "รวมผลงานและโปรเจคทั้งหมดของ อานัส เอามิง - Web Developer & Mobile App Developer",
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}