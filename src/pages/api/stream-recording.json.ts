import { getYoutubeList } from "@/libs/stream-youtube";
import type { APIRoute } from "astro";

const defaultError = {
  server: {
    error: "Something went wrong, please try again.",
  },
};

export const GET = (async ({ params, request }) => {
  const youtubeChannelId = encodeURIComponent(
    import.meta.env.YOUTUBE_CHANNEL_ID,
  );
  try {
    if (!youtubeChannelId)
      return new Response(JSON.stringify(defaultError.server), {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      });
    const response = await fetch(
      `https://www.youtube.com/feeds/videos.xml?channel_id=${youtubeChannelId}`,
    );
    if (!response.ok)
      return new Response(JSON.stringify(defaultError.server), {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      });
    const plainText = await response.text();
    const youtubeJSON = getYoutubeList(plainText);
    const data = youtubeJSON.entry.map((item) => ({
      videoId: item["yt:videoId"],
      title: item.title,
      thumbnailPreview: item["media:group"]["media:thumbnail"].url,
      totalViews:
        item["media:group"]["media:community"]["media:statistics"].views,
      publishedAt: item.published,
      url: item.link.href,
    }));
    const playlist = data.length <= 5 ? data : data.slice(0, 5);
    return new Response(JSON.stringify({ playlist }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return new Response(JSON.stringify(defaultError.server), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}) satisfies APIRoute;
