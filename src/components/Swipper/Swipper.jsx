// Importaciones y setup inicial
import styles from "./swipper.module.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function App() {
  useEffect(() => {
    AOS.init({
      once: false,
      duration: 1000,
      // Opciones de configuración de AOS (si es necesario)
    });
  }, []);

  const projects = [
    {
      name: "Chat App",
      deployLink: "https://chatapp-xhvh.onrender.com/",
      repoLink: "https://github.com/Matiasmarensi/ChatApp",
      background: "/chatapp.jpg",
      description: "A real-time chat application.",
    },
    {
      name: "Rick & Morty",
      background: "/rickmorty.jpg",
      repoLink: "https://github.com/tuusuario/proyecto1",
      deployLink: "https://proyecto-integrador-jet.vercel.app/favorites",
      description: "An app to explore characters from Rick & Morty series.",
    },
    {
      name: "Videogames",
      background: "/videogames2.jpg",
      repoLink: "https://github.com/Matiasmarensi/VideoGames",
      deployLink: "https://video-games-git-main-matiasmarensi.vercel.app/",
      description: "A platform to create, discover and review videogames.",
    },
    {
      name: "El Festín e-commerce",
      background: "/elfestin.jpg",
      repoLink: "https://github.com/Matiasmarensi/PF-Server",
      deployLink: "https://pf-front-end-grupo3.vercel.app/",
      description: "E-commerce platform for food products.",
    },
    {
      name: "Conexión Huellitas",
      background: "/huellitas.jpg",
      repoLink: "https://github.com/No-Country/c16-23-n-node-react",
      deployLink: "https://c16-23-n-node-react.vercel.app/",
      description: "An app to connect pet lovers with adoption centers.",
    },

    {
      name: "ToDo",
      deployLink: "https://todo-sooty-xi.vercel.app/new",
      repoLink: "https://github.com/Matiasmarensi/ToDoNextjs",
      background: "/Todo.jpg",
      description: "A simple and intuitive to-do list app.",
    },
  ];

  return (
    <div className={styles.container} id="projects">
      <h1>Projects</h1>
      <div className={styles.projectContainer}>
        {projects.map((project, index) => (
          <div data-aos="flip-up" className={styles.projectCard} key={index}>
            <a href={project.deployLink} target="_blank" rel="noopener noreferrer">
              <img src={project.background} alt={project.name} className={styles.projectImage} />
            </a>
            <div className={styles.projectInfo}>
              <h5>{project.name}</h5>
              <p className={styles.projectDescription}>{project.description}</p>
              <div className={styles.projectLinks}>
                <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
                  Repository
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
