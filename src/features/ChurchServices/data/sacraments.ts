import type { Sacrament } from "../types/sacrament.type";

export const sacraments: Sacrament[] = [
  {
    image:
      "https://res.cloudinary.com/df1jrwt7n/image/upload/w_600/v1771010435/bautismo_pw60we.jpg",
    title: "REQUISITOS PARA BAUTISMO",
    items: [
      {
        text: "Acta de nacimiento original y copia.",
        subtext: "Nota: Solo para niños menores de 5 años.",
      },
      {
        text: "Acta de matrimonio eclesiástico de los padrinos (original y copia).",
      },
      {
        text: "Padrino soltero: Presentar Fe de Bautismo y de Confirmación (original y copia).",
        subtext:
          "Nota: No debe vivir en unión libre y solo se admite un padrino bajo esta condición.",
      },
      {
        text: "Tarjeta de pláticas: Presentar originales de papás y padrinos.",
      },
    ],
    extraInfo: [
      "Pláticas Pre-bautismales: Todos los miércoles de 4:40 a 7:00 PM (sesión única).",
      "Si se bautiza en esta parroquia, es obligatorio tomar las pláticas aquí.",
      "Donativo: $50 por pareja (papás y padrinos).",
      "Requisitos para la plática: Padrinos presentan acta de matrimonio e INE; solteros presentan Fe de Bautismo e INE; papás únicamente INE (favor de traer lapicero).",
      "Entrega de documentos: 15 días antes del bautismo (no se reciben documentos incompletos).",
    ],
    footerInfo: [
      { label: "Bautismo Comunitario (Sábados 12:00 PM)", value: "$600" },
      { label: "Bautismo Particular (Sábados según agenda)", value: "$1,800" },
    ],
  },
  {
    image:
      "https://res.cloudinary.com/df1jrwt7n/image/upload/w_600/v1771012878/bodas_fyfvei.jpg",
    title: "REQUISITOS PARA MATRIMONIO",
    items: [
      {
        text: "Pertenencia Parroquial: Alguno de los dos contrayentes deberá pertenecer a esta parroquia.",
      },
      {
        text: "Edad: Él deberá ser mayor de 18 años y ella contar con un mínimo de 16 años cumplidos.",
      },
      {
        text: "Boletas de Bautismo: Deben estar actualizadas para matrimonio y pedirlas en sus respectivas parroquias.",
      },
      {
        text: "Copias de las boletas de Confirmación y de Primera Comunión de cada uno.",
      },
      {
        text: "Documentación Civil: Comprobante de domicilio, copia de INE de cada uno y 4 fotografías tamaño infantil recientes.",
      },
    ],
    extraInfo: [
      "Preparación y Padrinos: Tarjeta de pláticas de novios y copia del acta de matrimonio eclesiástico de los padrinos.",
      "Trámite: Entregar documentos completos 3 meses antes de la boda.",
      "Matrimonio en otra parroquia: El trámite es de 4 meses antes; traer nombre del sacerdote y de la iglesia.",
      "Al entregar los documentos deberá presentarse al menos uno de los novios.",
    ],
    footerInfo: [
      {
        label: "Costos",
        value: "Al apartar la misa se deberá cubrir el costo total.",
      },
    ],
    note: "Aviso importante: El día de la boda, favor de no arrojar arroz ni confeti.",
  },
];
