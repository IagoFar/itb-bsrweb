import { Link } from "lucide-react";
import React from "react";


export default function Home() {
  return (
    <div className="bg-blue-50 grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="bg-center h">
        <h1 className="text-black text-6xl">Registrarse</h1>
      </div>
      <div id="register" className="container w-60 border-2 border-gray-400">
        <form action="#" method="POST">
          <label htmlFor="Nombre">Nombre</label>
          <input type="text" name="name" placeholder="ex:Pepito Ojeda" required />
          <label htmlFor="Correo">Correo</label>
          <input type="email" name="email" placeholder="ex: pepito.ojeda@gmail.com" required />
          <label htmlFor="Contraseña">Contraseña</label>
          <input type="password" name="password" placeholder="***************" required />
          <button>Registrarse</button>
        </form>
        <Link href="/login">Ya estas registrado? Inicia sesión</Link>        
      </div>
    </div>
  );
}
