import React from "react";

type Props = {
  children: React.ReactNode;
};
const SectionHeading = ({ children }: Props) => {
  return (
    <h2 className="bg-gradient-to-r from-amber-600 to-amber-500 w-fit text-center px-4 py-3 mx-auto text-gray-800 text-2xl sm:text-3xl md:text-4xl uppercase -rotate-6">
      {children}
    </h2>
  );
};

export default SectionHeading;
