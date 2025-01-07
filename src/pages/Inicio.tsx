import Header from "../components/Header";
import Welcome from "../components/Welcome";
import SectionColeccion from "../components/HomeColeccion";
import WelcomeFooter from "../components/WelcomeFooter";
import HomeDescription from "../components/HomeDescription";
import CustomClothingDesigner from "../components/CustomClothingDesigner";
import Footer from "../components/Footer";
const Inicio = () => {
  return (
    <div className="bg-black text-gray-50 min-h-screen w-full max-w-[1350px] mx-auto flex flex-col justify-center items-center relative overflow-x-hidden">
      <div className="fixed top-0 left-0 w-full z-50">
        <Header />
      </div>
      <Welcome />
      <WelcomeFooter />
      <SectionColeccion />
      <CustomClothingDesigner />
      <HomeDescription />
      <Footer />
    </div>
  );
};

export default Inicio;