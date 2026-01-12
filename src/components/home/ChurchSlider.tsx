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
          <div className="absolute w-full h-full top-0 left-0 flex flex-col items-center justify-center text-white">
            <h1 className="font-extrabold text-6xl mb-10">Title goes here</h1>
            <p className="max-w-9/12 leading-9 text-center">Every day is taco ipsum tuesday. Burritos are very tasty. Tacos for breakfast, lunch and dinner. 50 cent tacos! I’ll take 30. Yeah, apparently the taco shack was robbed. They left the money but took the tacos. Tacos, again? This will be 5 times this week and it’s only Tuesday. Tacos, again? This will be 5 times this week and it’s only Tuesday. Burritos are very tasty. It’s long been rumored that the chupacabra is really just a crazed man who’s local taco shop went out of business.</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}