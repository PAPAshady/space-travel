import Layout from './Components/shared/Layout/Layout';
import Home from './Pages/Home/Home';
import Destination from './Pages/Destination/Destination';

const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/destination', element: <Destination /> },
    ],
  },
];

export default routes;
