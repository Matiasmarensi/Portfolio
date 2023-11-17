import style from "./NavBar.module.css";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={`${style.container} ${menuOpen ? style.menuOpen : ""}`}>
      <div className={style.home}>
        <div className={style.subhome}>
          <a className={style.linkhome} href="#">
            {"Ⓜatias Ⓜarensi "}
          </a>
        </div>
      </div>

      <button className={style.menuButton} onClick={toggleMenu}>
        Menu
      </button>

      <div className={style.menuList}>
        <a href="#technologies" style={{ color: "#fff" }}>
          Technologies
        </a>
        <a href="#projects" style={{ color: "#fff" }}>
          Projects
        </a>
        <a href="#contact" style={{ color: "#fff" }}>
          Contact
        </a>
      </div>

      <div className={`${style.others} ${menuOpen && ""}`}>
        <div className={style.technologies}>
          <a href="#technologies">Technologies</a>
        </div>
        <div className={style.projects}>
          <a href="#projects">Projects</a>
        </div>
        <div className={style.contact}>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
