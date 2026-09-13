"use client";

import { ReactNode, useEffect } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.4 });
  return (
    <motion.div
      className="fixed inset-x-0 top-0 z-[200] h-[3px] origin-left"
      style={{
        scaleX,
        background: "linear-gradient(135deg,#4d7cfe,#8b5cf6 48%,#ec4899)",
        boxShadow: "0 0 12px rgba(139,92,246,0.8)",
      }}
    />
  );
}

export default function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <AnimatePresence mode="wait">
      <motion.main
        key={pathname}
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -14, transition: { duration: 0.28 } }}
        transition={{ duration: 0.55, ease: [0.2, 0.7, 0.2, 1] }}
      >
        {children}
      </motion.main>
    </AnimatePresence>
  );
}
