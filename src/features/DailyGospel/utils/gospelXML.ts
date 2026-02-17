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
import { gospelPictures } from "../data/gospel-pictures";

export const getDailyGospel = (
  channel: AciprensaRSS["rss"]["channel"],
): DailyGospel => {
  const gospelTypes: GospelType[] = [
    "primeraLectura",
    "salmoResponsorial",
    "evangelio",
  ];
  const item = channel.item as RSSItem;
  return {
    title: getGospelTitle(item.title),
    link: getGospelLink(item.link),
    publishedAt: dayjs(getGospelPublishedAt(item.pubDate)).format(
      "D [de] MMMM [de] YYYY",
    ),
    readingList: getGospelReadingList(item.description).map((reading) => ({
      ...reading,
      type: gospelTypes?.shift(),
    })),
  };
};
