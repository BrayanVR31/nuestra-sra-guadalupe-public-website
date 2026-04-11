export type SacramentItem = {
  id: number;
  image: string;
  direction: string;
  path: string;
  title: string;
  category: string;
  description: string;
  highlights?: string[];
};

export const sacraments: SacramentItem[] = [
  {
    id: 1,
    image: "feba5aee-f91b-401b-90ab-e20ae9aec49b_uhxbzs",
    category: "BAUTISMO",
    title: "La puerta a la vida en el Espíritu y base de toda la vida cristiana",
    path: "/servicios",
    direction: "east",
    highlights: ["puente", "vida cristiana", "hijos de dios"],
    description: "El Bautismo es el inicio de la vida cristiana: nos libera del pecado, nos hace renacer como hijos de Dios, e incorpora a la persona a Cristo y a la Iglesia. Es el “puente” que abre el acceso a los demás sacramentos."
  },
  {
    id: 2,
    image: "e4d73c10-c908-4044-ac1d-fa43f20171ad_uzlgb7",
    category: "Primera Comunión",
    title: "Encuentro con Jesús: la Eucaristía alimenta el corazón",
    path: "/servicios",
    direction: "east",
    highlights: ["sacramento del amor", "especies de pan y vino"],
    description: "La Primera Comunión es un momento memorable en el que el niño recibe por primera vez el Sacramento del Amor, donde el Señor se da como alimento para el alma bajo las especies de pan y vino. Para recibir la Comunión, es necesario haber recibido antes el Bautismo."
  },
  {
    id: 3,
    image: "ece30028-3e2f-41a1-a4af-9fe24b29b09c_ygmm4g",
    category: "CONFIRMACIÓN",
    title: "Recibe el Espíritu Santo para fortalecerte y dar testimonio de fe",
    path: "/servicios",
    direction: "center",
    highlights: ["confirma y fortalece", "vida de gracia"],
    description: "La Confirmación “confirma y fortalece” la gracia recibida en el Bautismo. Su efecto es una efusión especial del Espíritu Santo, que fortalece al cristiano para dar testimonio y crecer en la vida de gracia."
  },
  {
    id: 4,
    image: "jpeg-optimizer_josh-applegate-SrWVeL5DyNM-unsplash_reux42",
    category: "Matrimonio",
    title: "Un amor que Dios bendice: unión estable entre un hombre y una mujer",
    path: "/servicios",
    direction: "center",
    highlights: ["vínculo matrimonial", "bien de la pareja"],
    description: "El Matrimonio, por su naturaleza, está ordenado al bien de la pareja y también a la generación y educación de los hijos. En el caso de los bautizados, Cristo lo eleva a la dignidad de sacramento, y el vínculo matrimonial permanece mientras vivan los esposos."
  },
];