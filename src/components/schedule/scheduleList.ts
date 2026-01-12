export type Schedule = {
  title: string;
  timeList: string[];
};

export const scheduleMisas: Schedule[] = [
  {
    title: "Sábado",
    timeList: [
      "8:00 am",
      "7:00 pm"
    ]
  },
  {
    title: "Domingo",
    timeList: [
      "6:30 am",
      "8:00 am",
      "11:30 am",
      "1:00 pm",
      "6:30 pm",
      "7:30 pm"
    ]
  },
  {
    title: "Lunes",
    timeList: [
      "8:00 am",
      "7:00 pm"
    ]
  },
  {
    title: "Martes",
    timeList: [
      "8:00 am",
      "7:00 pm"
    ]
  },
  {
    title: "Miércoles",
    timeList: [
      "8:00 am",
      "7:00 pm"
    ]
  },
  {
    title: "Jueves",
    timeList: [
      "8:00 am",
      "7:00 pm"
    ]
  },
  {
    title: "Viernes",
    timeList: [
      "8:00 am",
      "7:00 pm"
    ]
  },
];

export const scheduleHoraSanta: Schedule[] = [
  { title: "Jueves", timeList: ["7:30 pm"] }
];

export const scheduleConfesiones: Schedule[] = [
  { title: "Todos los días", timeList: ["Al final de cada misa el feligrés se podrá confesar."] }
];