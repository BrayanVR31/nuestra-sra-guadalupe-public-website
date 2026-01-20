import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault("America/Mexico_City");

type TimeUnit = {
  threshold: number;
  value: number;
  unit: Intl.RelativeTimeFormatUnit;
};

/***
 * This function transform and return
 * a relative format time e.g. 3 days ago, 3 hours ago, etc.
 */
export const transformRelativeTime = (datetime: Date) => {
  const timeDiffence = +new Date(datetime) - +new Date();
  const absDifference = Math.abs(timeDiffence);
  const timeFormat: Record<string, number | any> = {
    seconds: Math.round(timeDiffence / 1_000),
    minutes: function () {
      return Math.round(this.seconds / 60);
    },
    hours: function () {
      return Math.round(this.minutes() / 60);
    },
    day: function () {
      return Math.round(this.hours() / 24);
    },
    week: function () {
      return Math.round(this.day() / 7);
    },
    month: function () {
      return Math.round(this.day() / 30);
    },
    year: function () {
      return Math.round(this.day() / 365);
    },
  };
  const relativeFormatter = new Intl.RelativeTimeFormat("es-MX", {
    numeric: "auto",
  });
  // Relative units
  const TIME_UNITS: TimeUnit[] = [
    { threshold: 6e4, value: timeFormat.seconds as number, unit: "second" },
    { threshold: 36e5, value: timeFormat.minutes() as number, unit: "minute" },
    { threshold: 864e5, value: timeFormat.hours() as number, unit: "hour" },
    { threshold: 6048e5, value: timeFormat.day() as number, unit: "day" },
    { threshold: 2592e6, value: timeFormat.week() as number, unit: "week" },
    { threshold: 31536e6, value: timeFormat.month() as number, unit: "month" },
    { threshold: Infinity, value: timeFormat.year() as number, unit: "year" },
  ];
  const timeUnit = TIME_UNITS.find(
    (timeUnit) => absDifference < timeUnit.threshold,
  );
  if (!timeUnit)
    return relativeFormatter.format(
      TIME_UNITS[TIME_UNITS.length - 1].value,
      "year",
    );
  return relativeFormatter.format(timeUnit.value, timeUnit.unit);
};

/***
 * This function returns an array of dates
 * belonging by day reference
 */
export const actualWeek = (currentDate: Date) => {
  const weekDate = new Date(currentDate);
  weekDate.setHours(0, 0, 0, 0);
  const weekDay = weekDate.getDay();
  const weekDifference =
    weekDate.getDate() - weekDay + (weekDay === 0 ? -6 : 1);
  const startMonday = new Date(weekDate.setDate(weekDifference));

  const weeks = [...new Array(7)].map((_, index) => {
    const day = new Date(startMonday);
    day.setDate(startMonday.getDate() + index);
    return day;
  });
  return weeks;
};

/**
 * This function converts into am or pm format,
 * receives HH:mm format
 */
export function format12h(timeStr: string): string {
  const [hours, minutes] = timeStr.split(":").map(Number);
  const suffix = hours >= 12 ? "PM" : "AM";
  const adjustedHour = hours % 12 || 12;
  const strHour = adjustedHour.toString().padStart(2, "0");
  const strMin = minutes.toString().padStart(2, "0");
  return `${strHour}:${strMin} ${suffix}`;
}

/***
 * This function, returns current status of schedule
 */
export function getMassStatus(weekDay: Date, scheduledTime: string) {
  const now = dayjs().toDate();
  const [hours, minutes] = scheduledTime.split(":").map(Number);
  console.log({ hours, minutes });

  const startTime = new Date(weekDay);
  startTime.setHours(hours, minutes, 0, 0);

  const endTime = new Date(startTime);
  endTime.setHours(startTime.getUTCHours() + 1); // Duración estimada: 1h

  if (now > endTime)
    return {
      type: "end",
      message: "Finalizó",
    };
  if (now >= startTime && now <= endTime)
    return { type: "now", message: "Se está celebrando" };
  return { type: "incoming", message: "Próxima" };
}
