import { animate, scroll, stagger } from "motion";

export const showBoxOnScroll = () => {
  const scrollBoxesSelector = "[data-show='onscroll']";
  document.querySelectorAll(scrollBoxesSelector).forEach((box) => {
    scroll(
      animate(
        box,
        { scale: [0.7, 1], opacity: [0, 1] },
        {
          duration: 0.365,
          delay: stagger(0.01),
          ease: "easeOut",
          mass: 2,
          damping: 60,
        },
      ),
      {
        target: box,
        offset: ["start end", "end end"],
      },
    );
  });
}
