import ReactDOM from 'react-dom/client';

import {Routers} from './routers/index';

import './reset.css';
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Routers />,
);
