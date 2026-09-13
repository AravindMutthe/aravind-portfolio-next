"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { BASE_PATH } from "@/lib/site";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/experience", label: "Experience" },
  { href: "/skills", label: "Skills" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function SiteNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isActive = (h: string) =>
    h === "/" ? pathname === "/" : pathname.startsWith(h);

  return (
    <nav className="fixed inset-x-0 top-0 z-[100] border-b border-white/[0.07] bg-[#05050a]/70 backdrop-blur-[22px]">
      <div className="mx-auto flex h-[62px] max-w-[1120px] items-center justify-between px-7">
        <Link href="/" className="flex items-center gap-[11px] text-[16px] font-extrabold tracking-tight text-white">
          <span
            className="grid h-[33px] w-[33px] place-items-center rounded-[10px] text-[13.5px] font-extrabold text-white shadow-[0_4px_18px_rgba(139,92,246,0.5)] transition-transform duration-300 hover:-rotate-12 hover:scale-110"
            style={{ background: "linear-gradient(135deg,#4d7cfe,#8b5cf6 48%,#ec4899)" }}
          >
            AM
          </span>
          Aravind Mutte
        </Link>

        <div className="hidden items-center gap-[30px] text-[13.5px] font-medium md:flex">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`navlink ${isActive(l.href) ? "active font-bold text-white" : "text-white/60 hover:text-white"}`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <Link
          href="/contact"
          className="btn-grad hidden rounded-full px-5 py-2.5 text-[13px] font-bold md:inline-flex"
        >
          Hire Me
        </Link>

        <button
          className="block p-2.5 md:hidden"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`block h-[2px] w-[22px] rounded bg-white transition-all duration-300 ${open ? "translate-y-[7px] rotate-45" : "mb-[5px]"}`} />
          <span className={`block h-[2px] w-[22px] rounded bg-white transition-all duration-300 ${open ? "scale-x-0 opacity-0" : "mb-[5px]"}`} />
          <span className={`block h-[2px] w-[22px] rounded bg-white transition-all duration-300 ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: [0.2, 0.7, 0.2, 1] }}
            className="border-b border-white/10 bg-[#05050c]/95 px-7 pb-6 backdrop-blur-[24px] md:hidden"
          >
            {LINKS.map((l, i) => (
              <motion.div
                key={l.href}
                initial={{ opacity: 0, x: -14 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 + i * 0.05 }}
              >
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`block border-b border-white/[0.07] py-[15px] text-[16px] ${
                    isActive(l.href) ? "font-bold text-white" : "text-white/70"
                  }`}
                >
                  {l.label}
                </Link>
              </motion.div>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="btn-grad mt-4 inline-flex rounded-full px-6 py-3 text-sm font-bold"
            >
              Hire Me
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

// re-export for asset prefixing consistency
export { BASE_PATH };
