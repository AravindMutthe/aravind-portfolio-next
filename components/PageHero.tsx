"use client";

import { ReactNode } from "react";
import Reveal from "./Reveal";

export default function PageHero({
  index,
  eyebrow,
  title,
  lead,
  children,
}: {
  index: string;
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <header className="relative overflow-hidden px-7 pb-[46px] pt-[158px] text-center">
      <div className="orb left-[-140px] top-[40px] h-[360px] w-[360px] bg-[#8b5cf6]" />
      <div className="orb right-[-120px] top-[120px] h-[320px] w-[320px] bg-[#22d3ee] [animation-delay:-7s]" />
      <div className="relative mx-auto max-w-[1120px]">
        <Reveal>
          <div className="mb-[18px] inline-flex items-center gap-[10px] text-[12px] font-bold uppercase tracking-[0.22em] text-[#9b9bb5]">
            <span
              className="grid h-[26px] w-[26px] place-items-center rounded-full text-[12px] text-white shadow-[0_4px_14px_rgba(139,92,246,0.5)]"
              style={{ background: "linear-gradient(135deg,#4d7cfe,#8b5cf6 48%,#ec4899)" }}
            >
              {index}
            </span>
            {eyebrow}
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="mb-[18px] text-[clamp(42px,5.8vw,68px)] font-extrabold leading-[1.06] tracking-[-0.04em] text-white">
            {title}
          </h1>
        </Reveal>
        {lead && (
          <Reveal delay={0.16}>
            <p className="mx-auto max-w-[660px] text-[clamp(16px,2vw,19px)] text-[#b9b9cf]">{lead}</p>
          </Reveal>
        )}
        {children}
      </div>
    </header>
  );
}
