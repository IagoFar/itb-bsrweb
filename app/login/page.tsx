import { Table } from "lucide-react";
import React from "react";


export default function Home() {
  return (
    <div className="bg-blue-50 grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="bg-center h">
        <p className="text-black text-6xl">Iniciar Sesión</p>    
        <table border="1">
          <thead>
          <tr>
            <th>Correo</th> 
          </tr>
          </thead>
          <tfoot>
            <tr>
              <th>ex:pepito@gmail.com</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}
