import _ from "lodash";
import dayjs from "../../../libs/dayjs";
import type { Saint } from "../types/saint.type";
import type { AciprensaRSS } from "../../../types/aciprensa.type";
import { getContent, getImage } from "../../../libs/aciprensa";

export const getSaintDay = (
  channel: AciprensaRSS["rss"]["channel"],
): Saint[] => {
  const { item } = channel;
  const items = _.isArray(item) ? item : [item];
  return items.map((item) => ({
    content: getContent(item.description),
    link: item.link,
    title: item.title,
    humanDate: dayjs().format("D [de] MMMM [de] YYYY"),
    image: getImage(item.description),
  }));
};
