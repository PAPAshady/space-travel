import Layout from './Components/shared/Layout/Layout';
import Home from './Pages/Home/Home';
import Destination from './Pages/Destination/Destination';
import Crew from './Pages/Crew/Crew';

const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/destination', element: <Destination /> },
      { path: '/crew', element: <Crew /> },
    ],
  },
];

export default routes;
