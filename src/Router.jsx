import Layout from './Components/shared/Layout/Layout';
import Home from './Pages/Home/Home';

const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [{ path: '/', element: <Home /> }],
  },
];

export default routes;
