import { navLinks } from "@/constant/constant";
import Link from "next/link";
import React from "react";
import { IoMdClose } from "react-icons/io";

type Props = {
  showNav: boolean;
  closeNav: () => void;
};

export const MobileNav = ({ closeNav, showNav }: Props) => {
  const navOpen = showNav ? " translate-x-0" : " translate-x-[-100%]";

  return (
    <div>
      <div
        className={` fixed${navOpen} transform transition-all duration-500 inset-0 z-[1000] bg-slate-700 opacity-70 w-full h-screen`}
      ></div>
      <div
        className={`fixed text-white ${navOpen} transform transition-all duration-500 delay-300 justify-center flex flex-col h-full w-[80%] sm:w-[60%] bg-[#111827] space-y-6 z-[1000] `}
      >
        {navLinks.map((link) => (
          <Link key={link.id} href={link.url}>
            <p className="nav-link text-[20px] ml-12 border-b-[1.5px] pb-2 border-x-white sm:text-[30px]">
              {link.label}
            </p>
          </Link>
        ))}
        {/* close  */}
        <IoMdClose onClick={closeNav} className="absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6" />

        <div className="flex items-center space-x-4"></div>
      </div>
    </div>
  );
};
