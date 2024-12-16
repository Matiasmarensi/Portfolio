import React from "react";
import { Logo } from "../Logo/Logo";

const Footer = () => {
  return (
    <div className="pt-16 pb-16 bg-[#111827] ">
      <div className="flex justify-center items-center">
        <Logo />
      </div>
      <div className="flex items-center flex-wrap justify-center mt-6 gap-x-10 gap-y-4 text-white font-bold">
        <div>
          <a href="#home">Inicio</a>
        </div>
        <div>
          <a href="#about">Quién Soy</a>
        </div>
        <div>
          <a href="#projects">Proyectos</a>
        </div>
        <div>
          <a href="#skills">Habilidades</a>
        </div>
        <div>
          <a href="#contact">Contacto</a>
        </div>
      </div>
      <p className="text-white text-opacity-60 mt-6 text-center">
        © {new Date().getFullYear()} Todos los derechos reservados por Matias Marensi
      </p>
    </div>
  );
};

export default Footer;
