import { type Variants, motion } from "motion/react";
import CardSlideUp from "./CardSlideUp";
import { sacraments } from "../data/sacraments";

const variants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

export default function SacramentList() {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="grid min-[1366px]:grid-cols-3 gap-10 min-[820px]:max-[1366px]:grid-cols-2 items-center"
    >
      {sacraments.map(({ id, ...sacrament }) => (
        <CardSlideUp key={id} {...sacrament} />
      ))}
    </motion.div>
  );
}
