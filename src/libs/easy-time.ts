import dayjs from "dayjs";
import utc from "dayjs/plugin/utc.js";
import timezone from "dayjs/plugin/timezone.js";
import "dayjs/locale/es-mx.js"; // By default you must be import with your locale language

/**
 * This function initialize basic
 * configuration for dayjs library
 * */
const initConf = () => {
  const { APP_TIME_ZONE = "America/New_York", APP_LOCAL_LANG = "en" } =
    import.meta.env;
  dayjs.extend(utc);
  dayjs.extend(timezone);
  dayjs.tz.setDefault(APP_TIME_ZONE);
  dayjs.locale(APP_LOCAL_LANG);
};

type WeekResult = {
  human: string;
  isToday: boolean;
  day: number;
  formatDate: string;
};

/**
 * This function match every day even
 * the actual day and returns current week array
 * */
const matchWeek = (dateInput: string): WeekResult[] => {
  const today = dayjs();
  const parsedDate = dayjs(dateInput);
  const humanFormat = "ddd, D [de] MMM [de] YYYY";

  const nextSunday =
    parsedDate.day() === 0
      ? parsedDate
      : parsedDate.add(1, "week").startOf("week");

  const pastMonday = parsedDate.startOf("week").add(1, "day");

  const dayResults = [
    {
      human: nextSunday.format(humanFormat),
      isToday: today.isSame(nextSunday, "day"),
      day: nextSunday.day(),
      formatDate: nextSunday.format(),
    },
    ...Array.from({ length: 6 }).map((_, index) => {
      const actualDay = pastMonday.add(index, "day");
      return {
        human: actualDay.format(humanFormat),
        isToday: today.isSame(actualDay, "day"),
        day: actualDay.day(),
        formatDate: actualDay.format(),
      };
    }),
  ];

  return dayResults;
};

export interface StatusLabels {
  end: string;
  now: string;
  incoming: string;
}

const defaultStatus: StatusLabels = {
  end: "Finished",
  now: "Currently",
  incoming: "In a few hours",
};

/**
 *  This function returns the current status
 *  based on date arg and returns if match label
 * */
const matchScheduleStatus = (
  weekDay: string,
  scheduledTime: string,
  labels: StatusLabels = defaultStatus,
) => {
  const today = dayjs();
  const [hours = 0, minutes = 0] = scheduledTime?.split(":")?.map(Number);
  const startTime = dayjs(weekDay)
    .hour(hours)
    .minute(minutes)
    .second(0)
    .millisecond(0);
  const endTime = startTime.add(1, "hour");

  if (today.isAfter(endTime)) {
    return { type: "end", message: labels.end };
  }

  if (
    today.isSame(startTime) ||
    (today.isAfter(startTime) && today.isBefore(endTime))
  ) {
    return { type: "now", message: labels.now };
  }

  return { type: "incoming", message: labels.incoming };
};

/**
 * This function returns an
 * object with full mini function
 * helpers
 * */
export const timeBootstrap = () => {
  initConf();
  return {
    now: dayjs().format(),
    matchWeek,
    matchScheduleStatus,
    parseNow: new Date(dayjs().format("YYYY-MM-DDTHH:mm:ss")),
  };
};
