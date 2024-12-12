"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Navbar";

const Hero = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { duration: 0.8, staggerChildren: 0.1, delayChildren: 0.3 },
    },
  };
  const contentVariant = {
    hidden: { opacity: 0, y: 90, top: 100 },
    show: { opacity: 1, y: 0, top: 30, transition: { duration: 0.4 } },
  };
  const btnVariant = {
    hidden: { opacity: 0, top: 100 },
    show: { opacity: 1, top: 30, transition: { duration: 0.4 } },
  };
  const socialVariant = {
    hidden: { opacity: 0, x: 100, y: -40 },
    show: { opacity: 1, x: 0, y: 0, transition: { duration: 0.4 } },
  };
  return (
    <>
      <motion.div className="relative">
        <Navbar />
        {/* hidden md:block  */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          className=" relative pb-10 h-fit"
        >
          <motion.div className="mt-4">
            <Image
              src="/assets/images/hero-tower.png"
              alt="Hero Background"
              layout="fill" // Ensures the image fills the parent container
              objectFit="cover" // Makes the image cover the entire motion.div
              className="hidden md:block absolute inset-0 rounded-xl 	"
            />
          </motion.div>

          {/* content */}
          <motion.div className="relative z-10 grid md:grid-cols-[2fr_1fr]">
            {/* main content */}
            <motion.div className="mt-10 w-5/6  mx-auto md:mt-20">
              <motion.h1
                variants={contentVariant}
                className="md:text-white font-bold text-3xl text-center md:text-left md:text-2xl md:w-80 md:ml-20"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </motion.h1>
              <motion.p
                variants={contentVariant}
                className="text-md text-center mt-10 w-fit md:text-[#F5F5F5] md:w-80 md:ml-20 md:text-left"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis
              </motion.p>
              {/* Buttons */}
              <motion.div className="mt-14 w-fit flex mx-auto md:mt-20 md:mx-0">
                {/* Services */}
                <motion.button
                  variants={btnVariant}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center text-white bg-[#29AAE3] 
                rounded w-40 h-12 md:ml-20"
                >
                  <span className="ml-3 font-medium">Our Services</span>
                  <span className="text-slate-50">
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 16 16"
                      className="ml-3 fill-current"
                    >
                      <g>
                        <path d="M6.834.33a2.25 2.25 0 012.332 0l5.25 3.182A2.25 2.25 0 0115.5 5.436V6A.75.75 0 0114 6v-.564a.75.75 0 00-.361-.642l-5.25-3.181a.75.75 0 00-.778 0l-5.25 3.181A.75.75 0 002 5.436v5.128a.75.75 0 00.361.642l4.028 2.44a.75.75 0 11-.778 1.283l-4.027-2.44A2.25 2.25 0 01.5 10.563V5.436a2.25 2.25 0 011.084-1.924L6.834.33z" />
                        <path
                          fillRule="evenodd"
                          d="M11.749 7.325l.001-.042v-.286a.75.75 0 00-1.5 0v.286l.001.042a3.73 3.73 0 00-1.318.546.76.76 0 00-.03-.03l-.201-.203a.75.75 0 00-1.06 1.06l.201.203.03.028c-.26.394-.45.84-.547 1.319a.878.878 0 00-.04-.001H7a.75.75 0 000 1.5h.286l.038-.001c.097.48.286.926.547 1.32a.71.71 0 00-.028.027l-.202.202a.75.75 0 001.06 1.06l.203-.202a.695.695 0 00.025-.026c.395.261.842.45 1.322.548l-.001.036v.286a.75.75 0 001.5 0v-.286-.036c.48-.097.926-.287 1.32-.548l.026.026.202.203a.75.75 0 001.06-1.061l-.201-.202a.667.667 0 00-.028-.026c.261-.395.45-.842.547-1.321H15a.75.75 0 000-1.5h-.286l-.04.002a3.734 3.734 0 00-.547-1.319l.03-.028.202-.202a.75.75 0 00-1.06-1.061l-.203.202-.029.03a3.73 3.73 0 00-1.318-.545zM11 8.75A2.247 2.247 0 008.75 11 2.247 2.247 0 0011 13.25 2.247 2.247 0 0013.25 11 2.247 2.247 0 0011 8.75z"
                          clipRule="evenodd"
                        />
                      </g>
                    </svg>
                  </span>
                </motion.button>
                {/* Contact */}
                <Link href="/contact">
                  <motion.button
                    variants={btnVariant}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center bg-gray-700 text-slate-50 rounded w-40 h-12 ml-5"
                  >
                    <span className="ml-3 font-medium">Contact Us</span>
                    <span className="text-slate-50 w-fit">
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 26 25"
                        className="ml-3 fill-current"
                      >
                        <path d="M16.5562 12.9062L16.1007 13.359C16.1007 13.359 15.0181 14.4355 12.0631 11.4972C9.10812 8.55901 10.1907 7.48257 10.1907 7.48257L10.4775 7.19738C11.1841 6.49484 11.2507 5.36691 10.6342 4.54348L9.37326 2.85908C8.61028 1.83992 7.13596 1.70529 6.26145 2.57483L4.69185 4.13552C4.25823 4.56668 3.96765 5.12559 4.00289 5.74561C4.09304 7.33182 4.81071 10.7447 8.81536 14.7266C13.0621 18.9492 17.0468 19.117 18.6763 18.9651C19.1917 18.9171 19.6399 18.6546 20.0011 18.2954L21.4217 16.883C22.3806 15.9295 22.1102 14.2949 20.8833 13.628L18.9728 12.5894C18.1672 12.1515 17.1858 12.2801 16.5562 12.9062Z" />
                      </svg>
                    </span>
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Image for mobile */}
            <motion.div className="mt-7 md:hidden">
              <Image
                src="/assets/images/hero-tower.png"
                alt="Hero Background"
                width={350}
                height={350}
                className="rounded-xl w-5/6 h-auto mx-auto mt-5 "
              />
            </motion.div>
            {/* social icons */}
            <motion.div className="hidden md:flex flex-col mr-20 mt-20 ">
              <motion.button
                variants={socialVariant}
                className="p-1 rounded text-white justify-items-end mt-5 "
              >
                <motion.svg
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.95 }}
                  width="30"
                  height="30"
                  viewBox="0 0 26 25"
                  className="fill-current"
                >
                  <path d="M25.7541 12.5761C25.7541 5.6288 19.9906 0 12.8771 0C5.76353 0 0 5.6288 0 12.5761C0 18.8529 4.70896 24.0558 10.865 25V16.2115H7.59384V12.5761H10.865V9.80527C10.865 6.65365 12.7862 4.91278 15.7287 4.91278C17.1379 4.91278 18.6115 5.15822 18.6115 5.15822V8.25152H16.9874C15.3881 8.25152 14.8891 9.2211 14.8891 10.2155V12.5761H18.4604L17.8893 16.2115H14.8891V25C21.0452 24.0558 25.7541 18.8529 25.7541 12.5761Z" />
                </motion.svg>
              </motion.button>

              <motion.button
                variants={socialVariant}
                className="p-1 rounded text-white justify-items-end mt-5"
              >
                <motion.svg
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.95 }}
                  className="fill-current"
                  width="30"
                  height="30"
                  viewBox="0 0 26 23"
                >
                  <path d="M23.1657 6.20854C23.182 6.44826 23.182 6.68803 23.182 6.92775C23.182 14.2395 17.8719 22.6644 8.16659 22.6644C5.17656 22.6644 2.39897 21.7568 0.0625 20.1815C0.487326 20.2329 0.895757 20.25 1.33693 20.25C3.80406 20.25 6.0752 19.3767 7.88882 17.887C5.5687 17.8356 3.62436 16.2431 2.95446 14.0512C3.28126 14.1026 3.60802 14.1368 3.95117 14.1368C4.42498 14.1368 4.89884 14.0683 5.33996 13.9485C2.92182 13.4347 1.10815 11.2087 1.10815 8.52025V8.45178C1.81069 8.86275 2.6277 9.1196 3.4936 9.15381C2.07211 8.16061 1.14084 6.46539 1.14084 4.54752C1.14084 3.52012 1.40221 2.57831 1.85973 1.75637C4.45762 5.11261 8.36263 7.30441 12.7414 7.54418C12.6597 7.13321 12.6107 6.70516 12.6107 6.27706C12.6107 3.229 14.9635 0.746094 17.8882 0.746094C19.4077 0.746094 20.7801 1.41392 21.7441 2.49271C22.9368 2.25299 24.0806 1.79063 25.0936 1.15707C24.7014 2.44137 23.8682 3.52017 22.7735 4.20507C23.8355 4.08526 24.8649 3.77697 25.8125 3.34892C25.0937 4.44479 24.195 5.4208 23.1657 6.20854Z" />
                </motion.svg>
              </motion.button>

              <motion.button
                variants={socialVariant}
                className="p-1 rounded text-white justify-items-end mt-5"
              >
                <motion.svg
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.95 }}
                  width="26"
                  height="27"
                  viewBox="0 0 26 27 "
                  className="fill-current"
                >
                  <path
                    d="M23.9107 0H1.83354C0.821931 0 0 0.87346 0 1.94571V25.0412C0 26.1134 0.821931 26.9869 1.83354 26.9869H23.9107C24.9223 26.9869 25.75 26.1134 25.75 25.0412V1.94571C25.75 0.87346 24.9223 0 23.9107 0ZM7.78248 23.1316H3.96596V10.2526H7.78823V23.1316H7.78248ZM5.87422 8.49365C4.64994 8.49365 3.66133 7.45152 3.66133 6.17446C3.66133 4.8974 4.64994 3.85527 5.87422 3.85527C7.09275 3.85527 8.08711 4.8974 8.08711 6.17446C8.08711 7.45754 7.09849 8.49365 5.87422 8.49365ZM22.0887 23.1316H18.2722V16.8668C18.2722 15.3729 18.2434 13.4513 16.2892 13.4513C14.3004 13.4513 13.9958 15.0777 13.9958 16.7584V23.1316H10.1793V10.2526H13.8406V12.0116H13.8924C14.4039 10.9996 15.6512 9.93335 17.5077 9.93335C21.3702 9.93335 22.0887 12.6019 22.0887 16.0717V23.1316Z"
                    fill="#FFF9F9"
                  />
                </motion.svg>
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Hero;
