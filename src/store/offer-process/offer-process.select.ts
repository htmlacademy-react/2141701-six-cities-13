import {NameSpace} from '../../constants';
import {Offer} from '../../types/offer';
import {RootState} from '../../types/state';

export const getCurrentOffer = (state: RootState): Offer | null => state[NameSpace.Offer].offer;
export const LoadingData = (state: RootState): boolean => state[NameSpace.Offer].isLoadingData;
