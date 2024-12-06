"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { navLinks } from "../../../constant/constant";
import { TbMenu2 } from "react-icons/tb";

type Props = {
  openNav: () => void;
};

const NavBar = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setNavBg(window.scrollY > 90);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`fixed${navBg ? " bg-cyan-600" : ""} h-[12vh] z-[10] w-full transition-all duration-500 `}>
      <div className="flex justify-between items-center h-full  w-[95%] sm:w-[90%] xl:w-[80%] mx-auto">
        <Image src="/images/logo.png" alt="LOGO" width={170} height={170} className="ml-[-1.5rem] sm:ml-0" />
        <div className=" text-white items-center space-x-10 flex ">
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link key={link.id} href={link.url}>
                <p className="nav-link">{link.label}</p>
              </Link>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <button className="md:px-10 md:py-3 px-8 py-3 text-blue-700 font-semibold sm:text-base text-sm bg-white hover:bg-gray-200 transition-all duration-200 rounded-lg">
              Hire Me
            </button>
            <TbMenu2 onClick={openNav} className="w-8 h-8 cursor-pointer text-white  lg:hidden" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
