export type Video = {
  videoId: string;
  title: string;
  thumbnailPreview: string;
  totalViews: string;
  publishedAt: string;
  url: string;
};

export type StreamVideos = {
  playlist: Video[];
};
