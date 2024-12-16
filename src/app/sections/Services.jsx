"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Services = () => {
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

  const cardVariant = {
    hidden: { opacity: 0, y: -20, x: -20, top: 100 },
    show: { opacity: 1, y: 0, x: 0, top: 30, transition: { duration: 1 } },
  };
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      className="px-11 pb-10 mt-28 md:mt-10"
    >
      {/* Content */}
      <motion.div>
        <motion.h1
          variants={contentVariant}
          className="font-bold text-2xl sm:text-4xl"
        >
          <span className="text-[#29AAE3]">Broadtech Solutions</span> Services
        </motion.h1>
      </motion.div>

      {/* Card Services */}
      <motion.div className="mt-20 grid grid-cols-1 gap-y-4  sm:grid-cols-2 sm:gap-x-2 lg:grid-cols-4 lg:gap-4 lg:gap-y-0">
        {/* Wireband Card */}
        <motion.div
          variants={cardVariant}
          whileHover={{ scale: 1.1, y: -30 }}
          whileTap={{ scale: 0.95 }}
          className="border-2 border-[#C9C6C6] rounded-md shadow-md"
        >
          <motion.div className="flex h-20">
            <span>
              <Image
                src="/assets/service-icons/wideband.svg"
                className="w-auto m-2 "
                width={350}
                height={350}
                alt="brands"
              />
            </span>
            <h2 className="text-lg font-semibold mt-3 w-2/3">
              Wide-band Services
            </h2>
          </motion.div>
          <p className="px-3 py-5 sm:h-44">
            Installation and commissioning of Telstra Wideband Services using
            traditional copper and fibre technologies.
          </p>
          <Link href="/service#wireband">
            <motion.button className="flex pb-3">
              <motion.div className="px-3 font-medium">See More</motion.div>
              <motion.div>
                <Image
                  src="/assets/service-icons/link.svg"
                  className="w-5"
                  width={350}
                  height={350}
                  alt="brands"
                />
              </motion.div>
            </motion.button>
          </Link>
        </motion.div>
        {/* It Infas Card */}
        <motion.div
          variants={cardVariant}
          whileHover={{ scale: 1.1, y: -30 }}
          whileTap={{ scale: 0.95 }}
          className="border-2 border-[#C9C6C6] rounded-md shadow-md"
        >
          <motion.div className="flex h-20">
            <span>
              <Image
                src="/assets/service-icons/it-infas.svg"
                className="w-auto m-2"
                width={350}
                height={350}
                alt="brands"
              />
            </span>
            <h2 className="text-lg font-semibold mt-3 ml-3 w-2/3">
              LAN and IT Infrastructure
            </h2>
          </motion.div>
          <p className="px-3 py-5 sm:h-44">
            Design, install, commission and maintain LAN and IT related works
          </p>
          <div>
            <div className=" w-fit">
              <Link href="/service#it-infas">
                <motion.button className="flex pb-3">
                  <motion.div className="px-3 font-medium">See More</motion.div>
                  <motion.div>
                    <Image
                      src="/assets/service-icons/link.svg"
                      className="w-5"
                      width={350}
                      height={350}
                      alt="brands"
                    />
                  </motion.div>
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>
        {/* Copper and Fibre Install Card */}
        <motion.div
          variants={cardVariant}
          whileHover={{ scale: 1.1, y: -30 }}
          whileTap={{ scale: 0.95 }}
          className="border-2 border-[#C9C6C6] rounded-md shadow-md"
        >
          <motion.div className="flex h-20">
            <span className="mt-2">
              <Image
                src="/assets/service-icons/copper-fibre-install.svg"
                className="w-auto  h-16"
                width={350}
                height={300}
                alt="brands"
              />
            </span>
            <h2 className="text-lg font-semibold mt-3 w-2/3">
              Copper and Fibre Instal
            </h2>
          </motion.div>
          <p className="px-3 py-5 sm:h-44">
            Broadtech Business Solutions has in-depth experience in end-to-end
            copper and fibre network installation, testing and maintenance
          </p>
          <Link href="/service#copper">
            <motion.button className="flex pb-3">
              <motion.div className="px-3 font-medium">See More</motion.div>
              <motion.div>
                <Image
                  src="/assets/service-icons/link.svg"
                  className="w-5"
                  width={350}
                  height={350}
                  alt="brands"
                />
              </motion.div>
            </motion.button>
          </Link>
        </motion.div>
        {/* Carrier Card */}
        <motion.div
          variants={cardVariant}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="border-2 border-[#C9C6C6] rounded-md shadow-md"
        >
          <motion.div className="flex h-20">
            <span className="p-2 mt-2">
              <Image
                src="/assets/service-icons/carrier.svg"
                className="w-auto "
                width={350}
                height={350}
                alt="brands"
              />
            </span>
            <h2 className="text-lg m w-fit font-semibold mt-3">
              Carrier and Infastructure Projects
            </h2>
          </motion.div>
          <p className="px-3 py-5 sm:h-44">
            Network infrastructure services, covering installation,
            commissioning, monitoring, and disaster recovery.
          </p>
          <Link href="/service#carrier">
            <motion.button className="flex pb-3">
              <motion.div className="px-3 font-medium">See More</motion.div>
              <motion.div>
                <Image
                  src="/assets/service-icons/link.svg"
                  className="w-5"
                  width={350}
                  height={350}
                  alt="brands"
                />
              </motion.div>
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
