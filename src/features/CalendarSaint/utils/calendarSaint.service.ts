import _ from "lodash";
import { getSaintDay } from "./saintXML";
import type { Saint } from "../types/saint.type";
import { getAciprensaRss } from "../../../libs/aciprensa";

const aciprensaRssUrl = import.meta.env.ACIPRENSA_RSS_URL;

export async function getSaintsCalendar(): Promise<Saint[] | null> {
  if (!aciprensaRssUrl) return null;
  try {
    const response = await fetch(`${aciprensaRssUrl}/saints`);
    if (!response.ok) return null;
    const data = await response.text();
    const { channel } = getAciprensaRss(data);
    const saintDay = getSaintDay(channel);
    return saintDay;
  } catch (error) {
    return null;
  }
}
