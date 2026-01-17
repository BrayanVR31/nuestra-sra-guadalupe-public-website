import type { ScheduleWeek } from "../components/timeline/schedule";

/**
 * Horarios para las misas:
 * * [24h]  ->  [12h]
 * -------------------
 * 06:00  ->  06:00 AM
 * 07:00  ->  07:00 AM
 * 08:00  ->  08:00 AM
 * 09:00  ->  09:00 AM
 * 10:00  ->  10:00 AM
 * 11:00  ->  11:00 AM
 * 12:00  ->  12:00 PM
 * 18:00  ->  06:00 PM
 * 19:00  ->  07:00 PM
 * 20:00  ->  08:00 PM
 */

const enum SCHEDULE_LABEL {
  "AM" = "Por la mañana",
  "PM" = "Por la tarde"
};

export const scheduleList: ScheduleWeek = {
  "0": [
    {
      time: "06:30",
      label: SCHEDULE_LABEL.AM
    },
    {
      time: "08:00",
      label: SCHEDULE_LABEL.AM
    },
    {
      time: "11:30",
      label: SCHEDULE_LABEL.AM
    },
    {
      time: "13:00",
      label: SCHEDULE_LABEL.PM
    },
    {
      time: "18:00",
      label: SCHEDULE_LABEL.PM
    },
    {
      time: "19:30",
      label: SCHEDULE_LABEL.PM
    },
  ],
  "1": [
    { time: "08:00", label: SCHEDULE_LABEL.AM },
    { time: "19:00", label: SCHEDULE_LABEL.PM },
  ],
  "2": [
    { time: "08:00", label: SCHEDULE_LABEL.AM },
    { time: "19:00", label: SCHEDULE_LABEL.PM },
  ],
  "3": [
    { time: "08:00", label: SCHEDULE_LABEL.AM },
    { time: "19:00", label: SCHEDULE_LABEL.PM },
  ],
  "4": [
    { time: "08:00", label: SCHEDULE_LABEL.AM },
    { time: "19:00", label: SCHEDULE_LABEL.PM },
  ],
  "5": [
    { time: "08:00", label: SCHEDULE_LABEL.AM },
    { time: "19:00", label: SCHEDULE_LABEL.PM },
  ],
  "6": [
    { time: "08:00", label: SCHEDULE_LABEL.AM },
    { time: "19:00", label: SCHEDULE_LABEL.PM },
  ],
}