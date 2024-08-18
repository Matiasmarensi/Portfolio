import styles from "./page.module.css";
import NavBar from "./components/NavBar/NavBar"; //
import { GitHub, LinkedIn } from "@mui/icons-material";
import Contact from "./components/Contact/Contact";
import Technologies from "./components/Technologies/Technologies";
import Link from "@mui/material/Link";
import { IconButton } from "@mui/material";

import Footer from "./components/Footer/Footer";
import Swipper from "./components/Swipper/Swipper";
import ParticlesComponent from "./components/particles/Particles";

export default function Home() {
  return (
    <main className={styles.main}>
      <NavBar />
      <ParticlesComponent id="tsparticles" />
      <div className={styles.container}>
        <div className={styles.subcontainer}>
          <div className={styles.perfil}>
            <h1 className={styles.title}>Hello! I'm Matias! </h1>

            <img className={styles.image} src="/image.png" alt="author" />
          </div>
        </div>
        <p className={styles.description}>
          Welcome to my portfolio. I'm a Fullstack Developer. Explore the "Technologies" and "Projects" sections to get
          a sense of my skills and see examples of my work. For more details, download my resume below. Connect with me
          on LinkedIn or visit my GitHub for a deeper look into my projects. Thanks for stopping by!
        </p>
        <div className={styles.links}>
          <a
            className={styles.download}
            target="_blank"
            rel="noopener noreferrer"
            href="./Resume_MatiasMarensi_DevFullstack.pdf"
          >
            Download Resume
          </a>
          <Link href="https://github.com/matiasmarensi" target="_blank" rel="noopener noreferrer" className="mx-2">
            <IconButton>
              <GitHub style={{ fontSize: "4rem" }} />
            </IconButton>
          </Link>
          <Link
            href="https://www.linkedin.com/in/matias-marensi-67059823/"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-1"
          >
            <IconButton>
              <LinkedIn style={{ fontSize: "4rem" }} />
            </IconButton>
          </Link>
        </div>
      </div>

      <Swipper />
      <Technologies />

      <Contact />

      <Footer />
    </main>
  );
}
