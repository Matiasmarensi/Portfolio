import React from "react";
import SectionHeading from "../Helper/SectionHeading";
import { skillsData } from "@/Data/data";
import SkillCard from "./SkillCard";

const Skills = () => {
  return (
    <div className="pt16 pb-16 bg-[#0e1e36]">
      <SectionHeading>My Skills</SectionHeading>
      <div className="mt-20 w-[80%] mx-auto grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 items-center xl:grid-cols-5">
        {skillsData.map((skill) => {
          return (
            <div key={skill.id}>
              <SkillCard skill={skill} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
