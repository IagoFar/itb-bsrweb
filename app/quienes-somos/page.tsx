import React from "react";
import logo from "@/public/Quienessomos.png";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-blue-50 grid items-center justify-items-center min-h-screen pt-20 pb-20 gap-16 font-[family-name:var(--font-geist-sans)]">
      <div className="justify-center mt-10">
        <h1 className="text-7xl font-bold">Quienes Somos?</h1>
        <h5 className="text-3xl text-zinc-500 text-center">Todo sobre nosotros!</h5>
      </div>
      {/* Wrap the Image and text content in a single container */}
      <div className="flex flex-col items-center w-full">
        <Image src={logo} alt="Logo" className="w-full h-auto mt-20" />
        <div className="p-20">
          <h1 className="text-3xl font-bold mb-5">Barcelona Server Restorers (BSR)</h1>
          <p className="text-2xl">
            Nuestra empresa se dedica a ofrecer un servicio integral de reparación y mantenimiento de servidores a demanda, tanto para empresas como instituciones educativas, pero también atendemos a clientes individuales. Nos especializamos en la gestión de racks de servidores, garantizando que los sistemas funcionen de forma óptima y segura. Nuestros servicios incluyen desde la reparación, mantenimiento preventivo, optimización del rendimiento, hasta la instalación de hardware y actualización de sistemas operativos. <br />
            Ofrecemos soluciones personalizadas adaptadas a las necesidades específicas de cada cliente, asegurando tiempo de respuesta rápido y soporte técnico altamente calificado. Nuestro objetivo es minimizar el tiempo de inactividad y mantener la infraestructura tecnológica en perfectas condiciones, contribuyendo así al éxito operativo de nuestros clientes. <br />
            La empresa se basa en un servicio de reparación y mantenimiento de servidores a demanda, pensado principalmente para empresas o escuelas, pero también los clientes individuales pueden solicitar sus servicios. Además de la reparación y mantenimiento de racks de servidores, se ofrecen servicios de optimización del rendimiento, instalación de hardware adicional y actualización de sistemas operativos. La empresa garantiza tiempos de respuesta rápidos, soporte técnico especializado y soluciones personalizadas para cada cliente, con el objetivo de minimizar el tiempo de inactividad y asegurar el correcto funcionamiento de la infraestructura tecnológica.
          </p>
          <h1 className="text-3xl font-bold mt-20 mb-5">Mision, vision y valores de la empresa</h1>
          <p className="text-2xl">
            - Nuestro objetivo en el ámbito empresarial actual sería tener una estructura de trabajadores con alto conocimiento en diferentes grupos de ocio, comercios, reparación, marketing..., que nos ayudará a empezar con buen pie en el mundo de la solución a problemas en servidores. Queremos tener unos valores y principios que nos ayudarán a empezar...<br />
            - Queremos ser una empresa bien organizada y bien vista por los demás y las empresas. Ayudarnos entre nosotros y contratar trabajadores junior y con experiencia que estén muchos años con nosotros.<br />
            - Tener una visión y un proyecto a largo plazo y analizar los beneficios y pérdidas anticipadamente de cada sector nos ayudará a dar este paso tan complicado como el principio.<br />
            - Después con mayor seguridad y confianza de economía podremos ampliar la plantilla de empleados, evolucionar en el sector informático y conseguir más visibilidad a nivel nacional.
          </p>
        </div>
      </div>
    </div>
  );
}