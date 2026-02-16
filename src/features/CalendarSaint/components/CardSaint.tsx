import { CalendarFold, ExternalLink, ImageOff, MoveRight } from "lucide-react";
import { useState } from "react";
import { Image } from "@unpic/react";
import type { Saint } from "../types/saint.type";
import Modal from "../../../components/common/Modal";
import SaintDetails from "./SaintDetails";

interface CardSaintProps extends Saint {}

export default function CardSaint({
  title,
  content,
  image,
  link,
  humanDate,
}: CardSaintProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <article
      key={title}
      className="border self-center bg-white border-gray-200 shadow-md rounded-sm overflow-hidden group/card min-h-full"
    >
      <figure className="w-full h-48 overflow-hidden">
        <Image
          width={400}
          height={300}
          src={image!}
          alt={title}
          layout="constrained"
          loading="lazy"
          decoding="async"
          onLoad={() => setIsLoaded(true)}
          className={`
          w-full min-h-full object-cover 
          transition-all duration-500
          group-hover/card:scale-110 group-hover/card:-rotate-2
          ${isLoaded ? "opacity-100" : "opacity-0"}
        `}
        />
        {!isLoaded && (
          <div className="absolute inset-0 bg-neutral-200 animate-pulse" />
        )}
      </figure>
      <div className="px-9 py-4 flex flex-col justify-center">
        <div className="flex items-center justify-between mb-2">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer text-primary hover:text-primary/80 transition-colors duration-300 text-xs flex items-center gap-1 tracking-wider"
          >
            <ExternalLink className="w-4" />
            aciprensa
          </a>
          <p className="text-neutral-600 gap-2 text-xs text-right italic flex items-center justify-end">
            <CalendarFold className="w-4" />
            {humanDate}
          </p>
        </div>
        <div>
          {/** Saint name */}
          <h5 className="font-bold text-lg text-neutral-700 line-clamp-1">
            {title}
          </h5>
          <p className="line-clamp-3 text-sm/loose text-pretty text-justify text-neutral-700 mt-3">
            {content}
          </p>
          {/** Modal */}
          <Modal
            title="Santo del Día de hoy"
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            size="xl"
            showClose
          >
            <SaintDetails
              content={content}
              image={image}
              title={title}
              link={link}
              humanDate={humanDate}
            />
          </Modal>
          <button
            className="bg-ordinario-600 flex items-center justify-center gap-2 text-cream-100 font-secondary text-sm py-3 cursor-pointer rounded-sm hover:bg-ordinario-600/80 overflow-hidden w-full mt-6"
            onClick={() => setIsOpen(true)}
          >
            <span className="translate-x-4 group-hover/card:translate-x-0 transition-all duration-300">
              Ver mas detalles
            </span>
            <MoveRight className="-translate-x-4 opacity-0 group-hover/card:opacity-100 scale-90 group-hover/card:translate-x-0 group-hover/card:scale-100 transition-all duration-300" />
          </button>
        </div>
      </div>
    </article>
  );
}
