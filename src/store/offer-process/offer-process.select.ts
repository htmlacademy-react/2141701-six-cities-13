import {NameSpace} from '../../constants';
import {Offer} from '../../types/offer';
import {RootState} from '../../types/state';

export const getCurrentOffer = (state: RootState): Offer | undefined => state[NameSpace.Offer].offer;
export const setLoadingData = (state: RootState): boolean => state[NameSpace.Offer].isLoadingData;
