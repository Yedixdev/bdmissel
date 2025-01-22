import { Routes, Route } from 'react-router-dom';
import Error from './pages/Error';  
import Inicio from './pages/Inicio';
import Terms from './pages/Terms';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ScrollToTop from './components/ScrollTop';

const AppRoutes = () => {
  return (
    <>
    <ScrollToTop />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/terminos&condiciones" element={<Terms />} />
        <Route path="/politica&privacidad" element={<PrivacyPolicy />} />
        <Route path="/error" element={<Error />} />
      </Routes>
    </>
  );
};

export default AppRoutes;

