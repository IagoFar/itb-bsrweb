import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "@/lib/fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin, faXTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Barcelona Server Restorers",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="bg-white p-5 grid grid-rows-1 grid-cols-9 items-center ">
          <div className="col-span-2"> 
          <Link href="/"><img src="Logo.svg" alt="" className="w-10"/></Link>
          </div>
          <div className="col-span-5 flex justify-between ">
            <Link href="/" className="hover:font-semibold">Índex</Link>
            <Link href="/quienes-somos" className="hover:font-semibold">Quienes somos?</Link>
            <Link href="/servicio-tecnico" className="hover:font-semibold">Servicio técnco</Link>
            <Link href="/contactanos" className="hover:font-semibold">Contactanos</Link>
            <Link href="/comentarios" className="hover:font-semibold">Comentarios y reseñas</Link>
          </div>
          <div className="col-span-2 flex justify-end ">
            <Link href="/login" className="bg-blue-200 text-black text-sm mr-3 pr-4 pl-4 pt-1 pb-1 rounded-sm border border-zinc-400 transition duration-100 ease-in-out hover:bg-blue-100 ">Iniciar sesión</Link>
            <Link href="/register" className="bg-blue-800 text-white text-sm pr-4 pl-4 pt-1 pb-1 rounded-sm border border-zinc-400 transition duration-100 ease-in-out hover:bg-blue-900">Registarse</Link>
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
