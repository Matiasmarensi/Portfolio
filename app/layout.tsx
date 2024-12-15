import type { Metadata } from "next";
import { Electrolize } from "next/font/google";
import "./globals.css";
import { ResponsiveNav } from "@/components/Home/NavBar/ResponsiveNav";
import Footer from "@/components/Home/Footer/Footer";
import ScrollToTop from "@/components/Home/Helper/ScrollToTop";

const font = Electrolize({
  weight: ["400"],
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Matias Marensi Fullstack",
  description: "Portfolio personal de Matias Marensi como Fullstack Developer.",
  openGraph: {
    title: "Matias Marensi Fullstack",
    description: "Explora mi portfolio y proyectos como Fullstack Developer.",
    url: "https://portfolio-matiasmarensi.vercel.app/", // Reemplaza con tu URL
    siteName: "Matias Marensi Portfolio",
    images: [
      {
        url: "/images/portfolio.jpg", // Ruta a tu imagen Open Graph (idealmente 1200x630 px)
        width: 1200,
        height: 630,
        alt: "Vista previa del portfolio de Matias Marensi",
      },
    ],
    locale: "es_ES", // Cambia según tu idioma y región, ej: en_US, es_ES
    type: "website", // Define el tipo del sitio (website, article, etc.)
  },
  twitter: {
    card: "summary_large_image", // Define el tipo de tarjeta para Twitter
    title: "Matias Marensi Fullstack",
    description: "Portfolio personal de Matias Marensi como Fullstack Developer.",
    images: ["/images/portfolio.jpg"], // Ruta a tu imagen Open Graph
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="custom-scrollbar">
      <body className={font.className}>
        <ResponsiveNav />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
