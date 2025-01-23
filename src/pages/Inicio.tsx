import { Element } from "react-scroll";
import Header from "../components/Header/Header";
import Welcome from "../components/Welcome";
import SectionColeccion from "../components/Coleccion/HomeColeccion";
import WelcomeFooter from "../components/WelcomeFooter";
import HomeDescription from "../components/HomeDescription";
import Footer from "../components/Footer";
import BtnWs from "../components/BtnWs";

const Inicio = () => {
  return (
    <>
    <div className="bg-black text-gray-50 min-h-screen w-full max-w-[1350px] mx-auto flex flex-col justify-center items-center relative overflow-x-hidden">
      <div className="fixed top-0 left-0 w-full z-50">
        <Header />
      </div>
      <Welcome />
      <WelcomeFooter />
      <Element name="coleccion" >
        <SectionColeccion />
      </Element>
      <Element name="nosotros" >
        <HomeDescription />
      </Element>
      <BtnWs />
      <Footer />
    </div>
    </>
  );
};

export default Inicio;