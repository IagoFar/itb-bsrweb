import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { User } from "lucide-react";
import React from "react";


export default function Home() {
  return (
    <div className="bg-blue-50 grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="mt-40 mb-1 justify-center">
        <h1 className="text-7xl font-bold">Comentarios y reseñas</h1>
        <h5 className="text-3xl text-zinc-500 text-center mt-5">Danos tu opinión!</h5>
      </div>
      <div className="justify-self-start">
        <h1 className="text-2xl font-bold">Los comentarios y reseñas de tus problemas solucionados</h1>
        <h5 className="text-zinc-500 mt-3 text-2xl">Gracias a todos!</h5>
      </div>
      <div className="grid grid-cols-3 grid-rows-1 mt-0 mb-50"> {/* Comentarios parte arriba */}
        <div className="rounded-md p-2 border-5 border-blue-800 mr-50"> {/* Comentario 1 */}
          <h1 className="text-2xl font-bold">“¡¡¡Muy buen servicio!!!”</h1> {/* Comentario */}
          <div className="grid grid-cols-2 ">
            <h2 className="text-5xl font-bold"><FontAwesomeIcon icon="user"/></h2>
            <div className="text-xl">
              <h5>Alejandro Sanz</h5> {/* Usuario */}
              <h1 className="text-yellow-400"><FontAwesomeIcon icon="star"/><FontAwesomeIcon icon="star"/><FontAwesomeIcon icon="star"/><FontAwesomeIcon icon="star"/><FontAwesomeIcon icon="star"/></h1>
            </div>
          </div>
        </div> {/* Fin de comentario 1 */}
        <div className="rounded-md p-2 border-5 border-blue-800 mr-50"> {/* Comentario 2 */}
          <h1 className="text-2xl font-bold">“Excelente trabajo, sigan asi”</h1> {/* Comentario */}
            <div className="grid grid-cols-2 ">
              <h2 className="text-5xl font-bold"><FontAwesomeIcon icon="user"/></h2>
              <div className="text-xl">
                <h5>Leonardo D'Caprio</h5> {/* Usuario */}
                <h1 className="text-yellow-400"><FontAwesomeIcon icon="star"/><FontAwesomeIcon icon="star"/><FontAwesomeIcon icon="star"/><FontAwesomeIcon icon="star"/><FontAwesomeIcon icon="star"/></h1>
              </div>
            </div>
        </div> {/* Fin de comentario 2 */}
        <div className="rounded-md p-2 border-5 border-blue-800 mr-50"> {/* Comentario 3 */}
          <h1 className="text-2xl font-bold">“Los mejores tecnicos, muy recomendados”</h1> {/* Comentario */}
            <div className="grid grid-cols-2 ">
              <h2 className="text-5xl font-bold"><FontAwesomeIcon icon="user"/></h2>
              <div className="text-xl">
                <h5>Elsa Campuntas</h5> {/* Usuario */}
                <h1 className="text-yellow-400"><FontAwesomeIcon icon="star"/><FontAwesomeIcon icon="star"/><FontAwesomeIcon icon="star"/><FontAwesomeIcon icon="star"/><FontAwesomeIcon icon="star"/></h1>
              </div>
            </div>
        </div> {/* Fin de comentario 3 */}
      </div> {/* Fin de omentarios parte arriba */}
      <div className="grid grid-cols-3 grid-rows-1"> {/* Comentarios parte abajo */}
        <div className="rounded-md p-2 border-5 border-blue-800 mr-50"> {/* Comentario 4 */}
          <h1 className="text-2xl font-bold">“The best OMG!!!”</h1> {/* Comentario */}
          <div className="grid grid-cols-2 ">
            <h2 className="text-5xl font-bold"><FontAwesomeIcon icon="user"/></h2>
            <div className="text-xl">
              <h5>Stefany Hawkings</h5> {/* Usuario */}
              <h1 className="text-yellow-400"><FontAwesomeIcon icon="star"/><FontAwesomeIcon icon="star"/><FontAwesomeIcon icon="star"/><FontAwesomeIcon icon="star"/><FontAwesomeIcon icon="star"/></h1>
            </div>
          </div>
        </div> {/* Fin de comentario 4 */}
        <div className="rounded-md p-2 border-5 border-blue-800 mr-50"> {/* Comentario 5 */}
          <h1 className="text-2xl font-bold">“Anteción de la mejor”</h1> {/* Comentario */}
            <div className="grid grid-cols-2 ">
              <h2 className="text-5xl font-bold"><FontAwesomeIcon icon="user"/></h2>
              <div className="text-xl">
                <h5>Elsa Patero</h5> {/* Usuario */}
                <h1 className="text-yellow-400"><FontAwesomeIcon icon="star"/><FontAwesomeIcon icon="star"/><FontAwesomeIcon icon="star"/><FontAwesomeIcon icon="star"/><FontAwesomeIcon icon="star"/></h1>
              </div>
            </div>
        </div> {/* Fin de comentario 5 */}
        <div className="rounded-md p-2 border-5 border-blue-800 mr-50"> {/* Comentario 6 */}
          <h1 className="text-2xl font-bold">“Lo han arreglado todo, muchas gracias”</h1> {/* Comentario */}
            <div className="grid grid-cols-2 ">
              <h2 className="text-5xl font-bold"><FontAwesomeIcon icon="user"/></h2>
              <div className="text-xl">
                <h5>Franco Escamilla</h5> {/* Usuario */}
                <h1 className="text-yellow-400"><FontAwesomeIcon icon="star"/><FontAwesomeIcon icon="star"/><FontAwesomeIcon icon="star"/><FontAwesomeIcon icon="star"/><FontAwesomeIcon icon="star"/></h1>
              </div>
            </div>
        </div> {/* Fin de comentario 6 */}
      </div> {/* Fin de omentarios parte abajo */}
    </div>
  );
}
