import { motion, type Variants } from "motion/react";
import type { PropsWithChildren } from "react";

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: [0.215, 0.61, 0.355, 1] },
  },
};

export default function GridItem({ children }: PropsWithChildren) {
  return (
    <motion.article
      variants={itemVariants}
      className="shadow-md shadow-neutral-300 bg-white font-secondary"
    >
      {children}
    </motion.article>
  );
}
