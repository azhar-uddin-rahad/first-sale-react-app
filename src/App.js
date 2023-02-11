
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import routes from './pages/routes/routes.js/routes';

function App() {
  return (
    
    <div className="font-main">
      
     <RouterProvider router={routes}></RouterProvider>
     <Toaster></Toaster>
    </div>
    
  );
}

export default App;
