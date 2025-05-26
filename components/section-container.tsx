"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionContainerProps {
  id: string;
  className?: string;
  children: React.ReactNode;
}

export default function SectionContainer({ id, className, children }: SectionContainerProps) {
  return (
    <motion.section
      id={id}
      className={cn("py-12 scroll-mt-20", className)}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {children}
    </motion.section>
  );
}