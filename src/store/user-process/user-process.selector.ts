import {NameSpace, AuthorizationStatus} from '../../constants';
import {RootState} from '../../types/state';

export const getAuthorizationStatus = (state: Pick<RootState, NameSpace.User>): AuthorizationStatus => state[NameSpace.User].authorizationStatus;
export const getEmailSelector = (state: Pick<RootState, NameSpace.User>): string | null => state[NameSpace.User].email;
