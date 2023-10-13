import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter, GitHub, LinkedIn } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className={`container-fluid ${styles.container}`}>
      <footer className="text-center text-lg-start py-2" style={{ backgroundColor: "#c4c4c4" }}>
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

        <p className="text-center text-white">Hecho con ❤️ por Matias Santiago Marensi ©{currentYear}</p>
      </footer>
    </div>
  );
}
