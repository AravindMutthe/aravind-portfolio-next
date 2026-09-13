import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@carbon/styles/css/styles.css";
import "./globals.css";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import PageTransition, { ScrollProgress } from "@/components/PageTransition";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aravind Mutte — Cloud DevOps & SRE Engineer",
  description:
    "Aravind Mutte — Cloud DevOps & Site Reliability Engineer (AWS, Azure, Kubernetes, Terraform), Hyderabad, India. Available for freelance projects and full-time roles.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <ScrollProgress />
        <SiteNav />
        <PageTransition>{children}</PageTransition>
        <SiteFooter />
      </body>
    </html>
  );
}
