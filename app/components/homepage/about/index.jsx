// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";

function AboutSection() {
  return (
    <div id="about" className="my-12 lg:my-16 relative">
      <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          ABOUT ME
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>
      <div className="flex flex-col lg:flex-row lg:justify-between lg:gap-16">
        <div className="flex justify-center lg:justify-start lg:w-1/2 lg:pl-16">
          <Image
            src={personalData.profile}
            width={500}  // Width of the image
            height={300}  // Height of the image
            alt="Abdullah Tahir"
            className="rounded-lg transition-all duration-1000 grayscale hover:grayscale-0 hover:scale-110 cursor-pointer"
          />
        </div>
        <div className="flex lg:w-1/2 lg:pr-16 h-full">
          <div className="flex flex-col justify-center h-full">
            <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">
              Who I am?
            </p>
            <p className="text-gray-200 text-sm lg:text-lg">
              {personalData.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
