import { Swiper, SwiperSlide } from "swiper/react";
// swiper css styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// Swiper useful modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import type { CSSProperties } from "react";

interface ChurchSliderProps {
  images: ImageMetadata[];
};

// Change the value on 'global.css'
const swiperCssProp: CSSProperties & Record<string, string> = {
  "--swiper-pagination-color": "var(--sp-pagination)",
  "--swiper-navigation-color": "var(--sp-navigation)"
}

export default function ChurchSlider({ images }: ChurchSliderProps) {
  return (
    <Swiper
      slidesPerView={1}
      speed={1_000}
      loop={true}
      pagination={{ clickable: true }}
      autoplay={{ delay: 4_000, disableOnInteraction: false }}
      navigation={true}
      modules={[Autoplay, Navigation, Pagination]}
      className="h-full w-full"
      style={swiperCssProp}
    >
      {images.map((img, index) => (
        <SwiperSlide className="relative">
          {/** TODO: Make a new component to wrap all content called 'HeroItem' */}
          <div className="w-full h-full bg-gray-200 relative shrink-0 grow-0">
            {/** Overlay element */}
            <div className="bg-neutral-950/50 inset-0 absolute" />
            <img className="w-full h-full object-cover" key={`swiper__slide__${index + 1}`} src={img.src} loading={index === 0 ? "eager" : "lazy"} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}