import { cld } from "@/config/cloudinary";
import { AdvancedImage, responsive, placeholder } from "@cloudinary/react";
import { format, quality } from "@cloudinary/url-gen/actions/delivery";
import { type Easing, type Variants, motion } from "motion/react";

interface CardSlideUpProps {
  image: string;
  label: string;
  color: string;
  overlayColor: string;
  foreground: string;
  path: string;
}

const ease: Easing = [0.22, 1, 0.36, 1];

const variants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease,
    },
  },
};

export default function CardSlideUp({
  image,
  label,
  color,
  overlayColor,
  foreground,
  path,
}: CardSlideUpProps) {
  const sacramentImage = cld.image(image);
  sacramentImage.delivery(format("auto")).delivery(quality("auto"));
  return (
    <motion.article
      variants={variants}
      style={{ backgroundColor: overlayColor }}
      className="group relative aspect-4/3 w-full cursor-pointer overflow-hidden rounded-sm shadow-xl font-secondary"
    >
      <AdvancedImage
        cldImg={sacramentImage}
        plugins={[
          responsive({ steps: [640, 768, 1024] }),
          placeholder({ mode: "blur" }),
        ]}
        className="h-full w-full scale-110 object-cover transition-all duration-500 group-hover:scale-125 group-hover:rotate-3 group-hover:blur-[2px] group-hover:opacity-50"
        alt={label}
      />

      <figcaption className="absolute inset-0 flex flex-col items-center justify-center px-8">
        <div className="relative w-full overflow-hidden text-center">
          <span className="block w-full bg-white py-3 text-sm font-extrabold uppercase tracking-widest text-gray-800 transition-transform duration-300 ease-out translate-y-full group-hover:translate-y-0">
            Más información
          </span>
          <h3
            style={{
              backgroundColor: `rgb(from ${color} r g b / 0.55)`,
              color: foreground,
            }}
            className="absolute top-0 left-0 w-full py-3 text-lg font-extrabold uppercase tracking-widest transition-transform duration-300 ease-out group-hover:-translate-y-full text-shadow-lg/40"
          >
            {label}
          </h3>
        </div>
      </figcaption>

      <a href={path} className="absolute inset-0 z-10"></a>
    </motion.article>
  );
}
