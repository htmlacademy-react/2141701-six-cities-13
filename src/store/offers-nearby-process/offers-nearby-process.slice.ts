import { createSlice } from '@reduxjs/toolkit';

import {NameSpace} from '../../constants';
import {fetchOffersNearby} from '../api-actions';
import {OffersNearbyInitialState} from '../../types/initialState';

const initialState: OffersNearbyInitialState = {
  isLoadingData: false,
  offersNearby: []
};

export const offersNearbyProcess = createSlice({
  name: NameSpace.OfferNearby,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOffersNearby.pending, (state) => {
        state.isLoadingData = true;
      })
      .addCase(fetchOffersNearby.fulfilled, (state, action) => {
        state.offersNearby = action.payload;
        state.isLoadingData = false;
      })
      .addCase(fetchOffersNearby.rejected, (state) => {
        state.isLoadingData = false;
      });
  }
});
