import React from "react";
import { BaseInfo } from "@/Data/data";
import { FaDownload } from "react-icons/fa6";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-full pt-[4vh] md:pt-[12vh] h-screen bg-[#0e1e36] overflow-hidden relative">
      <div className="flex justify-center flex-col w-4/5 h-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          {/* text */}
          <div>
            <h1 data-aos="fade-up" className="text-2xl md:text-3xl font-bold mb-5">
              Soy {BaseInfo.name}
            </h1>

            <h1
              data-aos="fade-fade-right"
              className="text-bg text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold md:leading-[3rem] l:leading-[3.5rem] xl:leading-[4rem] text-white"
            >
              {BaseInfo.position}
            </h1>
            <p className="text-white text-sm md:text-base text-opacity-60 mt-6">{BaseInfo.description}</p>
            <button className="md:px-8 md:py-2.5 px-6 py-1.5 text-white font-semibold text-sm md:text-lg transition-al duration-300 rounded-lg mt-8 bg-gray-700 hover:to-gray-900 flex items-center space-x-2">
              <span>Download CV</span>
              <FaDownload />
            </button>
          </div>
          {/* image */}
          <div className="mx-auto hidden lg:block rounded-[3rem] border-[3.5px] border-gray-900 overflow-x-hidden">
            <Image src={BaseInfo.profilePic} alt={BaseInfo.name} width={300} height={200} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
