import styles from "./contact.module.css";
import React, { useEffect, useState } from "react";
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
  const [formClean, setFormClean] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    if (state.succeeded) {
      window.alert("mensaje enviado");
      setFormClean({
        name: "",
        email: "",
        message: "",
      });
    }
  }, [state.succeeded]);

  const handleInputs = (e) => {
    const { id, value } = e.target;

    if (formClean[id] !== value) {
      setFormClean({
        ...formClean,
        [id]: value,
      });
    }
  };
  return (
    <div className={styles.container} id="contact">
      <h1>Contact</h1>
      {!state.succeeded ? (
        <div className={styles.subcontainer}>
          <form
            onSubmit={handleSubmit}
            action="https://formspree.io/f/xoqowdlg"
            method="POST"
            className={styles.form}
            data-aos="fade-up"
          >
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.label}>
                Nombre:
              </label>
              <input
                value={formClean.name}
                type="name"
                id="name"
                name="name"
                className={styles.inputname}
                onChange={handleInputs}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>
                Correo Electrónico:
              </label>
              <input
                className={styles.inputmail}
                type="email"
                id="email"
                name="email"
                value={formClean.email}
                onChange={handleInputs}
                required
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Mensaje:</label>
              <textarea
                className={styles.input}
                value={formClean.message}
                onChange={handleInputs}
                id="message"
                name="message"
                required
              />
            </div>

            <button className={styles.button} type="submit" disabled={state.submitting}>
              Enviar
            </button>
          </form>
          {/* <div className={styles.datos} data-aos="fade-left">
          <h3>hola</h3>
          <h3>hola</h3>
          <h3>hola</h3>
        </div> */}
        </div>
      ) : (
        <p>Mensaje enviado con éxito</p>
      )}
    </div>
  );
}
