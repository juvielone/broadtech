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
      <div className="sm:w-11/12 mx-auto ">
        <Navbar />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2">
          <div>
            <h1 className="md:text-2xl w-11/12 font-bold  text-left mx-auto">
              Trusted and Outstanding Partner of Major Carriers And Providers
            </h1>
            <p className="w-11/12 mx-auto  mt-5">
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
              src="/assets/images/about-tower.jpg"
              className=" rounded-lg mx-auto mt-12 w-64 md:w-80 md:mt-0 lg:mt-0 lg:h-5/6 lg:w-3/4"
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
