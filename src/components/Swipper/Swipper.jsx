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
      name: "Rick & Morty",
      background: "/rickmorty.jpg",
      repoLink: "https://github.com/tuusuario/proyecto1",
      deployLink: "https://proyecto-integrador-jet.vercel.app/favorites",
    },
    {
      name: "Videogames",
      background: "/videogames2.jpg",
      repoLink: "https://github.com/Matiasmarensi/VideoGames",
      deployLink: "https://video-games-git-main-matiasmarensi.vercel.app/",
    },
    {
      name: "El Festín e-commerce",
      background: "/elfestin.jpg",
      repoLink: "https://github.com/Matiasmarensi/PF-Server",
      deployLink: "https://pf-front-end-grupo3.vercel.app/",
    },
    {
      name: "NextAuthentication",
      background: "/nextauth.jpg",
      repoLink: "https://github.com/Matiasmarensi/NextAuth",
      deployLink: "https://nextauth-production.up.railway.app/",
    },
    {
      name: "ToDo",
      deployLink: "https://todo-sooty-xi.vercel.app/new",
      repoLink: "https://github.com/Matiasmarensi/ToDoNextjs",
      background: "/Todo.jpg",
    },

    // Agrega más proyectos aquí
  ];

  return (
    <div className={styles.container} id="projects">
      <h1>Projects</h1>
      <div className={styles.projectContainer}>
        {projects.map((project, index) => (
          <div data-aos="flip-up" className={styles.projectCard} key={index}>
            <div className={styles.projectInfo}>
              <h5>{project.name}</h5>
              <div className={styles.projectLinks}>
                <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
                  Repository
                </a>
              </div>
              <a href={project.deployLink} target="_blank" rel="noopener noreferrer">
                <img src={project.background} alt={project.name} className={styles.projectImage} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
