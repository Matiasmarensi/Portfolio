import style from "./NavBar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={style.container}>
      <div className={style.home}>
        <div className={style.subhome}>
          <a className={style.linkhome} href="#">
            Home
          </a>
        </div>
      </div>

      <div className={style.others}>
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
