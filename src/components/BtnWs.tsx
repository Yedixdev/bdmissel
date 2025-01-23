import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const BtnWs: React.FC = () => {
   const whatsappNumber = "+573146757244";
   const message = "Hola, visité tu página de BDMiseel y estoy interesado en obtener asesoramiento sobre la personalización y bordados. ¿Podrías brindarme más información sobre tus productos y cómo realizar un pedido?";
   const encodedMessage = encodeURIComponent(message);

   return (
      <div className="fixed bottom-5 right-5 z-40">
         <motion.div 
            className="relative" 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1 }}
         >
            <a 
               href={`https://wa.me/${whatsappNumber}?text=${encodedMessage}`}
               target="_blank"
               rel="noopener noreferrer"
               aria-label="Contactar por WhatsApp"
            >
               <motion.button
                  className="text-5xl text-white bg-red-800 rounded-full p-3 shadow-lg transition-transform transform hover:scale-110 hover:shadow-xl"
                  whileHover={{ scale: 1.2, rotate: 15 }}
                  whileTap={{ scale: 0.9 }}
                  animate={{
                     opacity: [1, 0.4, 1], 
                     scale: [1, 1.05, 1],
                  }}
                  transition={{
                     opacity: {
                        duration: 0/6,
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "easeInOut",
                     },
                     scale: {
                        duration: 0.3,
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "easeInOut",
                     },
                  }}
               >
                  <FaWhatsapp />
               </motion.button>
            </a>
         </motion.div>
      </div>
   );
};

export default BtnWs;
