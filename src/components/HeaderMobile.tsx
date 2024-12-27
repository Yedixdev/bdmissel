import { Link } from 'react-router-dom';
import { FaYoutube, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion'; 

const HeaderMobile = () => {
  return (
    <motion.nav
      className='lg:hidden flex p-10 flex-col items-center gap-4 font-urbanist text-xl text-blue1 font-bold bg-gradient-to-br from-[#fffbf4] to-[#7f99a9] shadow-md absolute w-full top-[65px] left-0 z-40'
      initial={{ opacity: 0, y: -30}} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.3, delay: 0.1 }} 
    >
      <motion.div
        initial={{ opacity: 0, y: -30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Link className="relative group transition duration-300 ease-in-out hover:text-beige1" 
        to="/">
          Inicio
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-beige1 transition-all duration-300 group-hover:w-full"/>
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Link className="relative group transition duration-300 ease-in-out hover:text-beige1" 
        to="/colecciones">
          Colecciones
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-beige1 transition-all duration-300 group-hover:w-full"/>
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <Link className="relative group transition duration-300 ease-in-out hover:text-beige1" 
        to="/soporte">
          Soporte
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-beige1 transition-all duration-300 group-hover:w-full"/>
        </Link>
      </motion.div>
      <div className='flex gap-10 justify-center items-center mt-3'>
        <motion.a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green1 hover:text-beige1 text-3xl transition duration-300 transform hover:scale-150"
          initial={{ opacity: 0, y: -25 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.3, delay: 0.6 }}
        >
          <FaYoutube className='text-4xl' />
        </motion.a>
        
        <motion.a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green1 hover:text-beige1 text-3xl transition duration-300 transform hover:scale-150"
          initial={{ opacity: 0, y: -25 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.3, delay: 0.7 }}
        >
          <FaInstagram  className='text-4xl'/>
        </motion.a>

      </div>
    </motion.nav>
  );
};

export default HeaderMobile;
