import React from 'react';
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom/client';
import { BrowserRouter} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';

import App from './components/app/app';
import {store} from './store/index';
import {offers} from './mocks/offers';
import {CITY} from './mocks/city';
import {allReviews} from './mocks/review';
import {checkAuthAction, fetchOffersData} from '../src/store/api-actions';
import ErrorMessage from './components/error-message/error-message';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

store.dispatch(fetchOffersData());
store.dispatch(checkAuthAction());

root.render(
  <React.StrictMode>
    <Provider store={store}>
    <ErrorMessage/>
    <HelmetProvider>
    <BrowserRouter>
    <App offers={offers} city={CITY} reviews={allReviews}/>
    </BrowserRouter>
    </HelmetProvider>
    </Provider>
  </React.StrictMode>
);
