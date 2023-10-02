import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
  generatePath,
  redirect,
  useRoutes,
} from 'react-router-dom';
import LayoutScreen from '../layout/layout';
import Content from '../content';

const HOME_PATH = '/';
const CMDB_PATH = 'cmdb';
const ENDPOINTS_PATH = 'endpoints';

const getHomePath = () => generatePath(HOME_PATH);

function App() {
  const routes = useRoutes([
    {
      path: '/',
      element: <LayoutScreen />,
      children: [
        {
          path: CMDB_PATH,
          children: [
            {
              path: ENDPOINTS_PATH,
              element: <Content />,
            },
          ],
        },
      ],
    },
    {
      path: '*',
      element: <Navigate to={'/'} />,
    },
  ]);

  return <>{routes}</>;
}

export default App;
