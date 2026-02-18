interface ScheduleCard {
  image: ImageMetadata;
  description: string;
  title: string;
  slot: string;
}

type Realtime = {
  type: "realtime";
  scheduleList: ScheduleWeek;
};

type Simple = {
  type: "simple";
  schedules: {
    time: string;
    tags: string[];
  }[];
};

type TimelineDetails = { slot: string } & (Realtime | Simple);

export type ScheduleTimeline =
  | {
      isMulti: false;
      timelineTitle: string;
      scheduleCard: ScheduleCard;
      timelineDetails: TimelineDetails;
    }
  | {
      isMulti: true;
      items: {
        timelineTitle: string;
        scheduleCard: ScheduleCard;
        timelineDetails: TimelineDetails;
      }[];
    };

interface Schedule {
  time: string; // Format "HH:mm"
  label: string;
}

export type ScheduleWeek = Record<
  (0 | 1 | 2 | 3 | 4 | 5 | 6) | number,
  Schedule[]
>;
