import { existsSync } from "node:fs";
import fs from "node:fs/promises";
import path from "node:path";
import { CacheFiles, cacheConfig } from "@/config/cache-api";
import dayjs, { isValidTimestamp } from "@/libs/dayjs";

export type BaseCacheResource = {
  fetchedAt: number;
};

export type JSONResource<T> = {
  data: T;
} & BaseCacheResource;

export const getCache = async<T>(resource: CacheFiles): Promise<T | null> => {
  const resourceFile = path.join(cacheConfig.rootPath, resource);
  if (!existsSync(resourceFile)) return null;
  // Try to parse each raw file
  try {
    const rawContent = await fs.readFile(resourceFile, cacheConfig.encodingResource);
    const parseContent: T & BaseCacheResource = JSON.parse(rawContent as any);
    const cacheAt = +(parseContent.fetchedAt);
    const isAvailable = isValidTimestamp(cacheAt.valueOf(), cacheConfig.cacheExpiration.rangeTime);
    if (isAvailable) return parseContent;
    return null;
  } catch (e) {
    return null;
  }
}

export const saveCache = async<T = unknown>(resource: CacheFiles, data: T): Promise<JSONResource<T>> => {
  await fs.mkdir(cacheConfig.rootPath, { recursive: true });
  const resourceFile = path.join(cacheConfig.rootPath, resource);
  const rowData = JSON.stringify({ data, fetchedAt: dayjs().valueOf() }, null, 2);
  await fs.writeFile(
    resourceFile,
    rowData,
    cacheConfig.encodingResource
  );
  return JSON.parse(rowData) as JSONResource<T>;
}

export const cleanCache = async () => {
  await fs.rm(cacheConfig.rootPath, { recursive: true, force: true })
};