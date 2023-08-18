import {NameSpace} from '../../constants';
import {Review} from '../../types/review';
import {RootState} from '../../types/state';

export const getCurrentReviews = (state: RootState): Review[] => state[NameSpace.Comments].reviews;
export const LoadingData = (state: RootState): boolean => state[NameSpace.Offer].isLoadingData;
