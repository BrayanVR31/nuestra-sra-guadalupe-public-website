import { CalendarFold, ExternalLink, ImageOff, MoveRight } from "lucide-react";
import { useState } from "react";
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
  return (
    <article
      key={title}
      data-show="onscroll"
      className="border self-center bg-white border-gray-200 shadow-md rounded-sm overflow-hidden group/card mb-8"
    >
      <figure className="w-full max-h-60 overflow-hidden">
        {image ? (
          <img
            className="w-full h-full object-cover group-hover/card:scale-110 group-hover/card:-rotate-2 transition-transform duration-400"
            src={image}
          />
        ) : (
          <div className="w-full h-60 bg-gray-200 flex items-center justify-center">
            <ImageOff className="scale-[400%] text-gray-600 grow-0 shrink-0" />
          </div>
        )}
      </figure>
      <div className="px-6 py-8 flex flex-col justify-center">
        <div className="flex items-center justify-between">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer text-primary hover:text-primary/80 transition-colors duration-300 text-xs flex items-center gap-1"
          >
            <ExternalLink className="w-4" />
            aciprensa
          </a>
          <p className="text-neutral-600 gap-2 text-sm text-right italic flex items-center justify-end">
            <CalendarFold className="w-4" />
            {humanDate}
          </p>
        </div>
        {/** Saint name */}
        <h3 className="font-bold text-lg pb-2 text-neutral-800">{title}</h3>
        <p className="line-clamp-3 text-sm text-pretty text-neutral-700">
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
          className="bg-ordinario-600 flex items-center justify-center gap-2 text-cream-100 font-secondary text-sm py-3 cursor-pointer rounded-sm mt-6 hover:bg-ordinario-600/80 overflow-hidden"
          onClick={() => setIsOpen(true)}
        >
          Ver mas detalles
          <MoveRight className="-translate-x-4 opacity-0 group-hover/card:opacity-100 scale-90 group-hover/card:translate-x-0 group-hover/card:scale-100 transition-all duration-300" />
        </button>
      </div>
    </article>
  );
}
