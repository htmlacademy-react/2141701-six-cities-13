import {createReducer} from '@reduxjs/toolkit';

import { Review } from '../types/review';
import { Offer } from './../types/offer';
import { AuthorizationStatus } from './../constants';
import {changeCity, changeSortTask, requireAuthorization, getOffersData, setDataLoading, getOffersNearbyData,
   getReviewsData, getOfferData, getUserEmail} from '../store/action';
import {SORT_TYPE_PLACE} from '../constants';
import {CITIES} from '../constants';
import {City} from '../types/city';

type ReducerType = {
  currentCity: City;
  currentTaskSort: typeof SORT_TYPE_PLACE[0];
  offer: Offer | null;
  offers: Offer[];
  offersNearby: Offer[];
  reviews: Review[];
  taskSort: typeof SORT_TYPE_PLACE;
  authorizationStatus: AuthorizationStatus;
  isLoadingData: boolean;
  userEmail: string | null;
};

const initialState: ReducerType = {
  currentCity: CITIES[0],
  currentTaskSort: SORT_TYPE_PLACE[0],
  offer: null,
  offers: [],
  offersNearby: [],
  reviews: [],
  taskSort: SORT_TYPE_PLACE,
  authorizationStatus: AuthorizationStatus.Unknown,
  isLoadingData: false,
  userEmail: null,
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
  .addCase(getOffersNearbyData, (state, action) => {
    state.offersNearby = action.payload;
  })
  .addCase(getReviewsData, (state, action) => {
    state.reviews = action.payload;
  })
  .addCase(getOfferData, (state, action) => {
    state.offer = action.payload;
  })
  .addCase(getUserEmail, (state, action) => {
    state.userEmail = action.payload;
  });
});


export{reducer};
