import { NameSpace } from './../../constants';
import { UserInitialState } from './../../types/initialState';
import { AuthorizationStatus } from '../../constants';
import { getAuthorizationStatus } from './user-process.selector';

describe('UserProcess selectors', () => {
  it('should return authorization status from state', () => {
    const authorizationStatus = AuthorizationStatus.Auth;
    const state: UserInitialState = {authorizationStatus};

    const result = getAuthorizationStatus({ [NameSpace.User]: state });

    expect(result).toBe(authorizationStatus);
  });
});
