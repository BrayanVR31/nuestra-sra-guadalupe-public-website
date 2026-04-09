import { existsSync } from "node:fs";
import fs from "node:fs/promises";
import path from "node:path";
import { CacheFiles, cacheConfig } from "@/config/cache-api";
import dayjs from "@/libs/dayjs";

export type BaseCacheResource = {
  fetchedAt: number;
};

export const getCache = async<T>(resource: CacheFiles): Promise<T | null> => {
  const resourceFile = path.join(cacheConfig.rootPath, resource);
  if (!existsSync(resourceFile)) return null;
  // Try to parse each raw file
  try {
    const rawContent = await fs.readFile(resourceFile, cacheConfig.encodingResource);
    const parseContent: T & BaseCacheResource = JSON.parse(rawContent as any);
    const cacheAt = dayjs(parseContent.fetchedAt);
    const isAvailable = dayjs().diff(cacheAt, "hours") < cacheConfig.cacheExpiration.hours
    if (isAvailable) return parseContent;
    return null;
  } catch (e) {
    return null;
  }
}

export const saveCache = async (resource: CacheFiles, data: unknown) => {
  await fs.mkdir(cacheConfig.rootPath, { recursive: true });
  const resourceFile = path.join(cacheConfig.rootPath, resource);
  await fs.writeFile(
    resourceFile,
    JSON.stringify({ data, fetchedAt: dayjs().valueOf() }, null, 2),
    cacheConfig.encodingResource
  );
}