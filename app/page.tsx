import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import React from "react";

export default function Home() {
  return (
    <div className="bg-blue-50 grid items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[var(--font-geist-sans)]">
      <h1 className=" text-7xl font-bold text-center">Barcelona Server Restorers</h1>
      <img src="Logo.svg" alt="Logo" className="w-40" />
      <div className="mt-10 flex items-center">
        <input 
          type="text" 
          placeholder="you@example.com" 
          className="bg-white rounded-lg p-2 border-2 border-black" 
        />
        <button className="bg-blue-800 rounded-lg p-2 border-2 border-black ml-5 text-white font-semibold">
          Entra
        </button>
      </div>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1" className="bg-white rounded-md p-2 pt-0 pb-0 border-2 shadow-md shadow-blue-600">
          <AccordionTrigger>¿Quienes somos?</AccordionTrigger>
          <AccordionContent>
            Ofrecemos reparación y mantenimiento de servidores a demanda, con especialización en racks, optimización, instalación de hardware y actualización de sistemas operativos. Garantizamos soporte técnico y tiempos de respuesta rápidos.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" className="mt-5 bg-white rounded-md p-2 pt-0 pb-0 border-2 shadow-md shadow-blue-600">
          <AccordionTrigger>Servicio técnico</AccordionTrigger>
          <AccordionContent>
            Brindamos soporte técnico especializado para asegurar el buen funcionamiento de los sistemas.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3" className="mt-5 bg-white rounded-md p-2 pt-0 pb-0 border-2 shadow-md shadow-blue-600">
          <AccordionTrigger>Contactanos</AccordionTrigger>
          <AccordionContent>
            Contacta con nosotros para consultas y soporte técnico rápido.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4" className="mt-5 bg-white rounded-md p-2 pt-0 pb-0 border-2 shadow-md shadow-blue-600">
          <AccordionTrigger>Comentarios y reseñas</AccordionTrigger>
          <AccordionContent>
            Recibe y consulta opiniones sobre nuestros servicios.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
