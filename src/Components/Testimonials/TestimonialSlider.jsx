// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import GoogleReviewsPic from "../../assets/home/reviews.png";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useEffect, useState } from "react";

export default () => {
  const companies = [
    GoogleReviewsPic,
    GoogleReviewsPic,
    GoogleReviewsPic,
    GoogleReviewsPic,
    GoogleReviewsPic,
    GoogleReviewsPic,
    GoogleReviewsPic,
    GoogleReviewsPic,
    GoogleReviewsPic,
  ];
  const [isMobile, setIsMobile] = useState(false);

  // Check screen width and update state
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // 'md' in Tailwind is 768px
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
      modules={[Pagination, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={isMobile ? 2 : 4}
      autoplay
      pagination={{ clickable: true }}
      className="h-32 md:h-44 lg:h-48"
    >
      {companies.map((company, index) => {
        return (
          <SwiperSlide key={index}>
            <img
              src={company}
              alt="testimonials pic"
              className="aspect-video object-contain"
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
