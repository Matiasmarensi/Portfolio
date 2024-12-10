import React from "react";
import Hero from "./Hero/Hero";
import About from "./About/About";
import Project from "./Project/Project";

const Home = () => {
  return (
    <div className="overflow-hidden bg-slate-700 ">
      <Hero />
      <About />
      <Project />
    </div>
  );
};

export default Home;
