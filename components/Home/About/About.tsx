import React, { useState } from "react";
import SectionHeading from "../Helper/SectionHeading";
import { aboutInfo } from "@/Data/data";
import { idForAll } from "../Home";

const About = ({ id }: idForAll) => {
  const [commands, setCommands] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleCommand = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const lowerInput = input.trim().toLowerCase();
      let response = "";

      switch (lowerInput) {
        case "client":
          response = "Siempre en búsqueda de aprender más y aportar soluciones.";
          break;

        case "experience":
          response = "Puedes encotrar mis trabajos en la sección MIS PROYECTOS.";
          break;

        case "projects":
          response = "He desarrollado proyectos individuales y grupales.";
          break;

        case "website":
          response = "Busco colaborar en proyectos desafiantes e innovadores.";
          break;

        case "help":
          response =
            "Comandos disponibles: client, experience, projects, website, clear, skills, education, contact, location, hobbies, portfolio";
          break;

        case "email":
          response = "Mi mail de contacto es Matiasmarensi@gmail.com";
          break;

        case "skills":
          response = "Habilidades: JavaScript, React, Node.js, MongoDB, HTML, CSS, TypeScript y mas...";
          break;

        case "contact":
          response = "Puedes contactarme a través de mi LinkedIn: linkedin.com/in/matiasmarensi";
          break;

        case "location":
          response = "Actualmente resido en Buenos Aires, Argentina.";
          break;

        case "hobbies":
          response = "Me gusta la programación, el fútbol y los videojuegos.";
          break;

        case "portfolio":
          response = "Visita mi portafolio en: https://portfolio-matiasmarensi.vercel.app/";
          break;
        case "github":
          response = "Visita mi GitHub en : https://github.com/Matiasmarensi";
          break;

        case "clear":
          setCommands([]);
          setInput("");
          return;
        case "cls":
          setCommands([]);
          setInput("");
          return;

        default:
          response = `Comando no reconocido: "${input}". Escribe "help" para ver los comandos disponibles.`;
      }

      setCommands((prev) => [...prev, `$ ${input}`, response]);
      setInput("");
    }
  };

  return (
    <div id={id} className="pt-28 pb-16 bg-[#0e1e36]">
      <SectionHeading>Quién soy</SectionHeading>
      <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-20">
        <div>
          <h1 className="text-bg py-1 text-[26px] sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-200">
            {aboutInfo.title}
          </h1>
          <p className="text-gray-400 text-sm md:text-base text-opacity-60 mt-6">{aboutInfo.description}</p>
        </div>

        <div className="bg-[#1e1e1e] p-4 rounded-lg shadow-lg terminal">
          {/* Barra superior estilo terminal */}
          <div className="flex items-center bg-[#3b3b3b] py-1 px-3 rounded-t-lg">
            <span className="w-3 h-3 bg-red-500 rounded-full mr-2"></span>
            <span className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></span>
            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
            <div className="ml-auto text-sm text-gray-400 font-mono">Terminal</div>
          </div>

          {/* Contenido del terminal */}
          <div className="overflow-y-auto h-80 text-sm md:text-base font-mono bg-[#1e1e1e] text-gray-200 p-4">
            {commands.map((cmd, index) => (
              <p key={index}>{cmd}</p>
            ))}
          </div>

          {/* Línea de comandos */}
          <div className="mt-1 flex items-center bg-[#1e1e1e] p-2">
            <span className="text-green-500 font-mono text-base">{"C:>"}</span>
            <input
              type="text"
              className="ml-2 bg-transparent text-gray-200 border-none focus:outline-none flex-1 text-base focus:placeholder-opacity-0"
              value={input}
              onChange={handleInput}
              onKeyDown={handleCommand}
              placeholder="Escribe un comando..."
              style={{
                caretColor: "green",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
