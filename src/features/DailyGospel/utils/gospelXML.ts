import _ from "lodash";
import dayjs from "@/libs/dayjs";
import type { DailyGospel, GospelType } from "../types/gospel.type";
import type { AciprensaRSS, RSSItem } from "@/types/aciprensa.type";
import {
  getGospelLink,
  getGospelPublishedAt,
  getGospelReadingList,
  getGospelTitle,
} from "@/libs/aciprensa";

export const getDailyGospel = (
  channel: AciprensaRSS["rss"]["channel"],
): DailyGospel => {
  const item = channel.item as RSSItem;
  return {
    title: getGospelTitle(item.title),
    link: getGospelLink(item.link),
    publishedAt: dayjs(getGospelPublishedAt(item.pubDate)).format(
      "D [de] MMMM [de] YYYY",
    ),
    readingList: getGospelReadingList(item.description).map(
      (reading, index, array) => {
        let type: GospelType;
        // Match each reading category
        if (index === array.length - 1) type = "evangelio";
        else if (index === 0) type = "primeraLectura";
        else if (reading.title.toLocaleLowerCase().includes("salmo"))
          type = "salmoResponsorial";
        else type = "segundaLectura";
        return {
          ...reading,
          type,
        };
      },
    ),
  };
};
