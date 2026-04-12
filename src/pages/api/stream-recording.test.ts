import { describe, it, expect } from "vitest";
import fs from "node:fs/promises";
import path from "node:path";
import { GET } from "./stream-recording.json";
import { type JSONResource, cleanCache, getCache, saveCache } from "@/libs/local-cache";
import type { YoutubeAPIResource } from "@/types/youtube-rss";
import { CacheFiles, cacheConfig } from "@/config/cache-api";
import dayjs from "@/libs/dayjs";

describe("Stream recording API", () => {
  const mockContext = () => ({
    request: new Request("http://localhost/api/stream-recording.json", {
      method: "GET"
    }),
    locals: {},
    params: {}
  });

  const invalidJson = async () => {
    const timestamp = dayjs().subtract(1, "day").hour(8).minute(46).second(0).valueOf();
    const data: JSONResource<YoutubeAPIResource> = {
      data: { playlist: [] },
      fetchedAt: timestamp
    }
    await fs.mkdir(cacheConfig.rootPath, { recursive: true });
    const resourceFile = path.join(cacheConfig.rootPath, CacheFiles.YOUTUBE);
    const rowData = JSON.stringify({ ...data }, null, 2);
    await fs.writeFile(
      resourceFile,
      rowData,
      cacheConfig.encodingResource
    );
  }
  it("should return a 200 status code", async () => {
    const context = mockContext();
    const response = await GET(context as any)
    expect(response.status).toBe(200);
    await cleanCache();
  });

  it("should store all fetched real data into the .cache/ directory", async () => {
    await cleanCache();
    const context = mockContext();
    const response = await GET(context as any);
    const data = await response.json() as YoutubeAPIResource;
    const cacheData = await getCache<JSONResource<YoutubeAPIResource>>(CacheFiles.YOUTUBE);
    expect(cacheData).toHaveProperty("data", data.playlist);
    await cleanCache();
  });

  it("should return null on cache data when does have an invalid expiration date", async () => {
    await cleanCache();
    await invalidJson();
    const cacheData = await getCache<JSONResource<YoutubeAPIResource>>(CacheFiles.YOUTUBE);
    expect(cacheData).toBeNull();
    await cleanCache();
  });
  it("should fetch a fresh data when date cache was expired", async () => {
    await cleanCache();
    await invalidJson();
    const context = mockContext();
    const response = await GET(context as any);
    const data = await response.json() as YoutubeAPIResource;
    expect(response.status).toBe(200);
    expect(data.playlist.length).toBeGreaterThanOrEqual(1);
    await cleanCache();
  });
});
