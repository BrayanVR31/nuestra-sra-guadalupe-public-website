import type { GospelReading } from "../types/gospel.type";
import { AdvancedImage, responsive, placeholder } from "@cloudinary/react";
import { format, quality } from "@cloudinary/url-gen/actions/delivery";
import {
  gospelPictures,
  gospelTitle,
  resizeAction,
} from "../data/gospel-pictures";
import { cld } from "@/config/cloudinary";
import { useState } from "react";
import { MoveUpRight } from "lucide-react";
import Modal from "@/components/common/Modal";
import GospelDetails from "./GospelDetails";

export default function CardGospel({
  title,
  type,
  verses,
  category,
}: GospelReading) {
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
          <span className="text-xs bg-violet-900/70 text-violet-200 px-3 py-1.5 rounded-3xl absolute top-0 -translate-y-1/2 font-semibold backdrop-blur-xs tracking-widest">
            {category}
          </span>
          <p className="text-sm font-medium text-red-700 uppercase tracking-widest mb-1 line-clamp-1">
            {title}
          </p>
          <h5 className="text-xl font-bold text-neutral-700 leading-tight mb-4">
            {gospelTitle[type!]}
          </h5>
        </header>

        <footer className="flex justify-between items-center">
          <button
            className="inline-block text-ordinario font-bold text-sm hover: hover:text-ordinario/80 transition-colors cursor-pointer"
            onClick={() => setIsOpen(true)}
          >
            Leer más
          </button>
          <a
            href="https://www.ewtn.com/es/catolicismo/lecturas"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-7 h-7 border rounded-full text-ordinario border-ordinario font-bold text-sm hover: hover:text-ordinario/80 hover:bg-ordinario/10 transition-colors"
            aria-label={`Leer más sobre ${title}`}
          >
            <MoveUpRight className="w-3/5" />
          </a>
        </footer>
        <Modal
          title={gospelTitle[type!]}
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          size="xl"
          showClose
        >
          <GospelDetails
            reference="https://www.ewtn.com/es/catolicismo/lecturas"
            verses={verses}
          />
        </Modal>
      </div>
    </article>
  );
}
