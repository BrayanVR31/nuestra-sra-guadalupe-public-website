type YoutubeEntry = {
  id: string;
  title: string;
  published: string;
  updated: string;
  "yt:videoId": string;
  link: {
    rel: string;
    href: string;
  };
  "media:group": {
    "media:community": {
      "media:statistics": {
        views: string;
      };
    };
    "media:thumbnail": {
      url: string;
      width: string;
      height: string;
    };
  };
};

export type YoutubeRSS = {
  id: string;
  "yt:channelId": string;
  title: string;
  author: {
    name: string;
    uri: string;
  };
  published: string;
  entry: YoutubeEntry[];
};

export type RSS2Feed = {
  url: string;
  title: string;
  link: string;
  author: string;
  description: string;
  image: string;
};

export type RSS2YoutubeItem = {
  title: string;
  pubDate: string;
  link: string;
  guid: string;
  author: string;
  thumbnail: string;
  description: string;
  content: string;
};

export type RSS2APIResource = {
  status: "ok";
  feed: RSS2Feed;
  items: RSS2YoutubeItem[];
};

export type YouTubeItem = {
  videoId: string;
  title: string;
  thumbnailPreview: string;
  totalViews: string;
  publishedAt: string;
  url: string;
}

export type YoutubeAPIResource = {
  playlist: YouTubeItem[];
};