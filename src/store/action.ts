import {createAction} from '@reduxjs/toolkit';

import { AuthorizationStatus, AppRoute } from './../constants';
import {Offer} from '../types/offer';
import {Review} from '../types/review';
import { City } from '../types/city';

export const changeCity = createAction<City>('changeCity');
export const changeSortTask = createAction<string>('changeSortTask');
export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
export const getOffersData = createAction<Offer[]>('data/getOffers');
export const setDataLoading = createAction<boolean>('isLoading');
export const getOfferData = createAction<Offer>('data/offer');
export const getOffersNearbyData = createAction<Offer[]>('data/offersNearby');
export const getReviewsData = createAction<Review[]>('data/reviewsData');
export const redirectToRoute = createAction<AppRoute>('redirectToRoute');
export const getUserEmail = createAction<string>('user/userEmail');
