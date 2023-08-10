import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';

import {requireAuthorization, getOffersData, setDataLoading, redirectToRoute,
getOfferData, getOffersNearbyData, getReviewsData, getUserEmail} from '../store/action';
import { AppDispatch, RootState } from '../types/state';
import {saveToken, dropToken} from '../services/token';
import {APIRoute, AuthorizationStatus} from '../constants';
import {UserData} from '../types/user-data';
import {AuthData} from '../types/auth-data';
import {Offer} from '../types/offer';
import { AppRoute } from './../constants';
import { Comment, Review } from '../types/review';

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
    const {data: {email}} = await api.get<UserData>(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
      dispatch(getUserEmail(email));
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
  const {data} = await api.get<Offer[]>(APIRoute.Offers);
  dispatch(getOffersData(data));
  dispatch(setDataLoading(false));
  },
);

export const fetchOfferData = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}
>(
  'data/getOfferData',
  async (id, {dispatch, extra: api}) => {
    // dispatch(setDataLoading(true));
    try {
      const {data} = await api.get<Offer>(`${APIRoute.Offers}/${id}`);
     dispatch(getOfferData(data));
    // dispatch(setDataLoading(false));
    }catch {
      // dispatch(setDataLoading(false));
      dispatch(redirectToRoute(AppRoute.NotFound));
    }
  },
);

export const fetchOffersNearby = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}
>(
  'data/getOfferData',
  async (id, {dispatch, extra: api}) => {
      const {data} = await api.get<Offer[]>(`${APIRoute.Offers}/${id}/nearby`);
     dispatch(getOffersNearbyData(data));
  }
);

export const fetchReviewsData = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}
>(
  'data/getComments',
  async (id, {dispatch, extra: api}) => {
    const {data} = await api.get<Review[]>(`${APIRoute.Comments}/${id}`);
   dispatch(getReviewsData(data));
  },
);

export const fetchPostReview = createAsyncThunk<void, Comment, {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}
>(
  'data/postComment',
  async ({id, rating, comment}, {dispatch, extra: api}) => {
     await api.post<Comment>(`${APIRoute.Comments}/${id}`, {rating, comment});
   dispatch(fetchReviewsData(id));
  },
);

