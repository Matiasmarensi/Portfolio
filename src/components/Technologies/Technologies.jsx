import styles from "./technologies.module.css";

export default function Technologies() {
  const defaultWidth = 62;

  const technologiesLeft = [
    { name: "HTML", icon: "/html7.png", width: defaultWidth },
    { name: "CSS", icon: "/css2.png", width: defaultWidth },
    { name: "React", icon: "/react2.png", width: defaultWidth },
    { name: "Javascript", icon: "/js2.png", width: defaultWidth },
    { name: "Redux", icon: "/redux.png", width: defaultWidth },
  ];

  const technologiesRight = [
    { name: "Nodejs", icon: "/node1.png", width: defaultWidth },
    { name: "Sequelize", icon: "/sequelize.png", width: defaultWidth },
    { name: "Express", icon: "/express1.png", width: defaultWidth },
    { name: "PostgreSQL", icon: "/postgress4.png", width: defaultWidth },
    { name: "Github", icon: "/github7.png", width: defaultWidth },
  ];

  return (
    <div id="technologies" className={styles.container}>
      <h1>Technologies</h1>
      <div className={styles.box}>
        <div className={styles.column}>
          <ul className={styles.rowContainer}>
            {technologiesLeft.map((tech, index) => (
              <li key={index} className={styles.row}>
                <img className={styles.img} src={tech.icon} alt={tech.name} width={tech.width} height={tech.width} />
                <p className={styles.pText}>{tech.name}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.column}>
          <ul className={styles.rowContainer}>
            {technologiesRight.map((tech, index) => (
              <li key={index} className={styles.row}>
                <img className={styles.img} src={tech.icon} alt={tech.name} width={tech.width} height={tech.width} />
                <p className={styles.pText}>{tech.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
