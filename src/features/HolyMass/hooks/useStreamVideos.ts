import { useEffect, useState } from "react";
import type { YoutubeAPIResource, YouTubeItem } from "@/types/youtube-rss";

type FetchState = "loading" | "success" | "error";

export default function useStreamVideos() {
  const [playlist, setPlaylist] = useState<YoutubeAPIResource | null>(null);
  const [videoPreview, setVideoPreview] = useState<YouTubeItem | null>(null);
  const [state, setState] = useState<FetchState>("loading");
  const [errorMsg, setErrorMsg] = useState<string>("");

  const getPlaylist = async (signal: AbortSignal) => {
    setState("loading");
    try {
      const response = await fetch("/api/stream-recording.json", { signal });

      if (!response.ok) throw new Error(`Error del servidor: ${response.status}`);

      const data: YoutubeAPIResource = await response.json();

      setPlaylist(data);
      if (data.playlist.length > 0) setVideoPreview(data.playlist[0]);
      setState("success");
    } catch (error) {
      if (error instanceof DOMException && error.name === "AbortError") return;
      setErrorMsg(error instanceof Error ? error.message : "Error desconocido");
      setState("error");
    }
  };

  useEffect(() => {
    const controller = new AbortController();
    getPlaylist(controller.signal);
    return () => controller.abort();
  }, []);

  return {
    data: playlist,
    isLoading: state === "loading",
    isSuccess: state === "success",
    isError: state === "error",
    errorMsg,
    videoPreview,
    retry: () => {
      const controller = new AbortController();
      getPlaylist(controller.signal);
    },
  };
}