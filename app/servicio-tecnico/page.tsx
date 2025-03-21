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
        <div>
          <img src="informacion-removebg-preview.png" className="mt-20 h-10" /> 
          <h2 className="text-3xl font-bold mb-5 ml-13">Reparacion de servidores</h2>
        </div>
        <p className="text-2xl">Nuestra empresa se dedica a ofrecer un servicio integral de reparación y mantenimiento de servidores a demanda, tanto para empresas como instituciones educativas, pero también atendemos a clientes individuales. Nos especializamos en la gestión de racks de servidores, garantizando que los sistemas funcionen de forma óptima y segura. Nuestros servicios incluyen desde la reparación, mantenimiento preventivo, optimización del rendimiento, hasta la instalación de hardware y actualización de sistemas operativos. <br />Ofrecemos soluciones personalizadas adaptadas a las necesidades específicas de cada cliente, asegurando tiempo de espuesta rápido y soporte técnico altamente calificado. Nuestro objetivo es minimizar el tiempo de inactividad y mantener la infraestructura tecnológica en perfectas condiciones, contribuyendo así al éxito operativo de nuestros clientes. <br />La empresa se basa en un servicio de reparación y mantenimiento de servidores a demanda, pensado principalmente para empresas o escuelas, pero también los clientes individuales pueden solicitar sus servicios. Además de la reparación y mantenimiento de racks de servidores, se ofrecen servicios de optimización del rendimiento, instalación de hardware adicional y actualización de sistemas operativos. La empresa garantiza tiempos de respuesta rápidos, soporte técnico especializado y soluciones personalizadas para cada cliente, con el objetivo de minimizar el tiempo de inactividad y asegurar el correcto funcionamiento de la infraestructura tecnológica.</p>
        <h1 className="text-3xl font-bold mt-20 mb-5">Mision, vision y valores de la empresa</h1>
        <p className="text-2xl">- Nuestro objetivo en el ámbito empresarial actual sería tener una estructura de trabajadores con alto conocimiento en diferentes grupos de ocio, comercios, reparación, marketing..., que nos ayudará a empezar con buen pie en el mundo de la solución a problemas en servidores. Queremos tener unos valores y principios que nos ayudarán a empezar...<br />- Queremos ser una empresa bien organizada y bien vista por los demás y las empresas. Ayudarnos entre nosotros y contratar trabajadores junior y con experiencia que estén muchos años con nosotros.<br />- Tener una visión y un proyecto a largo plazo y analizar los beneficios y pérdidas anticipadamente de cada sector nos ayudará a dar este paso tan complicado como el principio.<br />- Después con mayor seguridad y confianza de economía podremos ampliar la plantilla de empleados, evolucionar en el sector informático y conseguir más visibilidad a nivel nacional.</p>
      </div>
    </div>
  );
}
