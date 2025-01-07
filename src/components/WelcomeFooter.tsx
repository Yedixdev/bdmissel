"use client";
import { motion } from "framer-motion";
import Starts from "@/assets/img/estrella.png";
import Happy from "@/assets/img/happy.png";
import Ws from "@/assets/img/ws.png";

interface SectionItem {
   image: string; 
   title: string;
   description: string;
}

const sectionItems: SectionItem[] = [
   {
      image: Starts,
      title: "Productos de calidad.",
      description: "Marca la diferencia."
   },
   {
      image: Happy,
      title: "Compra 100% segura.",
      description: "Tu compra sera confiable."
   },
   {
      image: Ws,
      title: "Contáctanos",
      description: "No te quedes con dudas."
   }
];

const WelcomeFooter: React.FC = () => {
   return (
      <motion.div 
         initial={{ opacity: 0, y: 20 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ delay: 0.1 }}
         className="max-w-[1500px] mx-auto flex justify-evenly gap-5 lg:gap-12 flex-wrap mt-32 md:mt-14 mb-5 relative z-10">
         
         {sectionItems.map((item, index) => (
            <motion.div 
               key={index}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: index * 0.2 }}
               className="flex items-center rounded-2xl w-[300px] md:w-[350px] lg:w-[400px] h-24 md:h-28 lg:h-32 
               border border-red-800/30 gap-4 bg-black/80 px-4 
               shadow-[0_0_15px_rgba(0,0,0,0.3)] hover:shadow-[0_0_20px_rgba(220,38,38,0.2)]
               backdrop-blur-sm transition-all duration-300 hover:border-red-600/50 group"
            >
               <div className="relative">
                  <img 
                     src={item.image} 
                     alt={item.title} 
                     className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain 
                     transition-transform duration-300 group-hover:scale-110
                     drop-shadow-[0_0_8px_rgba(220,38,38,0.3)]" 
                  />
                  {/* Efecto de brillo en el icono */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-600/10 to-transparent 
                     opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
               </div>

               <div className="font-lato relative">
                  <div className="text-lg md:text-xl lg:text-2xl font-semibold text-white 
                     group-hover:text-red-600 transition-colors duration-300">
                     {item.title}
                  </div>
                  <div className="text-sm md:text-base lg:text-lg text-gray-400 
                     group-hover:text-gray-300 transition-colors duration-300">
                     {item.description}
                  </div>
                  {/* Línea decorativa */}
                  <div className="absolute -bottom-2 left-0 w-0 h-[2px] 
                     bg-gradient-to-r from-red-800 via-red-600 to-red-800 
                     group-hover:w-full transition-all duration-500"></div>
               </div>

               {/* Esquinas decorativas */}
               <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 
                  border-red-600/30 group-hover:border-red-600/50 transition-colors duration-300"></div>
               <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 
                  border-red-600/30 group-hover:border-red-600/50 transition-colors duration-300"></div>
            </motion.div>
         ))}
      </motion.div>
   );
}

export default WelcomeFooter;