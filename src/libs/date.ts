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
      return Math.round(this.seconds / 60)
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
    numeric: "auto"
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
  const timeUnit = TIME_UNITS.find((timeUnit) => absDifference < timeUnit.threshold);
  if (!timeUnit) return relativeFormatter.format(TIME_UNITS[TIME_UNITS.length - 1].value, "year");
  return relativeFormatter.format(timeUnit.value, timeUnit.unit);
}