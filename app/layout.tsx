import type { Metadata } from "next";
import { Prompt } from "next/font/google";
import "./globals.css";

const prompt = Prompt({
  variable: "--font-prompt",
  subsets: ["latin", "thai"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Anas Aoming | Web & Mobile Developer",
  description:
    "Portfolio & Resume ของ อานัส เอามิง — Full-Stack Web Developer & Mobile App Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" className="scroll-smooth">
      <body className={`${prompt.variable} font-(family-name:--font-prompt) antialiased`}>
        {children}
      </body>
    </html>
  );
}
