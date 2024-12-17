"use client";
import { motion } from "framer-motion";
import Carousel from "../components/Carousel";
import Image from "next/image";
const About = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { duration: 0.8, staggerChildren: 0.1, delayChildren: 0.3 },
    },
  };
  const contentVariant = {
    hidden: { opacity: 0, y: -90, top: 100 },
    show: { opacity: 1, y: 0, top: 30, transition: { duration: 0.4 } },
  };
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      className="my-20 py-10 grid grid-cols-1 md:grid-cols-2 gap-3"
    >
      <motion.div className="w-10/12  mx-auto">
        <Carousel />
      </motion.div>
      <motion.div>
        <motion.h1
          variants={contentVariant}
          className="w-fit mx-auto py-3 font-bold text-2xl  md:mx-0"
        >
          Your Trusted Partner in Telecommunications Excellence
        </motion.h1>
        <motion.p
          variants={contentVariant}
          className="py-5 w-96 mx-auto text-center md:mt-5 md:w-auto md:text-left"
        >
          A rising leader in telecommunications, we are a trusted partner for
          major carriers and providers, backed by over 25 years of expertise in
          copper, fiber optics, and wireless technologies. Our reputation for
          quality, customer focus, and technical excellence is supported by
          strategic alliances with leading training providers and access to
          advanced testing equipment. As a subcontractor for key projects like
          the NBN rollout and a long-standing partner of VisionStream/Telstra,
          we deliver innovative and reliable solutions that exceed expectations.
        </motion.p>
        <motion.div className="flex w-fit mx-auto md:mx-0 md:mt-10">
          <motion.div className="px-3 font-medium">See More</motion.div>
          <Image
            src="/assets/service-icons/link.svg"
            className="w-5"
            width={350}
            height={350}
            alt="brands"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
