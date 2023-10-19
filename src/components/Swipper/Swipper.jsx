import styles from "./swipper.module.css";

export default function App() {
  const projects = [
    {
      name: "Proyecto 1",
      background: "/videogames2.jpg",
      repoLink: "https://github.com/tuusuario/proyecto1",
      deployLink: "https://deploy1.com",
    },
    {
      name: "Proyecto 1",
      background: "/videogames2.jpg",
      repoLink: "https://github.com/tuusuario/proyecto1",
      deployLink: "https://deploy1.com",
    },
    {
      name: "Videogames API",
      background: "/videogames2.jpg",
      repoLink: "https://github.com/Matiasmarensi/VideoGames",
      deployLink: "https://video-games-git-main-matiasmarensi.vercel.app/",
    },
    // Agrega más proyectos aquí
  ];

  return (
    <div className={styles.container} id="projects">
      <h1>Projects</h1>
      <div className={styles.projectContainer}>
        {projects.map((project, index) => (
          <div className={styles.projectCard} key={index}>
            <div className={styles.projectInfo}>
              <img src={project.background} alt={project.name} className={styles.projectImage} />
              <h5>{project.name}</h5>
              <div className={styles.projectLinks}>
                <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
                  Repository
                </a>
                <a href={project.deployLink} target="_blank" rel="noopener noreferrer">
                  Deploy
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
