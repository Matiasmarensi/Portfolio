import type { Metadata } from "next";
import { Electrolize } from "next/font/google";
import "./globals.css";
import { ResponsiveNav } from "@/components/Home/NavBar/ResponsiveNav";

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
    <html lang="en">
      <body className={font.className}>
        <ResponsiveNav />
        {children}
      </body>
    </html>
  );
}
