import { faCircleInfo, faInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";


export default function Home() {
  return (
    <div className="bg-blue-50 grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="mt-30 mb-1 justify-center">
       <h1 className="text-7xl font-bold">Servicio Tecnico</h1>
       <h5 className="text-3xl text-zinc-500 text-center">En que te podemos ayudar!</h5>
      </div>
      <div className="flex justify-center items-center gap-10 p-10">
        <img src="Tecnico1.png" className="mt-20 justify-self-start h-100" /> 
        <img src="Tecnico2.png" className="mt-20 justify-self-end h-100" />
      </div>
      <div className="justify-self-start p-6 mt-100">
        <h1 className="text-3xl font-bold mb-5">Servicios</h1>
      </div>
      <div className="grid grid-cols-3 grid-rows-1 items-start mt-50 pl-5">
        <div>
          <h2 className="text-3xl font-bold text-blue-800"><FontAwesomeIcon icon={faCircleInfo}/> Reparación de servidores</h2>  {/* Subtema 1 */}
          <p className="text-2xl text-zinc-800 pr-10 mt-10">Cualquier error dentro de tu servidor lo arreglamos.</p>  {/* Info 1 */}
        </div>
        <div>
          <h2 className="text-3xl font-bold text-blue-800"><FontAwesomeIcon icon={faCircleInfo}/> Mantenimiento de servidores</h2>  {/* Subtema 2 */}
          <p className="text-2xl text-zinc-800 pr-10 mt-10">Te damos mantenimiento de tu propio servidor por 1 mes entero, para que no tengas mas problemas.</p> {/* Info 2 */}
        </div>
        <div>
          <h2 className="text-3xl font-bold text-blue-800"><FontAwesomeIcon icon={faCircleInfo}/> Instalacion de hardware</h2>  {/* Subtema 3 */}
          <p className=" text-2xl text-zinc-800 pr-10 mt-10">Cambiamos cualquier elemento necesario para tu propio servidor, como un nuevo aparato de almacenamiento.</p> {/* Info 3 */}
        </div>
      </div>
      <div className="grid grid-cols-3 grid-rows-1 items-start mt-50 pl-5">
        <div>
          <h2 className="text-3xl font-bold text-blue-800"><FontAwesomeIcon icon={faCircleInfo}/> Optimizacion de rendimiento</h2>  {/* Subtema 4 */}
          <p className="text-2xl text-zinc-800 pr-10 mt-10">Te ayudamos a eliminar amenazas claras y a hacer que tu servidor sea de los mas rapidos.</p>  {/* Info 4 */}
        </div>
        <div>
          <h2 className="text-3xl font-bold text-blue-800"><FontAwesomeIcon icon={faCircleInfo}/> Actualizacion de sistemas operativos</h2>  {/* Subtema 5 */}
          <p className="text-2xl text-zinc-800 pr-10 mt-10">Si necesitas cualquier actualizacion o instalacion la hacemos nosotros para que no cometas ningun error.</p> {/* Info 5 */}
        </div>
        <div>
          <h2 className="text-3xl font-bold text-blue-800"><FontAwesomeIcon icon={faCircleInfo}/> Clientes</h2>  {/* Subtema 6 */}
          <p className=" text-2xl text-zinc-800 pr-10 mt-10">Nuestros servicios, principalmente son para empresas o escuelas, pero tambien podemos ofrecer nuestros servicios a clientes individuales.</p> {/* Info 6 */}
        </div>
      </div>
    </div>
  );
}
