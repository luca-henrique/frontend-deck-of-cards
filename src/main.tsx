import ReactDOM from 'react-dom/client';

import {SignIn, Deck} from './pages';
import './reset.css';
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Deck />,
);
