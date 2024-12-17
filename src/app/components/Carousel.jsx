"use client";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

const Carousel = () => {
  return (
    <Swiper
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      pagination={true}
      modules={[Autoplay, Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
        {/*  <Image
                        src="/assets/images/hero-tower.png"
                        alt="Hero Background"
                        width={350}
                        height={350}
                        className="rounded-xl w-5/6 h-auto mx-auto mt-5 "
         />*/}
        <Image
          src="/assets/services/telecom-wire.jpg"
          className="rounded-lg mx-auto md:mx-0 w-5/6 md:w-full"
          width={470}
          height={350}
          alt="brands"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          className="rounded-lg mx-auto md:mx-0 w-5/6 md:w-full"
          src="/assets/services/copper.jpg"
          width={470}
          height={350}
          alt="brands"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          className="rounded-lg mx-auto md:mx-0 w-5/6 md:w-full"
          src="/assets/services/server.jpg"
          width={470}
          height={350}
          alt="brands"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Carousel;
