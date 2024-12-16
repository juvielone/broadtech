import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../sections/Footer";

const Service = () => {
  return (
    <>
      <div className="sm:w-11/12 mx-auto pb-10">
        <Navbar />
        <h1 className="text-2xl md:text-4xl w-11/12 font-bold mt-10  text-center mx-auto">
          <span className="text-[#29AAE3]">Broadtech Solutions</span> Services
        </h1>

        {/* Wireband */}
        <div id="wireband" className="mt-20 sm:grid grid-cols-1 md:grid-cols-2">
          <div
            className="hover:bg-slate-100 rounded
          hover:backdrop-blur-lg transition-all duration-300 ease-in-out"
          >
            <h2 className="md:text-xl w-11/12 font-semibold  pb-5 mx-auto">
              Wideband Services
            </h2>
            <p className="w-11/12 mx-auto pb-5">
              We specialize in the installation and commissioning of Telstra
              Wideband Services leveraging traditional copper and modern fibre
              technologies. Our team ensures seamless integration and optimal
              performance, providing tailored solutions to meet diverse
              connectivity needs. With a focus on precision and reliability, we
              help businesses achieve robust wideband connectivity for their
              operations.
            </p>
          </div>
          <div>
            <Image
              src="/assets/services/wireband.jpg"
              className=" rounded-lg h-80 mx-auto mt-10 w-5/6 md:mt-0 md:w-fit"
              width={470}
              height={350}
              alt="brands"
            />
          </div>
        </div>

        {/* It Infas */}
        <div id="it-infas" className="mt-20 sm:grid grid-cols-1 md:grid-cols-2">
          <div>
            <Image
              src="/assets/services/it-infas.jpg"
              className=" rounded-lg h-80 mx-auto mt-10 w-5/6 md:mt-0 md:w-fit"
              width={470}
              height={350}
              alt="brands"
            />
          </div>
          <div
            className="hover:bg-slate-100 rounded
          hover:backdrop-blur-lg transition-all duration-300 ease-in-out"
          >
            <h2 className="md:text-xl w-11/12 font-semibold  pb-5 mx-auto">
              LAN and IT Infrastructure
            </h2>
            <p className="w-11/12 mx-auto pb-5">
              Our LAN and IT infrastructure services cover every aspect of
              design, installation, commissioning, and maintenance. Whether it's
              setting up new networks, optimizing existing systems, or ensuring
              ongoing operational efficiency, we deliver cutting-edge solutions.
              From structured cabling to advanced network management, we cater
              to businesses of all sizes, ensuring secure and scalable IT
              environments to support their growth.
            </p>
          </div>
        </div>

        {/* Copper */}
        <div id="copper" className="mt-20 sm:grid grid-cols-1 md:grid-cols-2">
          <div
            className="hover:bg-slate-100 rounded
          hover:backdrop-blur-lg transition-all duration-300 ease-in-out"
          >
            <h2 className="md:text-xl w-11/12 font-semibold  pb-5 mx-auto">
              Copper and Fibre Install
            </h2>
            <p className="w-11/12 mx-auto pb-5">
              Broadtech Business Solutions brings extensive expertise in
              end-to-end copper and fibre network solutions. From initial
              installation to rigorous testing and ongoing maintenance, our
              services ensure high-performance connectivity. Whether you're
              upgrading infrastructure or building a new network, we deliver
              exceptional results, meeting industry standards for quality and
              reliability.
            </p>
          </div>
          <div>
            <Image
              src="/assets/services/copper.jpg"
              className=" rounded-lg h-80 mx-auto mt-10 w-5/6 md:mt-0 md:w-fit"
              width={470}
              height={350}
              alt="brands"
            />
          </div>
        </div>

        {/* Carrier  */}
        <div id="carrier" className="mt-20 sm:grid grid-cols-1 md:grid-cols-2">
          <div>
            <Image
              src="/assets/services/carrier.jpg"
              className=" rounded-lg h-80 mx-auto mt-10 w-5/6 md:mt-0 md:w-fit"
              width={470}
              height={350}
              alt="brands"
            />
          </div>
          <div
            className="hover:bg-slate-100 rounded
          hover:backdrop-blur-lg transition-all duration-300 ease-in-out"
          >
            <h2 className="md:text-xl w-11/12 font-semibold  pb-5 mx-auto">
              Carrier Infrastructure Projects
            </h2>
            <p className="w-11/12 mx-auto pb-5">
              We handle comprehensive carrier infrastructure projects, including
              node installations, system upgrades, commissioning and
              decommissioning, intra-cabling, monitoring, and disaster recovery.
              Our expertise spans a broad range of technologies such as SDH/PDH,
              Frame Relay, TDM, ISDN, Optumux, OMS, and various Cisco routers
              and switches. With a focus on scalability and resilience, we
              deliver solutions that empower carriers to maintain and enhance
              their network operations.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Service;
