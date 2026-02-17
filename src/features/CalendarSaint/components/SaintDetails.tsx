import { ExternalLink } from "lucide-react";
import { useState } from "react";
import { Image } from "@unpic/react";
import type { Saint } from "../types/saint.type";

export default function SaintDetails({ image, title, content, link }: Saint) {
  const [loaded, setLoaded] = useState(false);
  const FALLBACK_URL = "/images/not_found.jpg";
  return (
    <div className="max-h-[75vh]">
      <figure className="w-full h-auto max-h-[60vh] md:h-[250px] overflow-hidden bg-neutral-100">
        <Image
          src={image || FALLBACK_URL}
          onError={(e) => {
            e.currentTarget.src = FALLBACK_URL;
          }}
          layout="fullWidth"
          alt={title}
          className="w-full h-full object-cover"
          onLoad={() => setLoaded(true)}
        />
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
