// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import pic1 from "../../assets/home/1.jpg";
import pic2 from "../../assets/home/2.jpg";
import pic3 from "../../assets/home/3.jpg";
import pic4 from "../../assets/home/4.jpg";
import pic5 from "../../assets/home/5.jpg";
import pic6 from "../../assets/home/6.jpg";
import pic7 from "../../assets/home/7.jpg";
import pic8 from "../../assets/home/8.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useEffect, useState } from "react";

export default () => {
  const works = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8];
  const [slidesPerView, setSlidesPerView] = useState(1);

  // Check screen width and update slidesPerView
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width >= 1280) {
        // 'xl' in Tailwind is 1280px
        setSlidesPerView(4);
      } else if (width >= 1024) {
        // 'lg' in Tailwind is 1024px
        setSlidesPerView(3);
      } else if (width >= 768) {
        // 'md' in Tailwind is 768px
        setSlidesPerView(2);
      } else {
        // 'sm' in Tailwind is less than 768px
        setSlidesPerView(1);
      }
    };

    window.addEventListener("resize", handleResize);

    // Initial check
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <Swiper
      // install Swiper modules
      modules={[Autoplay, Pagination, Scrollbar, A11y]}
      spaceBetween={20}
      slidesPerView={slidesPerView}
      autoplay
      pagination={{ clickable: true }}
      className="min-h-[120vh]"
    >
      {works.map((work, index) => {
        return (
          <SwiperSlide key={index}>
            <img src={work} alt="work pic" />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
