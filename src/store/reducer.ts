import { AuthorizationStatus } from './../constants';
import {createReducer} from '@reduxjs/toolkit';

import {changeCity, changeSortTask, requireAuthorization, setError, getOffersData, setDataLoading} from '../store/action';
import {Offers} from '../types/offer';
import {SORT_TYPE_PLACE} from '../constants';
import {CITIES} from '../constants';
import {City} from '../types/city';

type ReducerType = {
  currentCity: City;
  currentTaskSort: typeof SORT_TYPE_PLACE[0];
  offers: Offers;
  taskSort: typeof SORT_TYPE_PLACE;
  authorizationStatus: AuthorizationStatus;
  isLoadingData: boolean;
  error: string | null;
};

const initialState: ReducerType = {
  currentCity: CITIES[0],
  currentTaskSort: SORT_TYPE_PLACE[0],
  offers: [],
  taskSort: SORT_TYPE_PLACE,
  authorizationStatus: AuthorizationStatus.Unknown,
  isLoadingData: false,
  error: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder
  .addCase(getOffersData, (state, action) => {
    state.offers = action.payload;
  })
  .addCase(changeCity, (state, action) => {
    state.currentCity = action.payload;
  })
  .addCase(changeSortTask, (state, action) => {
    state.currentTaskSort = action.payload;
  })
  .addCase(requireAuthorization, (state, action) => {
    state.authorizationStatus = action.payload;
  })
  .addCase(setDataLoading, (state, action) => {
    state.isLoadingData = action.payload;
  })
  .addCase(setError, (state, action) => {
    state.error = action.payload;
  })


});


export{reducer};
