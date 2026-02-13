import { motion } from "motion/react";
import type { CSSProperties, PropsWithChildren } from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.33,
    },
  }
}

type GridCardProps = {
  templateCols?: string; // Specify a custom value for css property to define grid cols
};

export default function GridCard({ children, templateCols = "1fr" }: PropsWithChildren<GridCardProps>) {
  const cssGridCols = { "--card-cols": templateCols } as CSSProperties;
  return (
    <motion.div
      style={{ ...cssGridCols, gridTemplateColumns: "var(--card-cols)" }}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="grid gap-8"
    >
      {children}
    </motion.div>
  );
}