import styles from "./technologies.module.css";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Marquee from "react-fast-marquee";

export default function Technologies() {
  const defaultWidth = 62;

  useEffect(() => {
    AOS.init({
      once: false,
      duration: 1000,
    });
  }, []);

  const technologiesLeft = [
    { name: "HTML", icon: "/html7.png", width: defaultWidth },
    { name: "CSS", icon: "/css2.png", width: defaultWidth },
    { name: "React", icon: "/react2.png", width: defaultWidth },
    { name: "Next", icon: "/next.png", width: defaultWidth },
    { name: "Javascript", icon: "/js2.png", width: defaultWidth },
    { name: "Typescript", icon: "/typescript.png", width: defaultWidth },
    { name: "Redux", icon: "/redux.png", width: defaultWidth },
  ];

  const technologiesRight = [
    { name: "Nodejs", icon: "/node1.png", width: defaultWidth },
    { name: "Sequelize", icon: "/sequelize.png", width: defaultWidth },
    { name: "Express", icon: "/express1.png", width: defaultWidth },
    { name: "PostgreSQL", icon: "/postgress4.png", width: defaultWidth },
    { name: "MongoDB", icon: "/mongodb.png", width: defaultWidth },
    { name: "Github", icon: "/github7.png", width: defaultWidth },
  ];

  return (
    <div id="technologies" className={styles.container}>
      <h1 data-aos="zoom-in">Technologies</h1>
      <div className={styles.box}>
        <Marquee gradient={false} speed={40}>
          <div className={styles.rowContainer}>
            {technologiesLeft.map((tech, index) => (
              <div key={index} className={styles.row} data-aos="flip-left">
                <img className={styles.img} src={tech.icon} alt={tech.name} width={tech.width} height={tech.width} />
                <p className={styles.pText}>{tech.name}</p>
              </div>
            ))}
          </div>
        </Marquee>
        <Marquee gradient={false} speed={40} direction="right">
          <div className={styles.rowContainer}>
            {technologiesRight.map((tech, index) => (
              <div key={index} className={styles.row} data-aos="flip-right">
                <img className={styles.img} src={tech.icon} alt={tech.name} width={tech.width} height={tech.width} />
                <p className={styles.pText}>{tech.name}</p>
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
}
