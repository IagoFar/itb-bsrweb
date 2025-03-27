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
        <footer className=" grid grid-rows-1 grid-cols-4 items-top bg-white text-zinc-800 p-5 ms-5 mt-auto">
            <div>
              <div>
                <Link href="https://www.x.com/@bcnserverrestorers"><FontAwesomeIcon icon={faXTwitter} className="text-2xl mr-5" /></Link>
                <Link href="https://www.ingragram.com/@bcnserverrestorers"><FontAwesomeIcon icon={faInstagram} className="text-2xl mr-5 " /></Link>
                <Link href="https://www.youtube.com/@bcnserverrestorers"><FontAwesomeIcon icon={faYoutube} className="text-2xl mr-5" /></Link>
                <Link href="https://www.linkedin.com/@bcnserverrestorers"><FontAwesomeIcon icon={faLinkedin} className="text-2xl mr-5" /></Link>
              </div>
              <img src="Logo_black.png" alt="" className="mt-5 w-40"/>
            </div>
            <div className="p-2">
              <h5 className="font-semibold mb-4">Director de Marketing <br/>(Carlos Morlás)</h5>
              <p className="mb-2">carlos.morlas.7e7@itb.cat</p>
              <p className="mb-2">+34 677744551</p>
              <p className="mb-2">SMX</p>
              <p className="mb-2">Diseño 3D</p>
              <p className="mb-2">Marketing</p>
            </div>
            <div className="p-2">
            <h5 className="font-semibold mb-4">Administrador de servidores<br/>(Iago Fariñas) </h5>
              <p className="mb-2">iago.fainas.7e7@itb.cat</p>
              <p className="mb-2">+34 6445821</p>
              <p className="mb-2">SMX</p>
              <p className="mb-2">Desarrollo de aplicaciones multiplataformas y videojuegos</p>
              <p className="mb-2">Ingieneria Informática</p>
            </div>
            <div className="p-2">
            <h5 className="font-semibold mb-4">Tecnico de Hardware <br/>(Victor Merino)</h5>
              <p className="mb-2">victor.merino.7e6@itb.cat</p>
              <p className="mb-2">+34 680354314</p>
              <p className="mb-2">SMX</p>
              <p className="mb-2">Desarrollo de aplicaciones multiplataformas</p>
              <p className="mb-2">Ingieneria Informática</p>
            </div>
          </footer>
      </body>
    </html>
  );
}
