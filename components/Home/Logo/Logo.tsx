"use client";

export const Logo = () => {
  return (
    <h1
      className="text-white text-3xl md:text-4xl font-bold p-2 select-none pointer-events-none relative"
      style={{
        textShadow: "0 0 5px #ff7f00, 0 0 10px #d97706, 0 0 15px #ff7f00", // Efecto de neón
        animation: "neon 1.5s ease-in-out infinite alternate, borderGlow 3s ease-in-out infinite", // Animación de neón y borde suave
        backgroundColor: "transparent", // Fondo transparente
        borderRadius: "1rem", // Bordes redondeados
        padding: "0.5rem 1rem", // Ajuste del padding
      }}
    >
      <span className="text-[#d97706]">&lt; M M</span>
      <span className="text-[#d97706]"> /&gt;</span>

      <style jsx>{`
        @keyframes neon {
          0% {
            text-shadow: 0 0 5px #ff7f00, 0 0 10px #d97706, 0 0 15px #ff7f00;
          }
          100% {
            text-shadow: 0 0 15px #ff7f00, 0 0 30px #d97706, 0 0 45px #ff7f00;
          }
        }

        @keyframes borderGlow {
          0% {
            border: 2px solid #d97706; /* Color inicial del borde */
          }
          25% {
            border: 2px solid #ff7f00; /* Primer cambio a naranja */
          }
          50% {
            border: 2px solid #f59e0b; /* Segundo cambio a amarillo */
          }
          75% {
            border: 2px solid #ff7f00; /* Regreso a naranja */
          }
          100% {
            border: 2px solid #d97706; /* Vuelta al color inicial */
          }
        }
      `}</style>
    </h1>
  );
};
