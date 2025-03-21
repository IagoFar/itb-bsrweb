import React from "react";


export default function Home() {
  return (
    <div className="bg-blue-50 grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="mt-30 mb-1 justify-center">
       <h1 className="text-7xl font-bold">Servicio Tecnico</h1>
       <h5 className="text-3xl text-zinc-400 text-center">En que te podemos ayudar!</h5>
      </div>
      <div className="p-10">
        <img src="Tecnico1.png" className="mt-20 justify-self-start h-50" /> 
        <img src="Tecnico2.png" className="mt-20 justify-self-end h-50" />
      </div>
      <div className="justify-self-start p-20 mt-200">
        <h1 className="text-3xl font-bold mb-5">Servicios</h1>
      </div>
      <div>
        <img src="informacion-removebg-preview.png" className="mt-20 h-10" /> 
        <h2 className="text-3xl font-bold ml-13">Reparacion de servidores</h2>
      </div>
    </div>
  );
}
