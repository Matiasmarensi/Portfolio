import React from "react";
import Hero from "./Hero/Hero";
import About from "./About/About";
import Project from "./Project/Project";
import Skills from "./Skills/Skills";

const Home = () => {
  return (
    <div className="overflow-hidden bg-slate-700 ">
      <Hero />
      <About />
      <Project />
      <Skills />
    </div>
  );
};

export default Home;
