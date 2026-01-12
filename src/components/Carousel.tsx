import { ChevronRight, ChevronLeft } from "lucide-react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface CarouselProps {
  images: string[];
};

export default function Carousel({ images }: CarouselProps) {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={20}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      className="rounded-lg shadow-xl"
    >
      <SwiperSlide className="bg-blue-500 h-full flex items-center justify-center text-white text-2xl font-bold">
        Slide 1
      </SwiperSlide>
      <SwiperSlide className="bg-emerald-500 h-full flex items-center justify-center text-white text-2xl font-bold">
        Slide 2
      </SwiperSlide>
      <SwiperSlide className="bg-purple-500 h-full flex items-center justify-center text-white text-2xl font-bold">
        Slide 3
      </SwiperSlide>
    </Swiper>
  );
}

function ButtonSlideGroup() {
  const swiper = useSwiper();
  return (
    <div>
      <button onClick={() => swiper.slideNext()}>Next</button>
    </div>
  );
}