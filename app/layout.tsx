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
  description: "Webdev porfolio",
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
