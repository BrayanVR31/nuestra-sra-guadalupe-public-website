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
