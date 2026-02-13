export interface AciprensaRSS {
  rss: {
    channel: {
      title: string;
      link: string;
      description: string;
      item: RSSItem | RSSItem[];
    };
  };
}

export interface RSSItem {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  category: string | string[];
}
