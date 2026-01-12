import _ from "lodash";
import { getRSSFeed, parseJSONSaint } from "../libs/xml-parser";
import type { CurrentSaint } from "../types/saint";

// TODO: Create an .env file to store variables
const CATHOLIC_URL = {
  RSS_SAINTS: "https://www.aciprensa.com/rss/saints",
};

export async function getCurrentSaintList(): Promise<CurrentSaint[] | null> {
  let saints: CurrentSaint[] = [];
  const getRSS = await fetch(CATHOLIC_URL.RSS_SAINTS);
  if (!getRSS.ok) return null;
  const saintText = await getRSS.text();
  const saintRss = getRSSFeed<string[] | string>(
    saintText,
    "rss",
    "channel",
    "item",
  );
  // Check if there are a single or multiple items on xml
  if (Array.isArray(saintRss)) {
    const saintList = saintRss.map((rss) => _.get(rss, "description", ""));
    saints = saintList.map((saint, index) => ({
      ...parseJSONSaint(saint),
      title: _.get(saintRss[index], "title", ""),
      link: _.get(saintRss[index], "link", "") as string,
    }));
  } else {
    saints = [{ ...parseJSONSaint(_.get(saintRss, "description", "")), title: _.get(saintRss, "title", ""), link: _.get(saintRss, "link", "") as string, }];
  }

  return saints;
}