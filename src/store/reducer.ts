import {createReducer} from '@reduxjs/toolkit';

import {changeCity, changeSortTask} from '../store/action';
import {Offers} from '../types/offer';
import { offers } from '../mocks/offers';
import {SORT_TYPE_PLACE} from '../constants';

type ReducerType = {
  currentCity: string;
  currentTaskSort: typeof SORT_TYPE_PLACE[0] ;
  offers: Offers;
  taskSort: typeof SORT_TYPE_PLACE;
}

const initialState: ReducerType = {
  currentCity: 'Paris',
  currentTaskSort: SORT_TYPE_PLACE[0],
  offers: offers,
  taskSort: SORT_TYPE_PLACE,

};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(changeCity, (state, action) => {
    state.currentCity = action.payload;
  });
  builder.addCase(changeSortTask, (state, action) => {
    state.currentTaskSort = action.payload;
  });
});


export{reducer};
