import EmblaCarousel from "@/components/common/embla/EmblaCarousel";
import useGospel from "../hooks/useGospel";
import CardGospel from "./CardGospel";

export default function CarouselGospel() {
  const { data } = useGospel();
  if (!data || !data.readingList) return null;
  return (
    <EmblaCarousel
      render={(slideClass) => (
        <>
          {data.readingList.map((reading) => (
            <div key={reading.title} className={`${slideClass}`}>
              <CardGospel category={data.title} {...reading} />
            </div>
          ))}
        </>
      )}
    />
  );
}
