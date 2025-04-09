import "../app/global.css";
import { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Ciudadanía Digital",
  description: "Una plataforma educativa desde preescolar hasta preparatoria",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <head />
      <body className="bg-white text-black">
        <Navbar />
        <main className="min-h-screen p-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
