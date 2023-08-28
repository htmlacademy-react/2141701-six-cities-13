import {NameSpace} from '../../constants';
import {Review} from '../../types/review';
import {RootState} from '../../types/state';

export const getCurrentReviews = (state: Pick<RootState, NameSpace.Comments>): Review[] => state[NameSpace.Comments].reviews;
export const LoadingData = (state: Pick<RootState, NameSpace.Comments>): boolean => state[NameSpace.Comments].isLoadingData;
