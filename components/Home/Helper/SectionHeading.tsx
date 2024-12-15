import React from "react";

type Props = {
  children: React.ReactNode;
};
const SectionHeading = ({ children }: Props) => {
  return (
    <h2 className="bg-gradient-to-r from-[#d97706] to-[#f5f5f5] w-fit text-center px-4 py-3 mx-auto text-gray-800 text-2xl sm:text-3xl md:text-4xl uppercase -rotate-6">
      {children}
    </h2>
  );
};

export default SectionHeading;
