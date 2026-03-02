import { useEffect, useState } from "react";
import type { StreamVideos } from "../types/stream.type";

export default function useStreamVideos() {
  const [playlist, setPlaylist] = useState<StreamVideos | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const getPlaylist = async () => {
    try {
      const response = await fetch("/api/stream-recording.json");
      const data = await response.json();
      setPlaylist(data);
      setIsSuccess(true);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getPlaylist();
  }, []);
  return {
    data: playlist,
    isLoading,
    isSuccess,
    isError,
  };
}
