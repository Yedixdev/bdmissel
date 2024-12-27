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
      description: "Tu compra es segura y confiable."
   },
   {
      image: Ws,
      title: "Contáctanos",
      description: "No te quedes con dudas."
   }
];

const SectionEnvio: React.FC = () => {
   return (
      <motion.div 
         initial={{ opacity: 0, y: 20 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ delay: 0.1 }}
         className="max-w-[1500px] mx-auto flex justify-evenly gap-5 lg:gap-10 flex-wrap mt-48 md:mt-20 relative z-10">
         
         {sectionItems.map((item, index) => (
            <motion.div 
               key={index}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: index * 0.2 }}
               className="flex items-center rounded-2xl w-[300px] md:w-[350px] lg:w-[400px] h-24 md:h-28 lg:h-32 border-2 border-b-slate-50 gap-4 bg-black  px-4">
               
               <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain" 
               />
               
               <div className="font-lato">
                  <div className="text-lg md:text-xl lg:text-2xl font-semibold text-white">{item.title}</div>
                  <div className="text-sm md:text-base lg:text-lg text-gray-400">{item.description}</div>
               </div>
            </motion.div>
         ))}
      </motion.div>
   );
}

export default SectionEnvio;
