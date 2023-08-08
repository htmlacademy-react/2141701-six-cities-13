import { AppRoute } from './../constants';
import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';

import {requireAuthorization, getOffersData, setDataLoading, redirectToRoute} from '../store/action';
import { AppDispatch, RootState } from '../types/state';
import {saveToken, dropToken} from '../services/token';
import {APIRoute, AuthorizationStatus} from '../constants';
import {UserData} from '../types/user-data';
import {AuthData} from '../types/auth-data';
import {Offers} from '../types/offer';

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}
>(
  'user/login',
  async ({email, password}, {dispatch, extra: api}) => {
    const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(redirectToRoute(AppRoute.Main));
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}
>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}
>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  },
);

export const fetchOffersData = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}
>(
  'data/getOffersData',
  async (_arg, {dispatch, extra: api}) => {
  dispatch(setDataLoading(true));
  const {data} = await api.get<Offers>(APIRoute.Offers);
  dispatch(getOffersData(data));
  dispatch(setDataLoading(false));
  },
);

