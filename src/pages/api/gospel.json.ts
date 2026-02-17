import type { APIRoute } from "astro";
import { getDailyGospel } from "@/features/DailyGospel/utils/gospelXML";
import { getAciprensaRss } from "@/libs/aciprensa";

export const prerender = false;

export const GET: APIRoute = async ({ params, request }) => {
  const aciprensaRssUrl = import.meta.env.ACIPRENSA_RSS_URL;

  try {
    if (!aciprensaRssUrl) {
      return new Response(JSON.stringify({ error: "RSS URL not configured" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }

    const response = await fetch(`${aciprensaRssUrl}/evangelio`, {
      signal: AbortSignal.timeout(5000),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.text();
    const { channel } = getAciprensaRss(data);
    const saintDay = getDailyGospel(channel);

    return new Response(JSON.stringify(saintDay), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "s-maxage=86400, stale-while-revalidate=43200",
        "CDN-Cache-Control": "max-age=86400",
      },
    });
  } catch (error) {
    console.error("❌ Error fetching saints:", error);

    return new Response(
      JSON.stringify({
        error: "Unable to fetch saints data",
        message: error instanceof Error ? error.message : "Unknown error",
      }),
      {
        status: 503,
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "s-maxage=300",
          "Retry-After": "300",
        },
      },
    );
  }
};
