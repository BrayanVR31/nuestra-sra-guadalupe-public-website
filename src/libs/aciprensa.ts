import { XMLParser } from "fast-xml-parser";
import _ from "lodash";
import * as cheerio from "cheerio";
import sanitizeHtml from "sanitize-html";
import type { AciprensaRSS } from "../types/aciprensa.type";
import type {
  GospelReading,
  Verse,
} from "@/features/DailyGospel/types/gospel.type";

const sanitizeOptions = {
  allowedTags: ["p", "br", "strong", "em", "a", "img", "h3", "div", "span"],
  allowedAttributes: {
    a: ["href"],
    img: ["src", "alt"],
    div: ["style", "class"],
    span: ["class"],
  },
  allowedSchemes: ["http", "https"],
};

/***
 * Try to parse each value throught desired keys
 * on xml format
 */
export const findXMLItems = <ParsedObject>(xml: string, ...items: string[]) => {
  const xmlParser = new XMLParser({
    ignoreAttributes: false,
    attributeNamePrefix: "",
  });
  const parseXml = xmlParser.parse(xml);
  return _.get(parseXml, items, "") as ParsedObject;
};

export const getAciprensaRss = (xml: string) => {
  return findXMLItems<AciprensaRSS["rss"]>(xml, "rss");
};

const normalizeDescription = (text: string) => {
  const feastDateRegex = /feast date:\s*\w+\s+\d+/gi;

  return text.replace(feastDateRegex, "").replace(/\s+/g, " ").trim();
};

export const getContent = (htmlContent: string) => {
  const $ = cheerio.load(htmlContent);
  const rawText = $("body").text();
  return normalizeDescription(rawText);
};

export const getImage = (description: string) => {
  const cleanDescription = sanitizeHtml(description, sanitizeOptions);
  const $ = cheerio.load(cleanDescription);
  const image = $("img").toString();
  const base = normalizeURLImage(image);
  return base;
};

/***
 * This function takes as an argument and
 * serialize malformed html string template on right html
 */
const normalizeURLImage = (malformedURL: string) => {
  if (!malformedURL) return null;
  // Index search
  const startIndex = malformedURL.indexOf("http");
  if (startIndex === -1) return null;
  let result = malformedURL.substring(startIndex);
  result = result
    .replace(/&quot;/g, "")
    .replace(/\\"/g, "")
    .replace(/<\/?[^>]+>/g, "")
    .replace(/[">]/g, "")
    .replace(/\s.*/g, "");
  return result.trim()?.replace("http://", "https://");
};

// Gospel scrapping
export const getGospelTitle = (description: string) => {
  const cleanDescription = sanitizeHtml(description, sanitizeOptions);
  const title = cleanDescription?.trim();
  return title;
};

export const getGospelLink = (description: string) => {
  const cleanDescription = sanitizeHtml(description, sanitizeOptions);
  const link = cleanDescription?.trim()?.replace("http://", "https://");
  return link;
};

export const getGospelPublishedAt = (description: string) => {
  const cleanDescription = sanitizeHtml(description, sanitizeOptions);
  const pubAt = cleanDescription?.trim();
  return pubAt;
};

export const getGospelReadingList = (description: string) => {
  const cleanDescription = sanitizeHtml(description, sanitizeOptions);
  const $ = cheerio.load(cleanDescription);
  const readingList: GospelReading[] = [];
  console.log(cleanDescription);
  $('div[style*="margin-bottom:20px"]').each((_, element) => {
    const titleDiv = $(element);
    const titleReading = titleDiv.find("h3").text().trim();

    if (titleReading) {
      const verses: Array<Verse> = [];

      titleDiv.find(".readings__verse-container").each((_, verseEl) => {
        const nVerse = $(verseEl).find(".readings__verse").text().trim();
        const content = $(verseEl).find(".readings__text").text().trim();

        if (nVerse && content) {
          verses.push({ nVerse, content });
        }
      });

      if (verses.length > 0) {
        readingList.push({
          title: titleReading,
          verses,
        });
      }
    }
  });

  return readingList;
};
