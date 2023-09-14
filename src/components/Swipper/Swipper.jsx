import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styles from "./swipper.module.css";
import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

export default function App() {
  const projects = [
    {
      name: "Proyecto 1",
      background: "imagen1.jpg",
      repoLink: "https://github.com/tuusuario/proyecto1",
      deployLink: "https://deploy1.com",
    },
    {
      name: "Videogames API",
      background: "/videogames2.jpg",
      repoLink: "https://github.com/tuusuario/proyecto2",
      deployLink: "https://deploy2.com",
    },
    // Agrega más proyectos aquí
  ];

  return (
    <div className={styles.container} id="projects">
      <h1>Projects</h1>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {projects.map((project, index) => (
          <SwiperSlide
            key={index}
            className={styles.slide}
            style={{
              backgroundImage: `url(${project.background})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className={styles.projectSlide}>
              <div className={styles.projectContent}>
                <h2>{project.name}</h2>
                <div className={styles.projectLinks}>
                  <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
                    Repository
                  </a>
                  <a href={project.deployLink} target="_blank" rel="noopener noreferrer">
                    Deploy
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
