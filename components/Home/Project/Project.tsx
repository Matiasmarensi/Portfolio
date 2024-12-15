import React, { useState } from "react";
import SectionHeading from "../Helper/SectionHeading";
import { projectData } from "@/Data/data";
import Link from "next/link";
import Image from "next/image";

const Project = () => {
  // Estado para controlar cuántos proyectos mostrar
  const [visibleProjects, setVisibleProjects] = useState(2); // Mostrar 4 inicialmente

  // Función para mostrar más proyectos
  const showMoreProjects = () => {
    setVisibleProjects((prev) => prev + 4); // Incrementar en 4
  };

  return (
    <div className="pt-16 pb-16 bg-[#0e1e36] ">
      <SectionHeading> Mis Proyectos</SectionHeading>
      <div className="w-[80%] mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-16 items-center group ">
        {projectData.slice(0, visibleProjects).map((project) => (
          <div
            key={project.id}
            className="bg-blue-950 p-6 rounded-lg hover:scale-105 transition-transform duration-500 ease-in-out group-hover:blur-[.5px] hover:!blur-none "
          >
            {/* Imagen */}
            <Link href={project.url} target="_blank">
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg justify-center ">
                <Image src={project.image} alt="image" fill className="object-cover" />
              </div>
            </Link>

            {/* Descripción */}
            <p className="mt-4 text-gray-300 text-base">{project.description}</p>

            {/* Enlaces */}
            <div className="mt-2 flex space-x-4 justify-between ">
              <Link href={project.url} target="_blank" className="text-amber-400 hover:underline text-base ">
                Demo
              </Link>
              <Link href={""} target="_blank" className="text-amber-400 hover:underline text-base">
                Repositorio
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Botón "Ver más" */}
      {visibleProjects < projectData.length && ( // Mostrar solo si hay más proyectos
        <div className="mt-8 flex justify-center">
          <button
            onClick={showMoreProjects}
            className="px-3 py-2 bg-[#d97706]  hover:bg-[#ffb74d] transition-all duration-150 rounded-full text-base"
          >
            Mostar más
          </button>
        </div>
      )}
    </div>
  );
};

export default Project;
