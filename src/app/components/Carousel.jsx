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
        {/* <img
          className="rounded-lg"
          src="https://images.unsplash.com/photo-1728137264593-257cfa1c5b4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        /> */}
        <Image
          src="https://images.unsplash.com/photo-1728137264593-257cfa1c5b4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="rounded-lg mx-auto md:mx-0 w-5/6 md:w-full"
          width={470}
          height={350}
          alt="brands"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          className="rounded-lg mx-auto md:mx-0 w-5/6 md:w-full"
          src="https://images.unsplash.com/photo-1732901812656-1e3c79d414f7?q=80&w=1944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width={470}
          height={350}
          alt="brands"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          className="rounded-lg mx-auto md:mx-0 w-5/6 md:w-full"
          src="https://images.unsplash.com/photo-1440942788614-7429a62bc8d0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width={470}
          height={350}
          alt="brands"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Carousel;
