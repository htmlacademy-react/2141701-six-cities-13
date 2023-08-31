import {createSlice } from '@reduxjs/toolkit';

import {NameSpace} from '../../constants';
import {fetchFavorites, fetchFavoritesAction} from '../api-actions';
import {FavoritesInitialState} from '../../types/initialState';

const initialState: FavoritesInitialState = {
  favorites: [],
};

export const favoritesProcess = createSlice({
  name: NameSpace.Favorites,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
    .addCase(fetchFavorites.fulfilled, (state, action) => {
      state.favorites = action.payload;
    })
    .addCase(fetchFavoritesAction.fulfilled, (state, action) => {
        state.favorites = [...state.favorites, action.payload]
      .map((offer) => offer.id === action.payload.id ? action.payload : offer)
      .filter((offer) => offer.isFavorite);
    });
  }
});
