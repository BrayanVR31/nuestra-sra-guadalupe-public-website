// TODO: Remove this file and fetch from API
import retiroCuaresma from "@/assets/images/retiro_cuaresma.jpeg";
import semanaSanta from "@/assets/images/semana_santa_01.jpg";
import semanaSanta2 from "@/assets/images/semana_santa_02.jpg";
import pentecostesJuvenil from "@/assets/images/pentecostes_juvenil.jpeg";
import rifa from "@/assets/images/rifa.jpeg";
import dayjs from "@/libs/dayjs";
import type { Announcement } from "../types/announcement.type";

const isExperimental = false;

export const announcements: Announcement[] = !isExperimental
  ? [
    {
      id: 1,
      image: retiroCuaresma,
      title: "Reconociendo nuestras cadenas",
      content:
        "Se les invita a todos los coordinadores junto con sus integrantes asistir al retiro.",
      publishedAt: dayjs("2026-03-03").toDate(),
    },
    {
      id: 2,
      image: retiroCuaresma,
      title: "La esperanza en medio de la esclavitud (Hora santa)",
      content:
        "Se les invita a todos los coordinadores junto con sus integrantes asistir al retiro.",
      publishedAt: dayjs("2026-03-03").toDate(),
    },
    {
      id: 3,
      image: retiroCuaresma,
      title: "Cuaresma como tiempo de conversión",
      content:
        "Se les invita a todos los coordinadores junto con sus integrantes asistir al retiro.",
      publishedAt: dayjs("2026-03-03").toDate(),
    },
    {
      id: 4,
      image: semanaSanta2,
      title: "Semana santa 2026: Horarios de Celebraciones",
      content:
        "Con alegría y devoción, ponemos a disposición de toda la comunidad el programa de actividades litúrgicas para la Semana Santa 2026.",
      publishedAt: dayjs("2026-03-27").toDate(),
    },
    {
      id: 5,
      image: semanaSanta,
      title: "Semana santa 2026: Horarios de Celebraciones",
      content:
        "Con alegría y devoción, ponemos a disposición de toda la comunidad el programa de actividades litúrgicas para la Semana Santa 2026.",
      publishedAt: dayjs("2026-03-27").toDate(),
    },
    {
      id: 6,
      image: pentecostesJuvenil,
      title: "Tardeada de pentecostés juvenil",
      content:
        "Una tarde para encontrarnos con Dios.",
      publishedAt: dayjs("2026-05-06").toDate(),
    },
    {
      id: 7,
      image: rifa,
      title: "Gran rifa",
      content:
        "En favor de la restauración del templo parroquial",
      publishedAt: dayjs("2026-05-06").toDate(),
    },

  ]
  : [];
