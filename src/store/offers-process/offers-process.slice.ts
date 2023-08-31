import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import {OffersInitialState, } from '../../types/initialState';
import {NameSpace, SORT_TYPE_PLACE, CITIES} from '../../constants';
import {City} from '../../types/city';
import {fetchOffersData, fetchFavoritesAction} from '../api-actions';

const initialState: OffersInitialState = {
  currentCity: CITIES[0],
  currentTaskSort: SORT_TYPE_PLACE[0],
  offers: [],
  taskSort: SORT_TYPE_PLACE,
  isLoadingData: false,
  hasError: false,
};

export const offersProcess = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {
    changeCity: (state, action: PayloadAction<City>) => {
      state.currentCity = action.payload;
    },
    changeSettingSort: (state, action: PayloadAction<string>) => {
      state.currentTaskSort = action.payload;
    }
  },
  extraReducers(builder) {
    builder
    .addCase(fetchOffersData.pending, (state) => {
      state.isLoadingData = true;
      state.hasError = false;
    })
    .addCase(fetchOffersData.fulfilled, (state, action) => {
      state.offers = action.payload;
      state.isLoadingData = false;
    })
    .addCase(fetchOffersData.rejected, (state) => {
      state.offers = [];
      state.isLoadingData = false;
      state.hasError = true;
    })
    .addCase(fetchFavoritesAction.fulfilled, (state, action) => {
      state.offers = state.offers.map((offer) =>
        offer.id === action.payload?.id ? action.payload : offer
      );
    });

  }
});

export const {changeCity, changeSettingSort} = offersProcess.actions;
