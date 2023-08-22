import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {UserInitialState} from '../../types/initialState';
import {AuthorizationStatus, NameSpace} from '../../constants';
import {loginAction, checkAuthAction, logoutAction} from '../api-actions';

const initialState: UserInitialState = {
  authorizationStatus: AuthorizationStatus.Unknown,
  userEmail: null
};

export const userProcess = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {
    setUserEmail: (state, action: PayloadAction<string>) => {
      state.userEmail = action.payload;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(loginAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(loginAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(checkAuthAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.userEmail = null;
      });
  }
});

export const {setUserEmail} = userProcess.actions;
