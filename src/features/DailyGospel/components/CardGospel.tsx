import type { GospelReading } from "../types/gospel.type";
import { AdvancedImage, responsive, placeholder } from "@cloudinary/react";
import { format, quality } from "@cloudinary/url-gen/actions/delivery";
import {
  gospelPictures,
  gospelTitle,
  resizeAction,
} from "../data/gospel-pictures";
import { cld } from "../config/cloudinary";
import { useState } from "react";

export default function CardGospel({ title, type, verses }: GospelReading) {
  const [isOpen, setIsOpen] = useState(false);
  /*
  const resizeAction = fill()
    .width(isOpen ? 1000 : 600)
    .height(isOpen ? 1250 : 750);
    */
  const gospelImage = cld.image(gospelPictures[type!]);
  gospelImage
    .delivery(format("auto"))
    .delivery(quality("auto"))
    .resize(resizeAction[type!]);
  return (
    <article className="relative p-4 h-full flex flex-col group">
      <figure className="relative aspect-4/5 w-full overflow-hidden rounded-3xl shadow-sm">
        <AdvancedImage
          cldImg={gospelImage}
          plugins={[
            responsive({ steps: [640, 768, 1024] }),
            placeholder({ mode: "blur" }),
          ]}
          className="transition-transform duration-500 group-hover:scale-110 w-full h-full object-cover"
          alt={title}
        />
      </figure>
      <div className="relative -mt-24 mx-auto w-[90%] bg-white p-6 rounded-2xl shadow-xl z-10">
        <header>
          <p className="text-xs font-medium text-red-700 uppercase tracking-widest mb-1">
            {title}
          </p>
          <h5 className="text-xl font-bold text-neutral-700 leading-tight mb-4">
            {gospelTitle[type!]}
          </h5>
        </header>

        <footer>
          <a
            href="https://www.ewtn.com/es/catolicismo/lecturas"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-ordinario font-bold text-sm hover: hover:text-ordinario/80 transition-colors"
            aria-label={`Leer más sobre ${title}`}
          >
            Leer más
          </a>
        </footer>
      </div>
    </article>
  );
}
