// src/components/TermsAndConditions.tsx

import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header/Header';

const Terms: React.FC = () => {
  return ( 
   <div className="flex flex-col">
  <Header/>
    <div className="container mx-auto px-10 pt-16 ">
     
      <h1 className="text-2xl font-bold mb-4 text-center mt-5  font-display">Términos y Condiciones de BDMiseel</h1>
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-red-500">1. Introducción</h2>
        <p>
          Estos Términos y Condiciones regulan el uso del sitio web BDMiseel y la adquisición de productos ofrecidos por nuestra tienda de ropa urbana y personalización. Al utilizar nuestros servicios, aceptas estos términos.
        </p>
      </section>
      
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-red-500">2. Proceso de Compra</h2>
        <p>
          El proceso de compra incluye un pago inicial del 50% al momento de realizar el pedido y el 50% restante cuando los productos estén listos para el envío. La entrega puede tener un tiempo de demora de hasta una semana.
        </p>
      </section>
      
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-red-500">3. Envíos</h2>
        <p>
          Los costos de envío no están incluidos en el precio del producto y se calculan al momento de realizar el pedido. Todos los productos serán enviados una vez que se haya completado el pago.
        </p>
      </section>
      
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-red-500">4. Personalización de Productos</h2>
        <p>
          Todos los productos son personalizables, ya sea con bordados o estampados. Si no encuentras el diseño que buscas, podemos crear uno personalizado. Además, ofrecemos una variedad de colores y tallas, y si no tenemos el producto deseado, podemos conseguirlo a solicitud del cliente.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold text-red-500">5. Modificaciones de los Términos</h2>
        <p>
          Nos reservamos el derecho de modificar estos Términos y Condiciones en cualquier momento. Te recomendamos revisarlos periódicamente para estar al tanto de cualquier cambio.
        </p>
      </section>
      
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-red-500">6. Contacto</h2>
        <p>
          Si tienes preguntas sobre nuestros productos, procesos de compra o cualquier otra consulta, no dudes en contactarnos a través de nuestras plataformas de contacto.
        </p>
      </section>
    </div>
    <Footer/>
    </div>
  );
};

export default Terms;
