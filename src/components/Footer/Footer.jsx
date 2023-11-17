import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import Link from "@mui/material/Link";
import { GitHub, LinkedIn } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className={`container-fluid ${styles.container}`}>
      <footer
        className="text-center text-lg-start py-2"
        style={{ background: " linear-gradient(0deg, rgba(255,87,51,0.5) 0%, hsla(350, 100%, 29%, 0.506) 73%)" }}
      >
        <div className="container d-flex justify-content-center py-2">
          <Link
            href="https://github.com/matiasmarensi"
            target="_blank" // Abre el enlace en una nueva pestaña
            rel="noopener noreferrer" // Buenas prácticas de seguridad
            className=" mx-2"
            style={{ border: "solid .1rem #010101", borderRadius: "20rem " }}
          >
            <IconButton style={{ backgroundColor: "#c4c4c4" }}>
              <GitHub />
            </IconButton>
          </Link>
          <Link
            href="https://www.linkedin.com/in/matias-marensi-67059823/"
            target="_blank" // Abre el enlace en una nueva pestaña
            rel="noopener noreferrer" // Buenas prácticas de seguridad
            className=" mx-1"
            style={{ border: "solid .1rem #010101", borderRadius: "20rem " }}
          >
            <IconButton style={{ backgroundColor: "#c4c4c4" }}>
              <LinkedIn />
            </IconButton>
          </Link>
        </div>

        <p className="text-center text-white">Created with ❤️ by Matias Santiago Marensi ©{currentYear}</p>
      </footer>
    </div>
  );
}
