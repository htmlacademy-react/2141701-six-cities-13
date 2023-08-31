import { createSlice } from '@reduxjs/toolkit';

import {NameSpace} from '../../constants';
import {fetchOffersNearby, fetchFavoritesAction} from '../api-actions';
import {OffersNearbyInitialState} from '../../types/initialState';

const initialState: OffersNearbyInitialState = {
  offersNearby: []
};

export const offersNearbyProcess = createSlice({
  name: NameSpace.OfferNearby,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOffersNearby.fulfilled, (state, action) => {
        state.offersNearby = action.payload;
      })
      .addCase(fetchFavoritesAction.fulfilled, (state, action) => {
        state.offersNearby = state.offersNearby.map((offer) =>
        offer.id === action.payload?.id ? action.payload : offer
      );
    });

  }
});
