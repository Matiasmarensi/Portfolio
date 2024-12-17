import React, { useState } from "react";
import SectionHeading from "../Helper/SectionHeading";
import { projectData } from "@/Data/data";
import Link from "next/link";
import Image from "next/image";
import { IoChevronDownOutline } from "react-icons/io5";
import { idForAll } from "../Home";

const Project = ({ id }: idForAll) => {
  const [visibleProjects, setVisibleProjects] = useState(4);

  const showMoreProjects = () => {
    setVisibleProjects((prev) => prev + 4);
  };

  return (
    <div id={id} className="pt-28 pb-16 bg-[#0e1e36]">
      <SectionHeading> Mis Proyectos</SectionHeading>
      <div className="w-[80%] mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-16 items-center group">
        {projectData.slice(0, visibleProjects).map((project) => (
          <div
            key={project.id}
            className="bg-blue-950 p-6 rounded-lg hover:scale-105 transition-transform duration-500 ease-in-out group-hover:blur-[.5px] hover:!blur-none"
          >
            {/* Imagen */}
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg justify-center">
              {project.url && project.url !== "undefined" ? (
                <Link href={project.url} target="_blank">
                  <Image src={project.image} alt="image" fill className="object-cover" />
                </Link>
              ) : (
                <Image src={project.image} alt="image" fill className="object-cover" />
              )}
            </div>
            {/* Descripción */}
            <p className="mt-4 text-gray-300 text-base">{project.description}</p>

            {/* Enlaces */}
            <div className="mt-2 flex space-x-4 justify-between">
              {project.url && project.url !== "undefined" ? (
                <Link href={project.url} target="_blank" className="text-amber-400 hover:underline text-base">
                  Demo
                </Link>
              ) : (
                <span className="text-gray-400 italic text-sm">Demo privado</span>
              )}

              {project.repository && project.repository !== "undefined" ? (
                <Link href={project.repository} target="_blank" className="text-amber-400 hover:underline text-base">
                  Repositorio
                </Link>
              ) : (
                <span className="text-gray-400 italic text-sm">Repositorio privado</span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Botón "Ver más" */}
      {visibleProjects < projectData.length && (
        <div className="mt-8 flex justify-center align-middle">
          <button
            onClick={showMoreProjects}
            className="px-4 py-2 bg-[#d97706] hover:bg-[#ffb74d] transition-all duration-150 rounded-full text-base flex items-center justify-center gap-2"
          >
            Mostrar más
            <IoChevronDownOutline className="text-lg" />
          </button>
        </div>
      )}
    </div>
  );
};
export default Project;
