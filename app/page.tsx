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
        Ofrecemos reparación y mantenimiento de servidores a demanda para empresas, instituciones y clientes individuales. Nos especializamos en racks de servidores, optimización del rendimiento, instalación de hardware y actualización de sistemas operativos. Garantizamos soporte técnico especializado, tiempos de respuesta rápidos y soluciones personalizadas para minimizar el tiempo de inactividad y asegurar un funcionamiento óptimo.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" className="mt-5 bg-white rounded-md p-2 pt-0 pb-0 border-2 shadow-md shadow-blue-600">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3" className="mt-5 bg-white rounded-md p-2 pt-0 pb-0 border-2 shadow-md shadow-blue-600">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It's animated by default, but you can disable it if you prefer.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4" className="mt-5 bg-white rounded-md p-2 pt-0 pb-0 border-2 shadow-md shadow-blue-600">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
    </div>
  );
}
