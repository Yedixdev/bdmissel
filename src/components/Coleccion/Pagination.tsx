interface PaginationProps {
   currentPage: number;
   totalPages: number;
   onPageChange: (page: number) => void;
 }
 
 const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
   return (
     <div className="relative flex gap-6 mt-8 justify-center items-center">
 
       {/* Botón Anterior */}
       <button
         onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
         disabled={currentPage === 1}
         className={`relative px-6 py-2 rounded-sm border border-red-600/30 
           bg-gradient-to-r from-black via-red-950 to-black
           group overflow-hidden
           ${currentPage === 1 
             ? 'opacity-50 cursor-not-allowed' 
             : 'hover:border-red-500 hover:shadow-[0_0_20px_rgba(220,38,38,0.4)]'} 
           transition-all duration-300`}
       >
         <span className="relative z-10 text-white font-display tracking-wider text-sm
           group-hover:text-red-200 transition-colors duration-300">ANTERIOR</span>
         <div className="absolute inset-0 bg-gradient-to-r from-red-800 to-red-600 opacity-0 
           group-hover:opacity-20 transition-opacity duration-300" />
       </button>
 
       {/* Números de página */}
       <div className="flex gap-3">
         {[...Array(totalPages)].map((_, index) => (
           <button
             key={index}
             onClick={() => onPageChange(index + 1)}
             className={`relative w-12 h-12 rounded-sm flex items-center justify-center 
               transition-all duration-300 overflow-hidden
               border border-red-600/30 hover:border-red-500
               ${currentPage === index + 1
                 ? 'bg-gradient-to-br from-red-900 via-red-800 to-red-900 shadow-[0_0_15px_rgba(220,38,38,0.5)]'
                 : 'bg-gradient-to-br from-black via-red-950 to-black hover:shadow-[0_0_15px_rgba(220,38,38,0.3)]'
               }`}
           >
             {/* Esquinas decorativas */}
             <div className="absolute top-0 left-0 w-3 h-[1px] bg-red-500/50" />
             <div className="absolute top-0 left-0 w-[1px] h-3 bg-red-500/50" />
             <div className="absolute bottom-0 right-0 w-3 h-[1px] bg-red-500/50" />
             <div className="absolute bottom-0 right-0 w-[1px] h-3 bg-red-500/50" />
             
             <span className={`relative z-10 font-display text-lg
               ${currentPage === index + 1
                 ? 'text-red-200'
                 : 'text-gray-300 group-hover:text-red-200'
               }`}>
               {index + 1}
             </span>
           </button>
         ))}
       </div>
 
       {/* Botón Siguiente */}
       <button
         onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
         disabled={currentPage === totalPages}
         className={`relative px-6 py-2 rounded-sm border border-red-600/30 
           bg-gradient-to-r from-black via-red-950 to-black
           group overflow-hidden
           ${currentPage === totalPages 
             ? 'opacity-50 cursor-not-allowed' 
             : 'hover:border-red-500 hover:shadow-[0_0_20px_rgba(220,38,38,0.4)]'} 
           transition-all duration-300`}
       >
         <span className="relative z-10 text-white font-display tracking-wider text-sm
           group-hover:text-red-200 transition-colors duration-300">SIGUIENTE</span>
         <div className="absolute inset-0 bg-gradient-to-r from-red-800 to-red-600 opacity-0 
           group-hover:opacity-20 transition-opacity duration-300" />
       </button>

     </div>
   );
 };
 
 export default Pagination;