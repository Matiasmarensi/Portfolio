import styles from "./contact.module.css";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Contact() {
  useEffect(() => {
    AOS.init({
      // Opciones de configuración de AOS (si es necesario)
    });
  }, []);

  return (
    <div className={styles.container} id="contact">
      <h1>Contact</h1>
      <div className={styles.subcontainer}>
        <form className={styles.form} data-aos="fade-up">
          <h2 className={styles.title}>Contact</h2>
          <div className={styles.formGroup}>
            <label className={styles.label}>Nombre:</label>
            <input className={styles.inputname} required />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>Correo Electrónico:</label>
            <input className={styles.inputmail} type="email" id="email" name="email" required />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Mensaje:</label>
            <textarea className={styles.input} id="message" name="message" required />
          </div>

          <button className={styles.button} type="submit">
            Enviar
          </button>
        </form>
        <div className={styles.datos} data-aos="fade-left">
          <h3>hola</h3>
          <h3>hola</h3>
          <h3>hola</h3>
        </div>
      </div>
    </div>
  );
}
