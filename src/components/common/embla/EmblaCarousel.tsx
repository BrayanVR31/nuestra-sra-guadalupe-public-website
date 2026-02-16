import { type JSX } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useEmbla from "./useEmbla";

interface EmblaCarouselProps {
  render: (className: string) => JSX.Element;
}

export default function EmblaCarousel({ render }: EmblaCarouselProps) {
  const { emblaRef, scrollButtons } = useEmbla();
  const {
    disableStatus: { nextButtonDisabled, prevButtonDisabled },
    handlers,
    dots: { handler: goTo, scrollSnaps, isSelectedDot },
  } = scrollButtons;
  const { scrollNext, scrollPrev } = handlers;
  return (
    <div className="embla overflow-hidden">
      {/** Viewport area */}
      <div className="embla__viewport cursor-grab select-none" ref={emblaRef}>
        <div className="embla__container flex">
          {render("embla__slide flex-[0_0_100%] min-w-0")}
        </div>
      </div>
      <div className="flex md:flex-row flex-col items-center justify-between mt-5">
        <div className="hidden md:block">
          {/** Carousel navigation */}
          <button
            className="embla__prev border rounded-full bg-ordinario text-white w-8 h-8 *:w-3/4 *:mx-auto cursor-pointer hover:bg-ordinario/80 transition-all duration-300 disabled:opacity-25 disabled:pointer-events-none mr-2"
            onClick={scrollPrev}
            disabled={prevButtonDisabled}
          >
            <ChevronLeft />
          </button>
          <button
            className="embla__prev border rounded-full bg-ordinario text-white w-8 h-8 *:w-3/4 *:mx-auto cursor-pointer hover:bg-ordinario/80 transition-all duration-300 disabled:opacity-25 disabled:pointer-events-none mr-2"
            disabled={nextButtonDisabled}
            onClick={scrollNext}
          >
            <ChevronRight />
          </button>
        </div>
        {/** Carousel dots */}
        <div className="embla__dots flex gap-2">
          {scrollSnaps!.map((_, index) => (
            <button
              className={"embla__dot w-4 h-4 rounded-full border border-ordinario/55".concat(
                index === isSelectedDot ? " bg-ordinario" : "",
              )}
              key={index}
              onClick={() => goTo(index)}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
}
