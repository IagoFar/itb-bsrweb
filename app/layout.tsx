import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


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
          <div className=""> 
          <a href="/"><img src="Logo.svg" alt="" className="w-10"/></a>
          </div>
          <div className="col-span-6 flex justify-between ">
            <a href="/" className="hover:font-semibold">Índex</a>
            <a href="/quienes-somos" className="hover:font-semibold">Quienes somos?</a>
            <a href="/servicio-tecnico" className="hover:font-semibold">Servicio técnico</a>
            <a href="/servidores" className="hover:font-semibold">Servidores</a>
            <a href="/contactanos" className="hover:font-semibold">Contactanos</a>
            <a href="/comentarios" className="hover:font-semibold">Comentarios y reseñas</a>
          </div>
          <div className="col-span-2 flex justify-end ">
            <a href="/login" className="bg-blue-200 text-black text-sm mr-3 pr-4 pl-4 pt-1 pb-1 rounded-sm border border-zinc-400 transition duration-100 ease-in-out hover:bg-blue-100 ">Sign in</a>
            <a href="/register" className="bg-blue-800 text-white text-sm pr-4 pl-4 pt-1 pb-1 rounded-sm border border-zinc-400 transition duration-100 ease-in-out hover:bg-blue-900">Register</a>
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
