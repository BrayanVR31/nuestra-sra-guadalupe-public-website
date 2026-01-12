import { useEffect, useState } from "react";

export default function useToday() {
  const [today, setToday] = useState(new Date());
  useEffect(() => {
    const now = new Date();
    const tomorrow = new Date(now);
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0);
    const midnightMs = tomorrow.getTime() - now.getTime();
    const timer = setTimeout(() => {
      setToday(new Date());
    }, midnightMs);
    return () => clearTimeout(timer);
  }, [today]);
  return today;
}