import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import AnnounceModal from './components/AnnounceModal';

const App = () => {
  return (
      <div className='bg-black text-gray-50 flex justify-center'>
        <AnnounceModal />
        <Router>
          <AppRoutes />
        </Router>
      </div>
  );
};

export default App;
