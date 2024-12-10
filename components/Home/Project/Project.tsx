import React from "react";
import SectionHeading from "../Helper/SectionHeading";
import { projectData } from "@/Data/data";
import Link from "next/link";
import Image from "next/image";

const Project = () => {
  return (
    <div className="pt-16 pb-16 bg-[#050709]">
      <SectionHeading> My Projects</SectionHeading>
      <div className="w-[80%] mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-center group">
        {projectData.map((project) => (
          <div
            key={project.id}
            className="bg-blue-950 p-6 rounded-lg hover:scale-105 transition-transform duration-500 ease-in-out group-hover:blur-[1px] hover:!blur-none"
          >
            <Link href={project.url} target="_blank">
              <Image src={project.image} alt="image" width={200} height={200} className="w-full" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
