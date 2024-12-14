import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="pt-16 pb-16 bg-[#111827] ">
      <div>
        <Image src="/images/logo.png" alt="logo" width={180} height={180} className="mx-auto" />
      </div>
      <div className="flex items-center flex-wrap justify-center gap-x-10 gap-y-4 text-white font-bold">
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
