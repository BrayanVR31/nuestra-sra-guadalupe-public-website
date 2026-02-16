import { useEffect, useState } from "react";
import type { Saint } from "../types/saint.type";

export default function useSaint() {
  const [saints, setSaints] = useState<Saint[]>([]);
  const getSaintDay = async () => {
    try {
      const response = await fetch("/api/saintday.json");
      const data = await response.json();
      setSaints(data);
    } catch (error) {}
  };
  useEffect(() => {
    getSaintDay();
  }, []);
  return {
    data: saints,
  };
}
