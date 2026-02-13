import { useEffect, useState } from "react";
import EmblaCarousel from "../../../components/common/EmblaCarousel";
import type { Saint } from "../types/saint.type";
import CardSaint from "./CardSaint";

export default function CarouseSaint() {
  // TODO: Create a custom hook for handling errors and fetch
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
  return (
    <EmblaCarousel
      render={(slideClass) => (
        <>
          {saints.map((saint) => (
            <div key={saint.title} className={slideClass}>
              <CardSaint {...saint} />
            </div>
          ))}
        </>
      )}
    />
  );
}
