import {commerce, datatype, date, image, internet, lorem, address} from 'faker';

import { Offer } from '../types/offer';
import { User } from '../types/review';
import { City, Location } from '../types/city';
import { Review } from '../types/review';
import { AuthorizationStatus } from '../constants';
import { createApi } from '../services/api';
import { ThunkDispatch } from '@reduxjs/toolkit';
import {RootState} from '../types/state';
import {Action} from 'redux';
import { CITIES, SORT_TYPE_PLACE } from './../constants';

export type AppThunkDispatch = ThunkDispatch<RootState, ReturnType<typeof createApi>, Action>;
export const extractActionsTypes = (actions: Action<string>[]) => actions.map(({ type }) => type);

export const idMock = datatype.string();

export const makeFakeUser = (): User => ({
name: internet.userName(),
isPro: datatype.boolean(),
avatarUrl: image.avatar()
});

export const makeFakeLocation = (): Location => ({
  latitude: Number(address.latitude()),
  longitude: Number(address.longitude()),
  zoom: datatype.number(10)
});

export const makeFakeCity = (): City => ({
  name: address.cityName(),
  location: makeFakeLocation()
  });


export const makeFakeOffer = (): Offer => ({
  id: datatype.string(),
  title: lorem.words(5),
  type: lorem.word(1),
  price: datatype.number(),
  city: makeFakeCity(),
  location: makeFakeLocation(),
  isFavorite: datatype.boolean(),
  isPremium: datatype.boolean(),
  rating: datatype.number(5),
  previewImage: image.imageUrl(),
  description: lorem.words(),
bedrooms: datatype.number(4),
goods: [commerce.product()],
host: makeFakeUser(),
images: [image.imageUrl()],
maxAdults: datatype.number(4),
});

export const makeFakeOffers = (): Offer[] =>
  Array.from({ length: 8 }, makeFakeOffer);

export const makeFakeNearOffers = (): Offer[] =>
  Array.from({ length: 2 }, makeFakeOffer);

export const makeFakeReview = (): Review => ({
  id: datatype.string(),
  user: makeFakeUser(),
  rating: datatype.number(5),
  comment: lorem.sentence(),
  date: String(date.recent()),
});

export const makeFakeReviews = (): Review[] => Array.from({ length: 3 }, makeFakeReview);

export const makeFakeStore = (initialState?: Partial<RootState>): RootState => ({
  USER: { authorizationStatus: AuthorizationStatus.NoAuth, email: ''},
  OFFER: {offer: null, isLoadingData: false},
  OFFERS: { currentCity: CITIES[0], currentTaskSort: SORT_TYPE_PLACE[0], offers: [], taskSort: SORT_TYPE_PLACE, isLoadingData: false, hasError: false},
  OFFER_NEARBY: {isLoadingData: false, offersNearby: []},
  COMMENTS: {reviews: [], isLoadingData: false},
  FAVORITES: { favorites: [], isLoadingData: false},
  ...initialState ?? {},
});
