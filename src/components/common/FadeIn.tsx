import type { PropsWithChildren } from "react";
import { motion } from "motion/react";

interface FadeInProps {
  delay?: number;
};

export default function FadeIn({ children, delay = 0 }: PropsWithChildren<FadeInProps>) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay, ease: [0.22, 1, 0.36, 1] }}
    >{children}</motion.div>
  );
}
