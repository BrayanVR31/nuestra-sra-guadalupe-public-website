import Autoplay from "embla-carousel-autoplay";
import type { UseEmblaCarouselType } from "embla-carousel-react";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState } from "react";

export default function useEmbla() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: false,
      containScroll: false,
      dragFree: false,
    },
    [Autoplay({})],
  );
  const [prevButtonDisabled, setPrevButtonDisabled] = useState(true);
  const [nextButtonDisabled, setNextButtonDisabled] = useState(true);
  const scrollNext = () => emblaApi?.scrollNext();
  const scrollPrev = () => emblaApi?.scrollPrev();
  const toggleButtonsDisabled = (emblaApi: UseEmblaCarouselType["1"]) => {
    setPrevButtonDisabled(!emblaApi?.canScrollPrev());
    setNextButtonDisabled(!emblaApi?.canScrollNext());
  };
  const [scrollSnaps, setScrollSnaps] = useState<number[] | undefined>([]);
  const setupSnaps = (emblaApi: UseEmblaCarouselType["1"]) =>
    setScrollSnaps(emblaApi?.scrollSnapList());
  const goTo = (index: number) => emblaApi?.scrollTo(index);
  const [selectedSnap, setSelectedSnap] = useState<number | undefined>(0);
  const setActiveSnap = (emblaApi: UseEmblaCarouselType["1"]) =>
    setSelectedSnap(emblaApi?.selectedScrollSnap());
  useEffect(() => {
    if (!emblaApi) return;
    // Button prev and next status
    toggleButtonsDisabled(emblaApi);
    emblaApi.on("reInit", toggleButtonsDisabled);
    emblaApi.on("select", toggleButtonsDisabled);
    // Dots status
    setupSnaps(emblaApi);
    setActiveSnap(emblaApi);
    emblaApi.on("reInit", setupSnaps);
    emblaApi.on("reInit", setActiveSnap);
    emblaApi.on("select", setActiveSnap);
  }, [emblaApi]);
  return {
    emblaRef,
    scrollButtons: {
      handlers: {
        scrollNext,
        scrollPrev,
      },
      disableStatus: {
        nextButtonDisabled,
        prevButtonDisabled,
      },
      dots: {
        handler: goTo,
        scrollSnaps,
        isSelectedDot: selectedSnap,
      },
    },
  };
}
