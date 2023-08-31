import { Review } from '../types/review';
import { Offer } from './../types/offer';
import { AuthorizationStatus } from './../constants';
import {SORT_TYPE_PLACE} from '../constants';
import {City} from '../types/city';

type InitialState = {
  currentCity: City;
  currentTaskSort: typeof SORT_TYPE_PLACE[0];
  offer: Offer | undefined;
  offers: Offer[];
  offersNearby: Offer[];
  reviews: Review[];
  taskSort: typeof SORT_TYPE_PLACE;
  authorizationStatus: AuthorizationStatus;
  isLoadingData: boolean;
  userEmail: string | null;
  favorites: Offer[];
  hasError: boolean;
  email: string | null;
};

export type FavoritesInitialState = Pick<InitialState, 'favorites'>;
export type OfferInitialState = Pick<InitialState, 'offer' | 'isLoadingData'>;
export type OffersNearbyInitialState = Pick<InitialState, 'offersNearby'>;
export type OffersInitialState = Pick<InitialState, 'currentCity' | 'isLoadingData' | 'currentTaskSort' | 'offers' | 'taskSort' | 'hasError'>;
export type ReviewsInitialState = Pick<InitialState, 'reviews' | 'isLoadingData'>;
export type UserInitialState = Pick<InitialState, 'authorizationStatus' | 'email'>;


