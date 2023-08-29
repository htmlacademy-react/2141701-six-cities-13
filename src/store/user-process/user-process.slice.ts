import { createSlice } from '@reduxjs/toolkit';

import {UserInitialState} from '../../types/initialState';
import {AuthorizationStatus, NameSpace} from '../../constants';
import {loginAction, checkAuthAction, logoutAction} from '../api-actions';
import { getUserEmail } from '../../services/userEmail';

const initialState: UserInitialState = {
  authorizationStatus: AuthorizationStatus.Unknown,
  email: getUserEmail()
};

export const userProcess = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {
  },
  extraReducers(builder) {
    builder
      .addCase(loginAction.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.email = action.payload.email;
      })
      .addCase(loginAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(checkAuthAction.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.email = action.payload.email;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.email = null;
      });
  }
});
