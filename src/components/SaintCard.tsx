import { CalendarFold, MoveRight, ExternalLink, ImageOff } from "lucide-react";
import useToday from "../hooks/useToday";
import { type CurrentSaint } from "../types/saint";
import SaintModal from "./saints/SaintModal"

// TODO: Create a little modal to show a brief content overview
export default function SaintCard({ image, link, content, title }: CurrentSaint) {
  const today = useToday();
  const formattedToday = new Intl.DateTimeFormat("es-MX", {
    dateStyle: "medium",
  }).format(today);


  return (
    <article
      key={title}
      data-show="onscroll"
      className="border self-center bg-white border-gray-200 shadow-md rounded-sm overflow-hidden group/card mb-8"
    >
      <figure className="w-full max-h-60 overflow-hidden">
        {image ? <img
          className="w-full h-full object-cover group-hover/card:scale-110 group-hover/card:-rotate-2 transition-transform duration-400"
          src={image}
        /> : <div className="w-full h-60 bg-gray-200 flex items-center justify-center"><ImageOff className="scale-[400%] text-gray-600 grow-0 shrink-0" /></div>}

      </figure>
      <div className="px-6 py-8 flex flex-col justify-center">
        <div className="flex items-center justify-between">
          <a href={link} target="_blank" rel="noopener noreferrer" className="cursor-pointer text-primary hover:text-primary/80 transition-colors duration-300 text-xs flex items-center gap-1">
            <ExternalLink className="w-4" />aciprensa
          </a>
          <p
            className="text-neutral-600 gap-2 text-sm text-right italic flex items-center justify-end"
          >
            <CalendarFold className="w-4" />{formattedToday}
          </p>
        </div>
        {/** Saint name */}
        <h3 className="font-bold text-lg pb-2 text-neutral-800">{title}</h3>
        <p className="line-clamp-3 text-sm text-pretty text-neutral-700">
          {content}
        </p>
        <SaintModal link={link} content={content} title={title} image={image} />

        {/** Open modal description */}
      </div>
    </article>
  );
}