import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import {SignIn, Deck} from '../pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <SignIn />,
  },
  {
    path: '/deck',
    element: <Deck />,
  },
]);

export const Routers = () => {
  return <RouterProvider router={router} />;
};
