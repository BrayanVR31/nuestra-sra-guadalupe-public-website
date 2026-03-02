import type { YoutubeRSS } from "@/types/youtube-rss";
import { findXMLItems } from "./xml-parser";

export const getYoutubeList = (xml: string) => {
  return findXMLItems<YoutubeRSS>(xml, "feed");
};
