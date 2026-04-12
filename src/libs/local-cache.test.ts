import { it, describe, expect } from "vitest";
import { existsSync } from "node:fs";
import path from "node:path";
import { saveCache, cleanCache } from "./local-cache";
import { cacheConfig, CacheFiles } from "@/config/cache-api";
import type { YoutubeAPIResource, YouTubeItem } from "@/types/youtube-rss";

describe("Local cache", () => {
  it("should save youtube playlist data into a json file (.cache directory)", async () => {
    await cleanCache();
    const fakeResource: YoutubeAPIResource = {
      playlist: []
    };
    await saveCache(CacheFiles.YOUTUBE, fakeResource);
    expect(existsSync(path.join(cacheConfig.rootPath, CacheFiles.YOUTUBE))).toBeTruthy();
    await cleanCache();
  });
  it("should return a youtube JSON format with valid structure and content", async () => {
    await cleanCache();
    // Prepare all fake data
    const fakeItem: YouTubeItem = {
      videoId: "1",
      url: "youtube.example.com",
      title: "Video",
      publishedAt: "10000",
      thumbnailPreview: "video.jpg",
      totalViews: "0"
    };
    const fakeResource: YoutubeAPIResource = {
      playlist: [
        fakeItem
      ]
    };
    const data = await saveCache(CacheFiles.YOUTUBE, fakeResource);
    expect(data).toHaveProperty("data.playlist", fakeResource.playlist);
    expect(data).toHaveProperty("fetchedAt");
    await cleanCache();
  });
});