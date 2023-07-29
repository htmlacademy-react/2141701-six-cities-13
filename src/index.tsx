import React from 'react';
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom/client';
import { BrowserRouter} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';


import App from './components/app/app';
import {store} from './store/index';
import { ALL_CITY_LIST } from './constants';
import { SORT_TYPE_PLACE } from './constants';
import {offers} from './mocks/offers';
import {CITY} from './mocks/city';
import {allReviews} from './mocks/review';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
    <HelmetProvider>
    <BrowserRouter>
    <App allCityList={ALL_CITY_LIST} sortTypePlace={SORT_TYPE_PLACE} offers={offers} city={CITY} reviews={allReviews}/>
    </BrowserRouter>
    </HelmetProvider>
    </Provider>
  </React.StrictMode>
);
