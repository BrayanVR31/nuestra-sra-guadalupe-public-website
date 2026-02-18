export type Verse = {
  nVerse: string;
  content: string;
};

export type GospelReading = {
  title: string;
  verses: Verse[];
  type?: GospelType;
  category?: string;
};

export type DailyGospel = {
  title: string;
  link: string;
  publishedAt: string;
  readingList: GospelReading[];
};

export type GospelType =
  | "primeraLectura"
  | "salmoResponsorial"
  | "evangelio"
  | "segundaLectura";
