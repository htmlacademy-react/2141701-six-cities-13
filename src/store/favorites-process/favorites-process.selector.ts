import {NameSpace} from '../../constants';
import {Offer} from '../../types/offer';
import {RootState} from '../../types/state';

export const getFavoritesData = (state: RootState): Offer[] => state[NameSpace.Favorites].favorites;
export const LoadingData = (state: RootState): boolean => state[NameSpace.Favorites].isLoadingData;

