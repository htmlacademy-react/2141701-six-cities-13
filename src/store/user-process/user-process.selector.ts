import {NameSpace, AuthorizationStatus} from '../../constants';
import {RootState} from '../../types/state';

export const getAuthorizationStatus = (state: Pick<RootState, NameSpace.User>): AuthorizationStatus => state[NameSpace.User].authorizationStatus;
