import { createSlice } from '@reduxjs/toolkit';

import {NameSpace} from '../../constants';
import {fetchOfferData, fetchFavoritesAction} from '../api-actions';
import {OfferInitialState} from '../../types/initialState';

const initialState: OfferInitialState = {
  offer: undefined,
  isLoadingData: false,
};

export const offerProcess = createSlice({
  name: NameSpace.Offer,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOfferData.pending, (state) => {
        state.isLoadingData = true;
      })
      .addCase(fetchOfferData.fulfilled, (state, action) => {
        state.offer = action.payload;
        state.isLoadingData = false;
      })
      .addCase(fetchFavoritesAction.fulfilled, (state) => {
        if(state.offer){
          state.offer = {...state.offer,
            isFavorite: !state.offer.isFavorite
          };
        }
      });
  }
});
