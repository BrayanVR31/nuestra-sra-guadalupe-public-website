import { useEffect, useState } from "react";
import type { DailyGospel } from "../types/gospel.type";

export default function useGospel() {
  const [gospel, setGospel] = useState<DailyGospel | null>(null);
  const getDailyGospel = async () => {
    try {
      const response = await fetch("/api/gospel.json");
      const data = await response.json();
      setGospel(data);
    } catch (error) {}
  };
  useEffect(() => {
    getDailyGospel();
  }, []);
  return {
    data: gospel,
  };
}
