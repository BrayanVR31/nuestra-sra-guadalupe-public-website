// TODO: Remove this file and fetch from API
import retiroCuaresma from "@/assets/images/retiro_cuaresma.jpeg";
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
    ]
  : [];
