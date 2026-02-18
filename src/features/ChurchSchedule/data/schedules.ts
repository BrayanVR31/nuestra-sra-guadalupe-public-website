import type { ScheduleTimeline } from "../types/schedule.type";
import HorariosMisa from "@/assets/horarios_02.jpeg";
import HorariosOficina from "@/assets/oficinas.jpg";
import HorariosHoraSanta from "@/assets/hora_santa.webp";
import HorariosConfesiones from "@/assets/confesiones.jpeg";
import { scheduleList } from "../constants/horarios";

export const churchSchedules: ScheduleTimeline[] = [
  {
    isMulti: false,
    timelineTitle: "Celebración Eucarística",
    scheduleCard: {
      image: HorariosMisa,
      description: "Un espacio de encuentro y oración para nuestra comunidad.",
      title: "Horarios de misas",
      slot: "card",
    },
    timelineDetails: {
      scheduleList,
      type: "realtime",
      slot: "timeline",
    },
  },
  {
    isMulti: true,
    items: [
      {
        timelineTitle: "Oficinas",
        scheduleCard: {
          image: HorariosOficina,
          description:
            "Consulta aquí los horarios de atención en Secretaría Parroquial.",
          title: "Atención parroquial y trámites",
          slot: "card",
        },
        timelineDetails: {
          type: "simple",
          slot: "timeline",
          schedules: [
            {
              time: "Lunes a sábados",
              tags: ["07:00 AM a 08:00 PM"],
            },
          ],
        },
      },
      {
        timelineTitle: "Hora Santa",
        scheduleCard: {
          image: HorariosHoraSanta,
          description:
            "Un momento de silencio y adoración frente al Santísimo.",
          title: "Hora Santa",
          slot: "card",
        },
        timelineDetails: {
          type: "simple",
          slot: "timeline",
          schedules: [
            {
              time: "Todos los jueves",
              tags: ["07:30 PM"],
            },
          ],
        },
      },
      {
        timelineTitle: "Confesiones",
        scheduleCard: {
          image: HorariosConfesiones,
          description:
            "Un espacio de escucha y perdón para sanar el corazón y renovar tu camino de fe.",
          title: "Confesiones",
          slot: "card",
        },
        timelineDetails: {
          type: "simple",
          slot: "timeline",
          schedules: [
            {
              time: "Todos los días",
              tags: ["Al finalizar la misa."],
            },
          ],
        },
      },
    ],
  },
];
