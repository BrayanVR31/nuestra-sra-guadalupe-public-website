import EmblaCarousel from "@/components/common/embla/EmblaCarousel";
import CardSaint from "./CardSaint";
import useSaint from "../hooks/useSaint";

export default function CarouseSaint() {
  const { data } = useSaint();
  return (
    <EmblaCarousel
      render={(slideClass) => (
        <>
          {data.map((saint) => (
            <div key={saint.title} className={slideClass}>
              <CardSaint {...saint} />
            </div>
          ))}
        </>
      )}
    />
  );
}
