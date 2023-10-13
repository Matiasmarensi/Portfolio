import styles from "./contact.module.css";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useForm, ValidationError } from "@formspree/react";
export default function Contact() {
  useEffect(() => {
    AOS.init({
      // Opciones de configuración de AOS (si es necesario)
    });
  }, []);
  const [state, handleSubmit] = useForm("xoqowdlg"); // Reemplaza 'your-formspree-endpoint' con tu endpoint real

  if (state.succeeded) {
    return (
      <div className="container mt-5">
        <div className="alert alert-success">¡Gracias por tu mensaje!</div>
      </div>
    );
  }
  return (
    <div className={styles.container} id="contact">
      <h1>Contact</h1>
      <div className={styles.subcontainer}>
        <form
          onSubmit={handleSubmit}
          action="https://formspree.io/f/xoqowdlg"
          method="POST"
          className={styles.form}
          data-aos="fade-up"
        >
          <h2 className={styles.title}>Contact</h2>
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.label}>
              Nombre:
            </label>
            <input type="name" id="name" name="name" className={styles.inputname} required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>
              Correo Electrónico:
            </label>
            <input className={styles.inputmail} type="email" id="email" name="email" required />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Mensaje:</label>
            <textarea className={styles.input} id="message" name="message" required />
          </div>

          <button className={styles.button} type="submit" disabled={state.submitting}>
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
