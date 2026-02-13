import { ExternalLink } from "lucide-react";
import type { Saint } from "../types/saint.type";

export default function SaintDetails({ image, title, content, link }: Saint) {
  return (
    <div>
      <figure className="w-full h-56 rounded-sm overflow-hidden">
        <img className="w-full h-full object-cover" src={image!} />
      </figure>
      <div className="max-h-40 overflow-auto max-md:scrollbar-hidden">
        <h5 className="font-semibold text-xl text-neutral-800 py-5">{title}</h5>
        <p className="text-base/loose text-neutral-700 text-justify">
          {content}
        </p>
      </div>
      <div className="py-4">
        <a
          className="inline-flex items-center justify-center gap-4 md:w-max w-full text-center hover:bg-ordinario/80 transition-all duration-300 bg-ordinario text-white px-8 py-3 rounded-sm text-sm"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Ir al recurso original
          <ExternalLink className="w-4" />
        </a>
      </div>
    </div>
  );
}
