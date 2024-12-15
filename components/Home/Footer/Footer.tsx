import React from "react";
import { Logo } from "../Logo/Logo";

const Footer = () => {
  return (
    <div className="pt-16 pb-16 bg-[#111827] ">
      <div className="flex justify-center items-center">
        <Logo />
      </div>
      <div className="flex items-center flex-wrap justify-center mt-6 gap-x-10 gap-y-4 text-white font-bold">
        <div>Inicio</div>
        <div>Habilidades</div>
        <div>Proyectos</div>
        <div>Contacto</div>
      </div>
      {/* año en curso con funcion */}
      <p className="text-white text-opacity-60 mt-6 text-center">
        © {new Date().getFullYear()} Todos los derechos reservados por Matias Marensi
      </p>
    </div>
  );
};

export default Footer;
