import {createAction} from '@reduxjs/toolkit';

import { AuthorizationStatus, AppRoute } from './../constants';
import {Offers} from '../types/offer';
import { City } from '../types/city';

export const changeCity = createAction<City>('changeCity');
export const changeSortTask = createAction<string>('changeSortTask');
export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
export const getOffersData = createAction<Offers>('data/getOffers');
export const setDataLoading = createAction<boolean>('data/isLoading');
export const redirectToRoute = createAction<AppRoute>('redirectToRoute');
