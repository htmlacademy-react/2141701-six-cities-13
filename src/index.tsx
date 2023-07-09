import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './components/app/app';
import { ALL_CITY_LIST } from './constants';
import { SORT_TYPE_PLACE } from './constants';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App allCityList={ALL_CITY_LIST} sortTypePlace={SORT_TYPE_PLACE} />
  </React.StrictMode>
);
