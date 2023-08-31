import { redirectToRoute } from './action';
import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';

import { AppDispatch, RootState } from '../types/state';
import {saveToken, dropToken} from '../services/token';
import {saveUserEmail, deleteUserEmail} from '../services/userEmail';
import {APIRoute, AppRoute} from '../constants';
import {UserData} from '../types/user-data';
import {AuthData} from '../types/auth-data';
import {Offer} from '../types/offer';
import { Comment, Review } from '../types/review';

export const loginAction = createAsyncThunk<UserData, AuthData, {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}
>(
  'user/login',
  async ({email, password}, {extra: api}) => {
    const {data} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(data.token);
    saveUserEmail(data.email);
    return data;
  },
);

export const checkAuthAction = createAsyncThunk<UserData, undefined, {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}
>(
  'user/checkAuth',
  async (_arg, {extra: api}) => {
    const { data } = await api.get<UserData>(APIRoute.Login);
    return data;
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
    deleteUserEmail();
    dispatch(redirectToRoute(AppRoute.Login));
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

export const fetchOfferData = createAsyncThunk<Offer | undefined, string, {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}
>(
  'data/getOfferData',
  async (id, {dispatch, extra: api}) => {
    try{
      const {data} = await api.get<Offer>(`${APIRoute.Offers}/${id}`);
     return data;
    }catch {
      dispatch(redirectToRoute(AppRoute.NotFound));
    }
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

export const fetchPostReview = createAsyncThunk<void, Comment & { onSuccess: () => void }, {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}
>(
  'data/postComment',
  async ({id, rating, comment, onSuccess }, {dispatch, extra: api}) => {
    try {
      await api.post(`${APIRoute.Comments}/${id}`, {rating, comment});
      onSuccess?.();

    } finally {
      dispatch(fetchReviewsData(id));
    }
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
