import { useState } from "react";
import { MoveRight, X } from "lucide-react";
import { AnimatePresence } from "motion/react";
import Modal from "../Modal";
import type { CurrentSaint } from "../../types/saint";

interface Props extends CurrentSaint { };

export default function SaintModal({ content, image, title, link }: Props) {
  const [showDescription, setShowDescription] = useState(false);
  return (
    <AnimatePresence>
      <button
        disabled={!content}
        onClick={() => setShowDescription(true)}
        className={`w-full mt-6 ${!(content.length > 21) ? "bg-primary/80 cursor-not-allowed" : "bg-primary cursor-pointer"}  hover:bg-primary/80 transition-colors duration-300 flex overflow-hidden items-center gap-2 justify-center text-sm text-white rounded-sm py-2 px-4`}
      >Leer más <MoveRight
          className="-translate-x-full scale-0 opacity-0 group-hover/card:translate-0 group-hover/card:opacity-100 group-hover/card:scale-100 transition-all duration-300"
        /></button>
      <Modal onOutClose={() => setShowDescription(false)} modalStatus={showDescription} onCloseModal={() => setShowDescription(false)}>

        <button className="absolute z-10 w-12 h-12 flex items-center justify-center p-1 cursor-pointer **:text-gray-600 shadow-md shadow-neutral-500 **:w-5 bg-gray-100 top-0 -translate-y-1/2 translate-x-1/2 rounded-full right-0" onClick={() => setShowDescription(false)}><X /></button>
        <div className="h-full overflow-hidden w-[55%]">
          <img className="w-full h-full object-cover" src={image ?? ""} />
        </div>
        <div className="relative flex-1">
          <div className="absolute top-0 left-0 w-full h-full overflow-auto px-15">
            <h6 className="font-bold text-2xl pt-10 pb-6 text-neutral-900">{title}</h6>
            <p className="first-letter:text-2xl text-base/10 text-pretty text-justify text-neutral-800">{content}</p>
            <a target="_blank" rel="noopener noreferrer" href={link} className="bg-white border border-red-800 flex justify-center items-center hover:bg-red-800/80 rounded-lg transition-all duration-300 hover:text-white text-red-900 hover:border-red-800/80 gap-4 cursor-pointer p-4 w-full mb-10 mt-6">
              <div className="w-10 h-10 rounded-full overflow-hidden"><img className="w-full h-full object-cover" src="/logos/aciprensa.png" /></div>
              Ir al recurso original</a>
          </div>
        </div>

      </Modal>
    </AnimatePresence >
  );
}