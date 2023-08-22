import { combineReducers } from '@reduxjs/toolkit';

import {NameSpace} from '../constants';
import {favoritesProcess} from './favorites-process/favorites-process.slice';
import {offerProcess} from './offer-process/offer-process.slice';
import {offersNearbyProcess} from './offers-nearby-process/offers-nearby-process.slice';
import {offersProcess} from './offers-process/offers-process.slice';
import {reviewProcess} from './review-process/review-process.slice';
import {userProcess} from './user-process/user-process.slice';

export const rootReducer = combineReducers({
  [NameSpace.Comments]: reviewProcess.reducer,
  [NameSpace.Favorites]: favoritesProcess.reducer,
  [NameSpace.Offer]: offerProcess.reducer,
  [NameSpace.OfferNearby]: offersNearbyProcess.reducer,
  [NameSpace.Offers]: offersProcess.reducer,
  [NameSpace.User]: userProcess.reducer,
});
