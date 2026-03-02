import { ExternalLink, Eye } from "lucide-react";
import dayjs from "@/libs/dayjs";
import type { Video } from "../types/stream.type";

interface VideoPreviewProps extends Video {}

export default function VideoPreview({
  thumbnailPreview,
  title,
  url,
  totalViews,
  publishedAt,
}: VideoPreviewProps) {
  return (
    <article className="flex flex-col md:flex-row mb-8 bg-neutral-50 rounded-sm overflow-hidden border border-slate-200 shadow-sm shadow-slate-100">
      <figure className="md:w-1/3">
        <img
          className="w-full h-full object-cover"
          src={thumbnailPreview}
          alt={title}
        />
      </figure>
      <div className="p-4 flex flex-col justify-center">
        <h5 className="text-sm/loose font-semibold text-neutral-800 mb-6">
          {title}
        </h5>
        <div className="flex items-center gap-4 mb-6">
          <span className="inline-flex items-center text-xs gap-2 bg-green-100 text-green-800 w-max px-3 py-1 rounded-3xl border border-green-200/80 uppercase">
            {dayjs(publishedAt).format("MMMM [de] YYYY")}
          </span>
          <span className="inline-flex items-center text-xs gap-2 bg-amber-100 text-orange-800 w-max px-3 py-1 rounded-3xl border border-orange-200/80">
            <Eye className="w-5" />
            {totalViews}
          </span>
        </div>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="flex md:w-max w-full bg-neutral-50 border border-blue-600 rounded-sm text-blue-600 px-6 hover:bg-blue-600 transition-all duration-300 hover:text-white py-2 gap-2 justify-center items-center text-sm"
          href={url}
        >
          <ExternalLink className="w-4" /> Ver mas
        </a>
      </div>
    </article>
  );
}
