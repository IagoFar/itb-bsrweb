import { Table } from "lucide-react";
import React from "react";


export default function Home() {
  return (
    <div className="bg-blue-50 grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="bg-center h">
        <h1 className="text-black text-6xl">Iniciar Sesión</h1>
      </div>
      <div id="LogIn" className="container h-33 w-60 border-2 border-gray-400">
        <form action="#" method="POST">
          <label htmlFor="text-black text-">Correo</label>
          <input type="text" id="email" placeholder="ex: pepito.ojeda@gmail.com" />
          <label htmlFor="text-black">Contraseña</label>
          <input type="text" id="password" placeholder="***************" />
          <button>Iniciar Sesion</button>
        </form>
      </div>
    </div>
  );
}
