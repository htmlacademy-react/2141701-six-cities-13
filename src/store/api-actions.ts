import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';

import { redirectToRoute} from '../store/action';
import { AppDispatch, RootState } from '../types/state';
import {saveToken, dropToken} from '../services/token';
import {APIRoute} from '../constants';
import {UserData} from '../types/user-data';
import {AuthData} from '../types/auth-data';
import {Offer} from '../types/offer';
import { AppRoute } from './../constants';
import { Comment, Review } from '../types/review';
import { setUserEmail } from './user-process/user-process.slice';

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}
>(
  'user/login',
  async ({email, password}, {dispatch, extra: api}) => {
    const {data} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(data.token);

    dispatch(setUserEmail(data.email));
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
  async (_arg, {extra: api}) => {
     await api.get<UserData>(APIRoute.Login);
    // dispatch(setUserEmail(email));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}
>(
  'user/logout',
  async (_arg, {extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  },
);

export const fetchOffersData = createAsyncThunk<Offer[], undefined, {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}
>(
  'data/getOffersData',
  async (_arg, {extra: api}) => {
  const {data} = await api.get<Offer[]>(APIRoute.Offers);
  return data;
  },
);

export const fetchOfferData = createAsyncThunk<Offer, string, {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}
>(
  'data/getOfferData',
  async (id, {extra: api}) => {
      const {data} = await api.get<Offer>(`${APIRoute.Offers}/${id}`);
     return data;
  },
);

export const fetchOffersNearby = createAsyncThunk<Offer[], string, {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}
>(
  'data/getOffersNearbyData',
  async (id, {extra: api}) => {
      const {data} = await api.get<Offer[]>(`${APIRoute.Offers}/${id}/nearby`);
     return data;
  }
);

export const fetchReviewsData = createAsyncThunk<Review[], string, {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}
>(
  'data/getComments',
  async (id, {extra: api}) => {
    const {data} = await api.get<Review[]>(`${APIRoute.Comments}/${id}`);
   return data;
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
     await api.post(`${APIRoute.Comments}/${id}`, {rating, comment});
   dispatch(fetchReviewsData(id));
  },
);

export const fetchFavorites = createAsyncThunk<Offer[], undefined, {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}
>(
  'data/getFavorites',
  async (_arg, {extra: api}) => {
  const {data} = await api.get<Offer[]>(APIRoute.Favorite);
 return data;
  },
);

export const fetchFavoritesAction = createAsyncThunk<Offer, {status: string; id: string}, {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}
>(
  'data/postFavorite',
  async ({status, id}, {extra: api}) => {
    const {data} = await api.post<Offer>(`${APIRoute.Favorite}/${id}/${status}`);
    return data;
  },
);
