import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const HeaderNavegation = () => {
    return (
        <div>
            <nav className="hidden lg:flex gap-5 text-lg text-white cursor-pointer">
                <RouterLink to="/" className="hover:text-red-500">
                    Inicio
                </RouterLink>
                <ScrollLink
                    to="coleccion"
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className="cursor-pointer hover:text-red-500"
                >
                    Colecciones
                </ScrollLink>
                <ScrollLink
                    to="nosotros"
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className="cursor-pointer hover:text-red-500"
                >
                    Nosotros
                </ScrollLink>
            </nav>
           
        </div>
    );
}

export default HeaderNavegation;