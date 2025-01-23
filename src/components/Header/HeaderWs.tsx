import { FaWhatsapp } from "react-icons/fa";
const BtnWs: React.FC = () => {
   const whatsappNumber = "+573146757244";
   const message = "Hola, visité tu página de BDMiseel y estoy interesado en obtener asesoramiento sobre la personalización y bordados. ¿Podrías brindarme más información sobre tus productos y cómo realizar un pedido?";
   const encodedMessage = encodeURIComponent(message);

    return (
        <div className="">
            <a 
                href={`https://wa.me/${whatsappNumber}?text=${encodedMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contactar por WhatsApp"
            >
                <button className="text-3xl shadow-lg transition-transform transform hover:scale-110 hover:shadow-xl hover:text-red-600">
                    <FaWhatsapp />
                </button>
            </a>
        </div>
    );
};

export default BtnWs;