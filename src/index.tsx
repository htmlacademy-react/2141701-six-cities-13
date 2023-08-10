import React from 'react';
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom/client';
import {HelmetProvider} from 'react-helmet-async';
import HistoryRouter from './components/history-route/history-route';
import browserHistory from './browser-history';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import App from './components/app/app';
import {store} from './store/index';
import {offers} from './mocks/offers';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
    <ToastContainer/>
    <HelmetProvider>
    <HistoryRouter history={browserHistory}>
    <App offers={offers}/>
    </HistoryRouter>
    </HelmetProvider>
    </Provider>
  </React.StrictMode>
);
