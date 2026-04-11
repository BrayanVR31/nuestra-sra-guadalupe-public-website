import { Fragment } from "react";

interface HighlightTextProps {
  keywords: string[];
  children: string;
};

export default function HighlightText({ keywords, children }: HighlightTextProps) {
  const highlightRegex = new RegExp(`(${keywords.join("|")})`, "gi");
  const words = children.split(highlightRegex);
  return words.map((word, index) => (
    <Fragment key={`${word}__highlight__${index}`}>
      {keywords.includes(word.toLowerCase()) ? <strong className="text-gold-600">{word}</strong> : word}
    </Fragment>
  ))
}