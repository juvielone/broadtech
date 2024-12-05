import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const MarqueeBrand = () => {
  const brandNames = [
    "centrelink",
    "barnardos",
    "nab",
    "sra",
    "reed",
    "parchem",
    "bunnings",
    "allied",
    "anc",
    "anglican",
  ];
  return (
    <div className="mt-20 w-5/6 mx-auto md:mt-0 md:py-32 md:w-full">
      <h1 className="text-center font-bold text-2xl ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,{" "}
      </h1>
      <div className="mt-5 p-7">
        <Marquee gradient={true}>
          {brandNames.map((brand, index) => (
            <Image
              key={index}
              src={`/assets/brand-icons/${brand}.svg`}
              className="h-[3.5rem] mx-5 md:mx-10  md:h-16  w-auto"
              width={350}
              height={350}
              alt="brands"
            />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default MarqueeBrand;
