import { animate, stagger, inView } from "motion";

export function splitOnStart() {
  const htmlNodes = document.querySelectorAll<HTMLElement>(".split-animate");

  htmlNodes.forEach(node => {
    if (node.dataset.splitProcessed === "true") return;
    // Getting text
    const originalText: string = node.innerText;
    // Accesibility settings
    node.setAttribute("aria-label", originalText);
    node.dataset.splitProcessed = "true";
    // Appending each word
    const words: string[] = originalText.split("");
    node.innerHTML = words
      .map((word) => {
        const content = word === " " ? "&nbsp;" : word;
        return `<span class="char" style="display: inline-block; opacity: 0; will-change: transform, opacity;">${content}</span>`;
      })
      .join("");

    node.style.visibility = "visible";
    const animationOptions = {
      delay: stagger(0.03),
      duration: 0.5,
      easing: [0.22, 1, 0.36, 1]
    };

    inView(node, () => {
      const charElements = node.querySelectorAll(".char");
      if (charElements.length > 0) {
        animate(
          charElements,
          {
            opacity: [0, 1],
            y: [20, 0],
            filter: ["blur(5px)", "blur(0px)"]
          },
          animationOptions
        );
      }
    });
  })

}
