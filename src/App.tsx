import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PeoplePage from './pages/PeoplePage';
import PersonPage from './pages/PersonPage';
import Layout from './pages/Layout';
import NotFoundPage from './pages/NotFoundPage';

export const PATHS = {
  PEOPLE: '/',
  PERSON: '/person/:id',
};

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: PATHS.PEOPLE,
          element: <PeoplePage />,
        },
        {
          path: PATHS.PERSON,
          element: <PersonPage />,
        },
      ],
    },
    {
      path: '*',
      element: <NotFoundPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
