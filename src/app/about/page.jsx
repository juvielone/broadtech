"use client";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import Navbar from "../components/Navbar";
import Footer from "../sections/Footer";

const About = () => {
  return (
    <>
      <div className="sm:w-11/12 mx-auto pb-10">
        <Navbar />
        <h1 className="md:text-2xl w-11/12 font-bold mt-10  text-center mx-auto">
          Broadtech Business Solutions is an emerging trusted and outstanding
          partner of major carriers and providers in the Telecommunications and
          Communications industry.
        </h1>
        <div className="h-fit mt-10 ">
          <Swiper
            slidesPerView={1} // Set a fractional value to show portions of adjacent slides
            centeredSlides={true} // Ensure the active slide is centered
            spaceBetween={10} // Adjust spacing between slides
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {/* it-infas */}
            <SwiperSlide className="w-fit">
              <Image
                src="/assets/services/it-infas.jpg"
                className=" rounded-lg h-80 mx-auto w-5/6 md:md:w-fit"
                width={470}
                height={350}
                alt="brands"
              />
            </SwiperSlide>

            {/* wireband */}
            <SwiperSlide className="">
              <Image
                src="/assets/services/wireband.jpg"
                className="rounded-lg mx-auto h-80  w-5/6  md:w-fit"
                width={470}
                height={250}
                alt="brands"
              />
            </SwiperSlide>

            {/* 5g phone */}
            <SwiperSlide>
              <Image
                src="/assets/services/carrier.jpg"
                className="rounded-lg mx-auto  md:h-80  w-5/6 md:w-fit"
                width={470}
                height={350}
                alt="brands"
              />
            </SwiperSlide>

            {/* copper */}
            <SwiperSlide>
              <Image
                src="/assets/services/copper.jpg"
                className="rounded-lg mx-auto h-80   w-5/6 md:w-fit"
                width={470}
                height={350}
                alt="brands"
              />
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="mt-20 sm:grid grid-cols-1 md:grid-cols-2">
          <div>
            <p className="w-11/12 mx-auto pb-5">
              Established by professionals with more than 25 years of solid
              experience and in-depth knowledge in the provisioning,
              commissioning and maintenance of telecommunications services using
              the traditional copper, fibre optics and wireless technologies.
              Our company has the reputation for quality workmanship, always
              ready to listen and exceeds customer’s expectations. We have close
              alliance with major providers of technical trainings to ensure our
              staff are abreast with the technologies in demand as well as pool
              of test equipments to get our job done. We are sub-contractor of
              major companies partnered in rolling out of NBN's
              Fibre-to-the-Premises and Hybrid technologies for National
              Broadband Network Construction Project and long time partner of
              VisionStream/Telstra in their WideBand Telecommunication project.
            </p>
          </div>
          <div>
            <Image
              src="/assets/services/server.jpg"
              className=" rounded-lg h-80 mx-auto mt-10 w-5/6 md:mt-0 md:w-fit"
              width={470}
              height={350}
              alt="brands"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
