import type { APIRoute } from "astro";
import { getCache, saveCache, type BaseCacheResource } from "@/libs/local-cache";
import { CacheFiles } from "@/config/cache-api";
import type { RSS2APIResource, YouTubeItem } from "@/types/youtube-rss";
export const prerender = false;


export const GET: APIRoute = async () => {
  const youtubeChannelId = import.meta.env.YOUTUBE_CHANNEL_ID;

  if (!youtubeChannelId) {
    return new Response(
      JSON.stringify({ error: "Channel ID no configurated." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }

  // Fetch all cache results
  const cacheResource = await getCache<{ data: YouTubeItem[] } & BaseCacheResource>(CacheFiles.YOUTUBE);
  if (cacheResource) {
    return new Response(JSON.stringify({ playlist: cacheResource.data }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }

  // Fetch from external resource
  try {
    const youtubeRssUrl = encodeURI(`https://www.youtube.com/feeds/videos.xml?channel_id=${youtubeChannelId}`)
    const response = await fetch(
      `https://api.rss2json.com/v1/api.json?rss_url=${youtubeRssUrl}`,
      { signal: AbortSignal.timeout(8000) }
    );

    if (!response.ok) throw new Error(`YouTube responds ${response.status}`);

    const plainText = await response.text();
    const youtubeJSON: RSS2APIResource = JSON.parse(plainText);
    const playlist = youtubeJSON.items.slice(0, 5).map((item) => ({
      videoId: item.guid,
      title: item.title,
      thumbnailPreview: item.thumbnail,
      totalViews: 0,
      publishedAt: item.pubDate,
      url: item.link,
    }));

    await saveCache(CacheFiles.YOUTUBE, playlist);

    return new Response(JSON.stringify({ playlist }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.log(error);
    return new Response(
      JSON.stringify({ error: "Error while trying to fetch each video." }),
      { status: 503, headers: { "Content-Type": "application/json" } }
    );
  }
};