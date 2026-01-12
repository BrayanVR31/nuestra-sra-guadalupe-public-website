import { XMLParser } from "fast-xml-parser";
import * as cheerio from "cheerio";
import _ from "lodash";
import { URL } from "node:url";
import type { CurrentSaint } from "../types/saint";

const saintRegex = /feast date:.+[0-9]{1,2}(?=[a-zA-Z])/gi;

interface ChannelItem {
  title: string;
};

interface RSSFeed {
  rss: {
    channel: {
      item: ChannelItem;
    };
  }
};

/***
 * Try to parse each value throught desired keys
 * on xml format (from rss format)
 */
export const getRSSFeed = <T>(rssDoc: string, ...rssKeys: string[]) => {
  const xmlParser = new XMLParser({
    ignoreAttributes: false,
    attributeNamePrefix: ""
  });
  const xml: RSSFeed = xmlParser.parse(rssDoc);
  return _.get(xml, rssKeys, "") as T;
}


/**
 * Receieve an html string representation
 * and convert it into object format
 */
export const parseJSONSaint = (htmlTxt: string): Omit<CurrentSaint, "title" | "link"> => {
  // Custom selector
  const $ = cheerio.load(htmlTxt);
  const paragraphs = $("p").text();
  const content = paragraphs.replace(saintRegex, "").trim();
  const htmlImage = $("img").toString();
  const image = serializeURL(htmlImage ?? "")
  return {
    image,
    content,
  }
}

/***
 * This function takes as an argument and
 * html string template
 */
const serializeURL = (malformedURL: string) => {
  if (!malformedURL) return "";
  // Index search
  const startIndex = malformedURL.indexOf("http");
  if (startIndex === -1) return "";
  let result = malformedURL.substring(startIndex);
  result = result
    .replace(/&quot;/g, '')
    .replace(/\\"/g, '')
    .replace(/<\/?[^>]+>/g, '')
    .replace(/[">]/g, '')
    .replace(/\s.*/g, '');
  return result.trim();
}