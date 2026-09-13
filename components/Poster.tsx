"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { asset } from "@/lib/site";

export default function Poster({
  src,
  alt,
  tall = false,
  eager = false,
  className = "",
}: {
  src: string;
  alt: string;
  tall?: boolean;
  eager?: boolean;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [36, -36]);

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden rounded-[28px] border border-white/10 bg-[#0a0a14] shadow-[0_30px_90px_rgba(0,0,0,0.6)] ${className}`}
    >
      <motion.img
        src={asset(src)}
        alt={alt}
        loading={eager ? "eager" : "lazy"}
        style={{ y }}
        className={`block w-full transition-transform duration-[1500ms] ease-[cubic-bezier(0.2,0.7,0.2,1)] hover:scale-105 ${
          tall ? "h-[min(62vh,560px)] object-cover object-center" : "h-auto"
        }`}
      />
      <div className="poster-glow" />
    </div>
  );
}
