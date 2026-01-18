interface Schedule {
  time: string; // Format "HH:mm"
  label: string;
};

export type ScheduleWeek = Record<(0 | 1 | 2 | 3 | 4 | 5 | 6) | number, Schedule[]>;