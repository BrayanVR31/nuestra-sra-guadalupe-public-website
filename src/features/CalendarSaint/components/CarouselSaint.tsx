import EmblaCarousel from "../../../components/common/EmblaCarousel";
import type { Saint } from "../types/saint.type";
import CardSaint from "./CardSaint";

interface CarouseSaintProps {
  saints: Saint[];
}

export default function CarouseSaint({ saints }: CarouseSaintProps) {
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
