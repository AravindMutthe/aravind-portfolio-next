import { CONTACT } from "@/lib/site";

export default function SiteFooter() {
  return (
    <footer className="relative mt-11 overflow-hidden border-t border-white/[0.07] bg-[#07070d] px-0 py-[46px] text-[12.5px] text-[#5c5c78]">
      <div
        className="absolute inset-x-[10%] top-0 h-px opacity-60"
        style={{ background: "linear-gradient(135deg,#4d7cfe,#8b5cf6 48%,#ec4899)" }}
      />
      <div className="mx-auto flex max-w-[1120px] flex-wrap items-center justify-between gap-4 px-7">
        <span>© 2026 Aravind Mutte · Hyderabad, India</span>
        <div className="flex gap-2">
          <a href={CONTACT.linkedin} target="_blank" rel="noopener" className="border-l border-white/15 pl-3 pr-3 transition-colors hover:text-white first:border-l-0 first:pl-0">
            LinkedIn
          </a>
          <a href={CONTACT.github} target="_blank" rel="noopener" className="border-l border-white/15 pl-3 pr-3 transition-colors hover:text-white">
            GitHub
          </a>
          <a href={`mailto:${CONTACT.email}`} className="border-l border-white/15 pl-3 transition-colors hover:text-white">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
