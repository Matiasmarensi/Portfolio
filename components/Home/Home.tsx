import React from "react";
import Hero from "./Hero/Hero";
import About from "./About/About";
import Project from "./Project/Project";
import Skills from "./Skills/Skills";
import Contact from "./Contact/Contact";

const Home = () => {
  return (
    <div className="overflow-hidden bg-slate-700 ">
      <Hero />
      <About />
      <Project />
      <Skills />
      <Contact />
    </div>
  );
};

export default Home;
