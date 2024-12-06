"use client";
import React, { useState } from "react";
import NavBar from "./NavBar";
import { MobileNav } from "./MobileNav";

export const ResponsiveNav = () => {
  const [showNav, setShowNav] = useState(false);

  const showNavHandler = () => {
    setShowNav(true);
  };
  const closeNavHadler = () => {
    setShowNav(false);
  };

  return (
    <div>
      <NavBar openNav={showNavHandler} />
      <MobileNav showNav={showNav} closeNav={closeNavHadler} />
    </div>
  );
};
