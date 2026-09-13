"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type Dir = "up" | "left" | "right" | "scale" | "none";

const offsets: Record<Dir, { x: number; y: number; scale: number }> = {
  up: { x: 0, y: 32, scale: 1 },
  left: { x: -40, y: 0, scale: 1 },
  right: { x: 40, y: 0, scale: 1 },
  scale: { x: 0, y: 0, scale: 0.93 },
  none: { x: 0, y: 0, scale: 1 },
};

export default function Reveal({
  children,
  dir = "up",
  delay = 0,
  className = "",
  once = true,
}: {
  children: ReactNode;
  dir?: Dir;
  delay?: number;
  className?: string;
  once?: boolean;
}) {
  const o = offsets[dir];
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x: o.x, y: o.y, scale: o.scale }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once, margin: "-60px" }}
      transition={{ duration: 0.85, delay, ease: [0.2, 0.7, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}
