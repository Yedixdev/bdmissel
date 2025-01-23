// src/components/PrivacyPolicy.tsx
import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className='flex flex-col '>
      <Header/>
      <div className="container mx-auto px-10 pt-16">
        <h1 className="text-2xl font-bold mb-4 mt-5 text-center font-display">Política de Privacidad de BDMiseel</h1>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-red-500">1. Introducción</h2>
          <p>
            En **BDMisell**, nos tomamos muy en serio tu privacidad y el tratamiento de tus datos personales. Esta Política de Privacidad tiene como objetivo informarte sobre cómo recopilamos, usamos, almacenamos y protegemos tu información personal cuando accedes a nuestro sitio web y utilizas nuestros servicios.
          </p>
        </section>
        
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-red-500">2. Información que Recopilamos</h2>
          <p>
            Recopilamos diferentes tipos de información cuando interactúas con nosotros, tales como:
          </p>
          <ul className="list-disc pl-6">
            <li><strong>Información personal:</strong> Al realizar un pedido, te solicitamos ciertos datos personales, como nombre, dirección de correo electrónico, dirección de envío, número de teléfono y detalles de pago.</li>
            <li><strong>Datos de navegación:</strong> Recopilamos información sobre tu navegación en nuestro sitio web, como tu dirección IP, el tipo de dispositivo, y las páginas visitadas.</li>
            <li><strong>Cookies:</strong> Usamos cookies para mejorar tu experiencia de navegación, personalizar contenido y analizar el tráfico del sitio.</li>
          </ul>
        </section>
        
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-red-500">3. Uso de la Información</h2>
          <p>
            La información que recopilamos se utiliza para:
          </p>
          <ul className="list-disc pl-6">
            <li>Procesar y enviar tus productos personalizados.</li>
            <li>Brindar atención al cliente y responder preguntas sobre tus pedidos.</li>
            <li>Mejorar nuestros servicios y personalizar tu experiencia de compra.</li>
            <li>Enviarte correos electrónicos con novedades y promociones si aceptas recibirlos.</li>
          </ul>
        </section>
        
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-red-500">4. Compartir Información</h2>
          <p>
            **BDMisell** no venderá, alquilará ni compartirá tu información personal con terceros ajenos a nuestro proceso de ventas, salvo que sea necesario para completar una transacción (por ejemplo, procesadores de pago o empresas de envío).
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-red-500">5. Seguridad de la Información</h2>
          <p>
            Implementamos medidas de seguridad para proteger tu información personal de accesos no autorizados, modificaciones o divulgación. Sin embargo, ninguna transmisión de datos por Internet es completamente segura.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-red-500">6. Derechos sobre Tu Información</h2>
          <p>
            Tienes derecho a acceder, rectificar, eliminar o oponerte al procesamiento de tu información personal. Para ejercer estos derechos, contáctanos a través de los medios proporcionados.
          </p>
        </section>
        
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-red-500">7. Enlaces a Sitios Externos</h2>
          <p>
            Nuestro sitio web puede contener enlaces a otros sitios. No somos responsables de la privacidad o el contenido de estos sitios externos. Te recomendamos leer sus políticas de privacidad antes de proporcionar cualquier información personal.
          </p>
        </section>
        
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-red-500">8. Modificaciones a esta Política de Privacidad</h2>
          <p>
            Nos reservamos el derecho de modificar esta política en cualquier momento. Los cambios serán publicados en esta página y entrarán en vigor inmediatamente.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-red-500">9. Contacto</h2>
          <p>
            Si tienes preguntas sobre nuestra Política de Privacidad, puedes contactarnos a través de:
          </p>
          <ul className="list-disc pl-6">
            <li><strong>Correo electrónico:</strong> correo@bdmiseel.com</li>
            <li><strong>WhatsApp:</strong> +573154249690</li>
          </ul>
        </section>
      </div>
      <Footer/>
    </div>
  );
};

export default PrivacyPolicy;
