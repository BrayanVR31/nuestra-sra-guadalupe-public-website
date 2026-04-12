import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import isoWeek from "dayjs/plugin/isoWeek";
import "dayjs/locale/es";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(isoWeek);
dayjs.locale("es");
dayjs.tz.setDefault("America/Mexico_City");

type TimeUnit = {
  threshold: number;
  value: number;
  unit: Intl.RelativeTimeFormatUnit;
};

/**
 * Transforms a date into a relative time string.
 * e.g. "hace 3 días", "en 2 horas"
 */
export const transformRelativeTime = (datetime: Date): string => {
  const now = dayjs();
  const target = dayjs(datetime);
  const diffSeconds = target.diff(now, "second");
  const absDiff = Math.abs(diffSeconds);

  const relativeFormatter = new Intl.RelativeTimeFormat("es-MX", {
    numeric: "auto",
  });

  const TIME_UNITS: TimeUnit[] = [
    { threshold: 60, value: diffSeconds, unit: "second" },
    { threshold: 3600, value: target.diff(now, "minute"), unit: "minute" },
    { threshold: 86400, value: target.diff(now, "hour"), unit: "hour" },
    { threshold: 604800, value: target.diff(now, "day"), unit: "day" },
    { threshold: 2592000, value: target.diff(now, "week"), unit: "week" },
    { threshold: 31536000, value: target.diff(now, "month"), unit: "month" },
    { threshold: Infinity, value: target.diff(now, "year"), unit: "year" },
  ];

  const timeUnit = TIME_UNITS.find(({ threshold }) => absDiff < threshold);
  const fallback = TIME_UNITS[TIME_UNITS.length - 1];

  return relativeFormatter.format(
    timeUnit?.value ?? fallback.value,
    timeUnit?.unit ?? "year",
  );
};

/**
 * Returns an array of 7 Date objects for the ISO week
 * (Monday–Sunday) that contains the given date.
 * Requires dayjs/plugin/isoWeek.
 */
export const actualWeek = (currentDate: Date): Date[] => {
  const startOfWeek = dayjs(currentDate).startOf("isoWeek");
  return Array.from({ length: 7 }, (_, i) =>
    startOfWeek.add(i, "day").toDate(),
  );
};

/**
 * Converts a "HH:mm" string to 12-hour format.
 * e.g. "14:30" → "02:30 PM"
 */
export function format12h(timeStr: string): string {
  const [hours, minutes] = timeStr.split(":").map(Number);
  const suffix = hours >= 12 ? "PM" : "AM";
  const adjustedHour = hours % 12 || 12;
  const strHour = adjustedHour.toString().padStart(2, "0");
  const strMin = minutes.toString().padStart(2, "0");
  return `${strHour}:${strMin} ${suffix}`;
}

type MassStatus = {
  type: "end" | "now" | "incoming";
  message: string;
};

/**
 * Returns the current status of a scheduled mass.
 * Uses dayjs with timezone to avoid UTC/local time mixing bugs.
 * Estimated mass duration: 1 hour.
 */
export function getMassStatus(weekDay: Date, scheduledTime: string): MassStatus {
  const [hours, minutes] = scheduledTime.split(":").map(Number);

  const startTime = dayjs(weekDay).hour(hours).minute(minutes).second(0).millisecond(0);
  const endTime = startTime.add(1, "hour");
  const now = dayjs();

  if (now.isAfter(endTime)) return { type: "end", message: "Finalizó" };
  if (now.isBefore(startTime)) return { type: "incoming", message: "Próxima" };
  return { type: "now", message: "Se está celebrando" };
}

// Check if the reference timestamp is a valid respect today
export const isValidTimestamp = (
  timestamp: number, [hour, minutes, seconds]: [hour: number, minutes: number, seconds: number]
) => {
  const today = dayjs();
  const referenceTimestamp = dayjs(timestamp);
  // eg. 8:45 AM => [8, 45, 0]
  const persistentToday = dayjs(today.valueOf()).hour(hour).minute(minutes).second(seconds);

  const isDifferentDay = !today.isSame(referenceTimestamp, "day");
  const isNextToday = today.isAfter(persistentToday);
  return !(isDifferentDay && isNextToday);
}

export default dayjs;