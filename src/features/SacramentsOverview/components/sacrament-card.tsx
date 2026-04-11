import { AdvancedImage, responsive, placeholder } from "@cloudinary/react";
import { cld } from "@/config/cloudinary";
import type { SacramentItem } from "../data/sacraments";
import { crop } from "@cloudinary/url-gen/actions/resize";
import { compass } from "@cloudinary/url-gen/qualifiers/gravity";
import HighlightText from "@/components/common/HighlightText";
import { motion, type Variants } from "motion/react";

interface SacramentCardProps extends SacramentItem { };

const cardVariants: Variants = {
  hidden: {
    opacity: 0.4,
    translateY: 200,
    scale: 0.95
  },
  enter: {
    opacity: 1,
    translateY: 0,
    scale: 1
  }
};

export default function SacramentCard({ image, category, title, path, description, direction, highlights = [] }: SacramentCardProps) {
  const cardImage = cld.image(image);
  cardImage
    .resize(
      crop().width(1024).height(1024).gravity(compass(direction))
    );
  return (
    <motion.article
      transition={{ ease: [0.39, 0.575, 0.565, 1], delay: 0.0320, duration: 0.270 }}
      variants={cardVariants} initial={["hidden"]}
      whileInView={["enter"]}
      viewport={{ once: true, amount: 0.2 }}
      className="flex flex-col lg:flex-row lg:even:flex-row-reverse gap-8 lg:gap-24 items-center">
      <figure className="perspective-distant group w-full lg:max-w-[33%] aspect-square relative rounded-3xl overflow-hidden shadow-sm">
        <AdvancedImage
          cldImg={cardImage}
          plugins={[
            responsive({ steps: [640, 768, 1024] }),
            placeholder({ mode: "blur" }),
          ]}
          className="h-full w-full object-cover transform-3d group-hover:rotate-y-180 transition-transform duration-500"
          alt={`Imagen representativa de ${title}`}
        />
      </figure>

      {/* Content card */}
      <div className="flex-1 flex flex-col">
        <header>
          <p className="uppercase text-primary font-bold tracking-[0.2em] text-sm mb-2 text-center lg:text-start">
            {category}
          </p>
          <h2 className="font-bold text-3xl text-center lg:text-start lg:text-4xl text-gold-600 text-pretty leading-tight">
            {title}
          </h2>
        </header>

        <section className="text-base lg:text-lg text-neutral-700 mt-6 space-y-4 leading-relaxed">
          <p className="text-center lg:text-start">

            {
              highlights.length > 0 ? (
                <HighlightText keywords={highlights}>
                  {description}
                </HighlightText>
              ) : description
            }
          </p>
        </section>

        <footer className="mt-8 flex justify-center lg:justify-start">
          <a
            href={path}
            className="inline-block cursor-pointer text-sm font-semibold border border-primary text-primary px-10 py-3 rounded-md hover:bg-primary hover:text-white transition-colors duration-300 focus:ring-2 focus:ring-primary focus:ring-offset-2 outline-none"
          >
            Conoce más detalles
          </a>
        </footer>
      </div>
    </motion.article>
  );
}