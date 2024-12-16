"use client";

import React, { useEffect } from "react";
import Hero from "./Hero/Hero";
import About from "./About/About";
import Project from "./Project/Project";
import Skills from "./Skills/Skills";
import Contact from "./Contact/Contact";
import Aos from "aos";
import "aos/dist/aos.css";
export type idForAll = {
  id: string;
};

const Home = () => {
  useEffect(() => {
    const initAos = async () => {
      await import("aos");

      Aos.init({
        duration: 1000,
        easing: "ease",
        once: true,
        anchorPlacement: "top-bottom",
      });
    };
    initAos();
  }, []);
  return (
    <div className="overflow-hidden bg-slate-700 ">
      <Hero id="home" />
      <About id="about" />
      <Project id="projects" />
      <Skills id="skills" />
      <Contact id="contact" />
    </div>
  );
};

export default Home;
