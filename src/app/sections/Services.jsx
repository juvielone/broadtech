import React from "react";
import Image from "next/image";

const Services = () => {
  return (
    <div className="px-11 mt-28 md:mt-10">
      {/* Content */}
      <div>
        <h1 className="font-bold text-2xl ">Lorem ipsum dolor sit amet</h1>
      </div>

      {/* Card Services */}
      <div className="mt-20 grid grid-cols-1 gap-y-4  sm:grid-cols-2 sm:gap-x-2 lg:grid-cols-4 lg:gap-4 lg:gap-y-0">
        <div className="border-2 border-[#C9C6C6] rounded-md shadow-md">
          <div className="flex">
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
          </div>
          <p className="px-3 py-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna
          </p>
          <div className="flex pb-3">
            <div className="px-3 font-medium">See More</div>
            <div className="">
              <Image
                src="/assets/service-icons/link.svg"
                className="w-5"
                width={350}
                height={350}
                alt="brands"
              />
            </div>
          </div>
        </div>

        <div className="border-2 border-[#C9C6C6] rounded-md shadow-md">
          <div className="flex">
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
          </div>
          <p className="px-3 py-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna
          </p>
          <div className="flex pb-3">
            <div className="px-3 font-medium">See More</div>
            <div className="">
              <Image
                src="/assets/service-icons/link.svg"
                className="w-5"
                width={350}
                height={350}
                alt="brands"
              />
            </div>
          </div>
        </div>

        <div className="border-2 border-[#C9C6C6] rounded-md shadow-md">
          <div className="flex">
            <span>
              <Image
                src="/assets/service-icons/copper-fibre-install.svg"
                className="w-auto m-2"
                width={350}
                height={350}
                alt="brands"
              />
            </span>
            <h2 className="text-lg font-semibold mt-3  w-2/3">
              Copper and Fibre Instal
            </h2>
          </div>
          <p className="px-3 py-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna
          </p>
          <div className="flex pb-3">
            <div className="px-3 font-medium">See More</div>
            <div className="">
              <Image
                src="/assets/service-icons/link.svg"
                className="w-5"
                width={350}
                height={350}
                alt="brands"
              />
            </div>
          </div>
        </div>

        <div className="border-2 border-[#C9C6C6] rounded-md shadow-md">
          <div className="flex">
            <span>
              <Image
                src="/assets/service-icons/carrier.svg"
                className="w-auto m-2"
                width={350}
                height={350}
                alt="brands"
              />
            </span>
            <h2 className="text-lg font-semibold mt-3 ml-3 w-2/3">
              Carrier and Infastructure Projects
            </h2>
          </div>
          <p className="px-3 py-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna
          </p>
          <div className="flex pb-3">
            <div className="px-3 font-medium">See More</div>
            <div className="">
              <Image
                src="/assets/service-icons/link.svg"
                className="w-5"
                width={350}
                height={350}
                alt="brands"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
