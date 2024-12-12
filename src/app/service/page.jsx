import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../sections/Footer";

const Service = () => {
  return (
    <>
      <div className="sm:w-11/12 mx-auto pb-10">
        <Navbar />
        <h1 className="md:text-2xl w-11/12 font-bold mt-10  text-center mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing{" "}
        </h1>

        {/* Wireband */}
        <div id="wireband" className="mt-20 sm:grid grid-cols-1 md:grid-cols-2">
          <div>
            <h2 className="md:text-xl w-11/12 font-semibold  pb-5 mx-auto">
              Wideband Services
            </h2>
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
          <div>
            <h2 className="md:text-xl w-11/12 font-semibold  pb-5 mx-auto">
              LAN and IT Infrastructure
            </h2>
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
        </div>

        {/* Copper */}
        <div id="copper" className="mt-20 sm:grid grid-cols-1 md:grid-cols-2">
          <div>
            <h2 className="md:text-xl w-11/12 font-semibold  pb-5 mx-auto">
              Copper and Fibre Install
            </h2>
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
          <div>
            <h2 className="md:text-xl w-11/12 font-semibold  pb-5 mx-auto">
              Carrier Infrastructure Projects
            </h2>
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
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Service;
