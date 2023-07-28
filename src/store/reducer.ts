import {createReducer} from '@reduxjs/toolkit';

import {changeCity} from '../store/action';
import {Offers} from '../types/offer';
import { offers } from '../mocks/offers';

type ReducerType = {
  currentCity: string;
  offers: Offers;
}

const initialState: ReducerType = {
  currentCity: 'Paris',
  offers: offers
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(changeCity, (state, action) => {
    state.currentCity = action.payload;
  });
});


export{reducer};