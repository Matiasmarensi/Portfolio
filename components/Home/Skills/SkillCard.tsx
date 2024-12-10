import Image from "next/image";
import React from "react";

type Props = {
  skill: {
    id: number;
    title: string;
    image: string;
    percent: string;
  };
};

const SkillCard = ({ skill }: Props) => {
  const { title, image, percent } = skill;
  return (
    <div className="p-6 hover:bg-blue-900 duration-300 transition-all cursor-pointer text-center rounded-lg bg-gray-900">
      <Image src={image} alt={title} width={70} height={70} className="object-cover mx-auto" />
      <h1 className="text-white text-[18px] font-semibold mt-4">{title}</h1>
    </div>
  );
};

export default SkillCard;
