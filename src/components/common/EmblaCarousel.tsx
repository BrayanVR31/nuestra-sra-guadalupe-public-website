import type { JSX } from "react";
import useEmblaCarouselType from "embla-carousel-react";

interface EmblaCarouselProps {
  render: (className: string) => JSX.Element;
}

export default function EmblaCarousel({ render }: EmblaCarouselProps) {
  const [emblaRef] = useEmblaCarouselType();
  return (
    <div className="embla">
      {/** Viewport area */}
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">{render("embla__slide")}</div>
      </div>
      {/** Carousel navigation */}
      <button className="embla__prev">Prev</button>
      <button className="embla__next">Next</button>
    </div>
  );
}
