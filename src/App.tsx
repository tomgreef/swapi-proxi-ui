import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PeoplePage from './pages/PeoplePage';
import PersonPage from './pages/PersonPage';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <PeoplePage />,
    },
    {
      path: '/:id',
      element: <PersonPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
