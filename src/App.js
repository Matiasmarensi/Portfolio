import styles from "./page.module.css";
import NavBar from "./components/NavBar/NavBar"; //

import Contact from "./components/Contact/Contact";
import Technologies from "./components/Technologies/Technologies";

import Footer from "./components/Footer/Footer";
import Swipper from "./components/Swipper/Swipper";

export default function Home() {
  return (
    <main className={styles.main}>
      <NavBar />
      <div className={styles.container}>
        <div className={styles.subcontainer}>
          <div className={styles.perfil}>
            <h1 className={styles.title}>MI NOMBRE</h1>
            <h3 className={styles.stack}>Full Stack Developer</h3>
          </div>
          <img className={styles.image} src="/logo192.png" width={200} height={200} alt="Picture of the author" />
        </div>
        <p className={styles.description}>
          lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quidem?lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quas, quidem?lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quidem?lorem
          ipsum dolor sit amet consectetur adipisicing elit. Quas, quidem?lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quas, quidem?lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quidem?
        </p>
        <a className={styles.download} target="_blank" rel="noopener noreferrer" href="./MatiasMarensiDevFullStack.pdf">
          <button> Descargar CV</button>
        </a>
      </div>

      <Technologies />
      <Swipper />

      <Contact />

      <Footer />
    </main>
  );
}
{
  /* <Routes>
<Route path="#contact" element={<Contact />} />
<Route path="/technologies" element={<Technologies />} />
{/* <Route path="/projects" element={<Projects />} /> </Routes> */
}
