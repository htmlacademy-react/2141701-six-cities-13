import {NameSpace, SORT_TYPE_PLACE} from '../../constants';
import {Offer} from '../../types/offer';
import {City} from '../../types/city';
import {RootState} from '../../types/state';

export const getCurrentCity = (state: RootState): City => state[NameSpace.Offers].currentCity;
export const getAllOffers = (state: RootState): Offer[] => state[NameSpace.Offers].offers;
export const getCurrentSortTask = (state: RootState): typeof SORT_TYPE_PLACE[0] => state[NameSpace.Offers].currentTaskSort;
export const getAllSortTask = (state: RootState): typeof SORT_TYPE_PLACE => state[NameSpace.Offers].taskSort;
export const LoadingData = (state: RootState): boolean => state[NameSpace.Offers].isLoadingData;

