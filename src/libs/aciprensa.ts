import { XMLParser } from "fast-xml-parser";
import _ from "lodash";
import * as cheerio from "cheerio";
import type { AciprensaRSS } from "../types/aciprensa.type";

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

const normalizeDescription = (plainHtml: string) => {
  const regex = /feast date:.+[0-9]{1,2}(?=[a-zA-Z])/gi;
  return plainHtml.replace(regex, "").trim();
};

export const getContent = (description: string) => {
  const $ = cheerio.load(description);
  const allParagraphs = $("p").text();
  return normalizeDescription(allParagraphs);
};

export const getImage = (description: string) => {
  const $ = cheerio.load(description);
  const image = $("img").toString();
  return normalizeURLImage(image);
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
  return result.trim();
};
