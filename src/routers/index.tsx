import {Provider} from 'react-redux';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import {SignIn, Deck} from '../pages';
import {store} from '../store';

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
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};
