import { createSelector } from '@reduxjs/toolkit';

export const selectCurrentCity = state => state.currentCity;
export const selectAllOffers = state => state.offers;

export const selectOffersByFilter = createSelector(
  [selectAllOffers, selectCurrentCity],
  (allOffers, currentCity) => allOffers.filter((item) => item.city.title === currentCity)
);