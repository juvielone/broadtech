import Carousel from "../components/Carousel";
import Image from "next/image";
const About = () => {
  return (
    <div className="my-20 py-10 grid grid-cols-1 md:grid-cols-2 gap-3">
      <div className="w-full mx-auto">
        <Carousel />
      </div>
      <div>
        <h1 className="w-fit mx-auto md:mx-0 py-3 font-bold text-2xl">
          Lorem ipsum dolor sit amet
        </h1>
        <p className="py-5 w-96 mx-auto text-center md:w-auto md:text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis"Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqvua. Ut enim ad minim veniam, quis
        </p>
        <div className="flex w-fit mx-auto md:mx-0">
          <div className="px-3 font-medium">See More</div>
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
  );
};

export default About;
