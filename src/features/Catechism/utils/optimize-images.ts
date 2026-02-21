import { getImage } from "astro:assets";
import catecismoOne from "@/assets/images/catecismo_1.jpg";
import catecismoTwo from "@/assets/images/catecismo_2.jpg";

export async function getOptimizeImages() {
  return {
    catechismTop: {
      avif: await getImage({
        src: catecismoOne,
        width: 800,
        format: "avif",
      }),
      webp: await getImage({
        src: catecismoOne,
        width: 800,
        format: "webp",
      }),
      fallback: await getImage({
        src: catecismoOne,
        width: 800,
      }),
    },
    catechismBottom: {
      avif: await getImage({
        src: catecismoTwo,
        width: 800,
        format: "avif",
      }),
      webp: await getImage({
        src: catecismoTwo,
        width: 800,
        format: "webp",
      }),
      fallback: await getImage({
        src: catecismoTwo,
        width: 800,
      }),
    },
  };
}
