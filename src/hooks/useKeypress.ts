import { useEffect } from "react";

export default function useKeypress(targetKey: string, handler: () => void) {
  useEffect(() => {
    const eventHandler = (e: KeyboardEvent) => {
      if (e.key === targetKey) handler();
    }
    window.addEventListener("keydown", eventHandler);
    return () => window.removeEventListener("keydown", eventHandler);
  }, [targetKey, handler]);
}