import type { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";
import OptimizeImage from "./OptimizeImage";
import type { OptimizeImageType } from "../types/optimize-image.type";

type CatechismProps = {
  title: string;
  image: OptimizeImageType;
  isReverse?: boolean;
};

export default function CatechismCard({
  title,
  children,
  image,
  isReverse = false,
}: PropsWithChildren<CatechismProps>) {
  return (
    <article className="grid grid-cols-1 md:grid-cols-2 bg-white h-auto md:h-100 overflow-hidden border border-stone-200 shadow-md">
      <figure className="h-64 md:h-full w-full bg-stone-100">
        <OptimizeImage {...image} title={title} />
      </figure>
      <div
        className={twMerge(
          "relative h-full overflow-y-auto scrollbar-thin scrollbar-thumb-stone-300 flex flex-col",
          isReverse ? "md:order-first" : "",
        )}
      >
        <div className="sticky top-0 z-10 bg-white px-8 pt-8 pb-4">
          <h4 className="font-primary font-semibold text-3xl text-stone-800 tracking-tight leading-tight">
            {title}
          </h4>
          <div className="mt-3 h-[3px] w-12 bg-gold-500"></div>
        </div>

        <div className="px-8 pb-8 mt-2 space-y-4 leading-relaxed text-stone-700 text-sm md:text-base">
          {children}
        </div>
      </div>
    </article>
  );
}
