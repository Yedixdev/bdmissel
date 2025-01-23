import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './AppRoutes';

const App = () => {
  return (
      <div className='bg-black text-gray-50 flex justify-center'>
        <Router>
          <AppRoutes />
        </Router>
      </div>
  );
};

export default App;
