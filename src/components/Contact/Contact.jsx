import React from "react";
import styles from "./contact.module.css";

export default function Contact() {
  return (
    <div className={styles.container} id="contact">
      <h1>Contact</h1>
      <div className={styles.subcontainer}>
        <form className={styles.form}>
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
        <div className={styles.datos}>
          <h3>hola</h3>
          <h3>hola</h3>
          <h3>hola</h3>
        </div>
      </div>
    </div>
  );
}
