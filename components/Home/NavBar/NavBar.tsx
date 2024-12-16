"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { navLinks } from "../../../constant/constant";
import { TbMenu2 } from "react-icons/tb";
import { Logo } from "../Logo/Logo";
import "../../../app/globals.css"; // Asegúrate de que el archivo CSS esté importado correctamente

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
    <div className={`fixed${navBg ? " bg-[#111827]" : ""} h-[12vh] z-[10] w-full transition-all duration-500 `}>
      <div className="flex justify-between items-center h-full w-[95%] sm:w-[90%] xl:w-[80%] mx-auto">
        <Logo />
        <div className="text-white items-center space-x-10 flex">
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link key={link.id} href={link.url}>
                <p className="nav-link">{link.label}</p>
              </Link>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <TbMenu2 onClick={openNav} className="w-8 h-8 cursor-pointer text-white lg:hidden" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
