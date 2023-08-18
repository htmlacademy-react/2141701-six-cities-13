import {NameSpace} from '../../constants';
import {Offer} from '../../types/offer';
import {RootState} from '../../types/state';

export const getOffersNearby = (state: RootState): Offer[] => state[NameSpace.OfferNearby].offersNearby;
export const LoadingData = (state: RootState): boolean => state[NameSpace.OfferNearby].isLoadingData;
