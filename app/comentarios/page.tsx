import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Comment: React.FC<{ text: string; user: string; stars: number }> = ({ text, user, stars }) => {
  return (
    <div className="rounded-md p-4 border-2 border-blue-800 m-4">
      <h1 className="text-2xl font-bold">{`“${text}”`}</h1>
      <div className="grid grid-cols-2 items-center mt-4">
        <h2 className="text-5xl font-bold">
          <FontAwesomeIcon icon="user" />
        </h2>
        <div className="text-xl">
          <h5>{user}</h5>
          <h1 className="text-yellow-400">
            {Array.from({ length: stars }).map((_, i) => (
              <FontAwesomeIcon key={i} icon="star" />
            ))}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  const comments = [
    { text: "¡¡¡Muy buen servicio!!!", user: "Alejandro Sanz", stars: 5 },
    { text: "Excelente trabajo, sigan asi", user: "Leonardo D'Caprio", stars: 5 },
    { text: "Los mejores tecnicos, muy recomendados", user: "Elsa Campuntas", stars: 5 },
    { text: "The best OMG!!!", user: "Stefany Hawkings", stars: 5 },
    { text: "Anteción de la mejor", user: "Elsa Patero", stars: 5 },
    { text: "Lo han arreglado todo, muchas gracias", user: "Franco Escamilla", stars: 5 },
  ];

  return (
    <div className="bg-blue-50 grid items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="mt-40 mb-1 text-center">
        <h1 className="text-7xl font-bold">Comentarios y reseñas</h1>
        <h5 className="text-3xl text-zinc-500 mt-5">Danos tu opinión!</h5>
      </div>
      <div className="text-center">
        <h1 className="text-2xl font-bold">Los comentarios y reseñas de tus problemas solucionados</h1>
        <h5 className="text-zinc-500 mt-3 text-2xl">Gracias a todos!</h5>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {comments.map((comment, index) => (
          <Comment
            key={index}
            text={comment.text}
            user={comment.user}
            stars={comment.stars}
          />
        ))}
      </div>
    </div>
  );
}