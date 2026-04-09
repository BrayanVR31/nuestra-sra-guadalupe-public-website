import path from "node:path";

// All the available json files stored on '.cache' folder
export enum CacheFiles {
  YOUTUBE = "youtube-videos.json"
};

// All cache global configuration
export const cacheConfig = {
  rootPath: path.join(process.cwd(), ".cache"),
  encodingResource: "utf-8",
  cacheExpiration: {
    ms: 1_000 * 60 * 60 * 24,
    hours: 24
  }
};