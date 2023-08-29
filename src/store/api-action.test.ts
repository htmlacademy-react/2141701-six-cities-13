import {configureMockStore} from '@jedmao/redux-mock-store';
import MockAdapter from 'axios-mock-adapter';

import { idMock, makeFakeOffers, makeFakeOffer, makeFakeNearOffers, makeFakeReviews} from './../utils/mocks';
import { AuthData } from './../types/auth-data';
import { APIRoute } from './../constants';
import { checkAuthAction, fetchOffersData, loginAction, fetchOfferData, fetchOffersNearby, fetchFavorites, fetchReviewsData } from './api-actions';
import { RootState } from './../types/state';
import { AppThunkDispatch, extractActionsTypes } from '../utils/mocks';
import { createApi } from './../services/api';
import thunk from 'redux-thunk';
import { Action } from 'redux';
import * as tokenStorage from '../services/token';

describe('Async actions', () => {
  const axios = createApi();
  const mockAxiosAdapter = new MockAdapter(axios);
  const middleware = [thunk.withExtraArgument(axios)];
  const mockStoreCreator = configureMockStore<RootState, Action<string>, AppThunkDispatch>(middleware);
  let store: ReturnType<typeof mockStoreCreator>;

  beforeEach(() => {
    store = mockStoreCreator({ DATA: { offers: [] }});
  });

  describe('checkAuthAction', () => {
    it('should dispatch "checkAuthAction.pending" and "checkAuthAction.fulfilled" with thunk "checkAuthAction', async () => {
      mockAxiosAdapter.onGet(APIRoute.Login).reply(200);
      await store.dispatch(checkAuthAction());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([checkAuthAction.pending.type,
        checkAuthAction.fulfilled.type
      ]);
    });
  });

  it('should dispatch "checkAuthAction.pending" and "checkAuthAction.rejected" when server response 400', async () => {
    mockAxiosAdapter.onGet(APIRoute.Login).reply(400);

    await store.dispatch(checkAuthAction());
    const actions = extractActionsTypes(store.getActions());

    expect(actions).toEqual([
      checkAuthAction.pending.type,
      checkAuthAction.rejected.type,
    ]);
  });


  describe('fetchOfferData', () => {

    it('should dispatch "fetchOfferData.pending", "fetchOfferData.fulfilled", when server response 200', async () => {
      const mockOffer = makeFakeOffer();
      const id = idMock;
      mockAxiosAdapter.onGet(`${APIRoute.Offers}/${id}`).reply(200, mockOffer);

      await store.dispatch(fetchOfferData(id));

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const fetchOfferActionFulfilled = emittedActions.at(1) as ReturnType<typeof fetchOfferData.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        fetchOfferData.pending.type,
        fetchOfferData.fulfilled.type,
        ]);

      expect(fetchOfferActionFulfilled.payload).toEqual(mockOffer);

      });
  });

  it('should dispatch "fetchOfferData.pending", "fetchOfferData.rejected", when server response 400', async () => {
    const id = idMock;
    mockAxiosAdapter.onGet(`${APIRoute.Offers}/${id}`).reply(400, []);

    await store.dispatch(fetchOfferData(id));
    const actions = extractActionsTypes(store.getActions());

    expect(actions).toEqual([
      fetchOfferData.pending.type,
      fetchOfferData.rejected.type,
      ]);
    });

  describe('fetchOffersData', () => {

    it('should dispatch "fetchOffersAction.pending", "fetchOffersAction.fulfilled", when server response 200', async () => {
      const mockOffers = makeFakeOffer();
      mockAxiosAdapter.onGet(APIRoute.Offers).reply(200, mockOffers);

      await store.dispatch(fetchOffersData());

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const fetchOffersActionFulfilled = emittedActions.at(1) as ReturnType<typeof fetchOffersData.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        fetchOffersData.pending.type,
        fetchOffersData.fulfilled.type,
        ]);

      expect(fetchOffersActionFulfilled.payload).toEqual(mockOffers);

      });
  });

  it('should dispatch "fetchOffersAction.pending", "fetchOffersAction.rejected", when server response 400', async () => {

    mockAxiosAdapter.onGet(APIRoute.Offers).reply(400, []);

    await store.dispatch(fetchOffersData());
    const actions = extractActionsTypes(store.getActions());

    expect(actions).toEqual([
      fetchOffersData.pending.type,
      fetchOffersData.rejected.type,
      ]);
    });

    describe('fetchOfferData', () => {

      it('should dispatch "fetchOfferData.pending", "fetchOfferData.fulfilled", when server response 200', async () => {
        const mockOffer = makeFakeOffer();
        const id = idMock;
        mockAxiosAdapter.onGet(`${APIRoute.Offers}/${id}`).reply(200, mockOffer);

        await store.dispatch(fetchOfferData(id));

        const emittedActions = store.getActions();
        const extractedActionsTypes = extractActionsTypes(emittedActions);
        const fetchOfferActionFulfilled = emittedActions.at(1) as ReturnType<typeof fetchOfferData.fulfilled>;

        expect(extractedActionsTypes).toEqual([
          fetchOfferData.pending.type,
          fetchOfferData.fulfilled.type,
          ]);

        expect(fetchOfferActionFulfilled.payload).toEqual(mockOffer);

        });
    });

    it('should dispatch "fetchOffersNearby.pending", "fetchOffersNearby.rejected", when server response 400', async () => {
      const mockOffer = makeFakeNearOffers();
      const id = idMock;
      mockAxiosAdapter.onGet(`${APIRoute.Offers}/${id}/nearby`).reply(200, mockOffer);

      await store.dispatch(fetchOffersNearby(id));

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const fetchOffersNearbyFulfilled = emittedActions.at(1) as ReturnType<typeof fetchOffersNearby.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        fetchOffersNearby.pending.type,
        fetchOffersNearby.fulfilled.type,
        ]);

      expect(fetchOffersNearbyFulfilled.payload).toEqual(mockOffer);

      });

    it('should dispatch "fetchOffersNearby.pending", "fetchOffersNearby.rejected", when server response 400', async () => {
      const id = idMock;
      mockAxiosAdapter.onGet(`${APIRoute.Offers}/${id}/nearby`).reply(400, []);

      await store.dispatch(fetchOffersNearby(id));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchOffersNearby.pending.type,
        fetchOffersNearby.rejected.type,
        ]);
      });

  describe('loginAction', () => {
    it('should dispatch "loginAction.pending", "redirectToRout", "loginAction.fulfilled" when server response 200', async() => {
      const fakeUser: AuthData = {email: 'test@test.ru', password: '123456'};
      const fakeServerReplay = {token: 'secret'};
      mockAxiosAdapter.onPost(APIRoute.Login).reply(200, fakeServerReplay);

      await store.dispatch(loginAction(fakeUser));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        loginAction.pending.type,
        loginAction.fulfilled.type,
      ]);

    });

    it('should call "saveToken" once with the received token', async() => {
      const fakeUser: AuthData = { email: 'test@test.ru', password: '123456' };
      const fakeServerReplay = { token: 'secret' };
      const mockSaveToken = vi.spyOn(tokenStorage, 'saveToken');

      await store.dispatch(loginAction(fakeUser));

      expect(mockSaveToken).toBeCalledTimes(1);
      expect(mockSaveToken).toBeCalledWith(fakeServerReplay.token);
    });
  });

  describe('fetchFavorites', () => {

    it('should dispatch "fetchFavorites.pending", "fetchFavorites.fulfilled", when server response 200', async () => {
      const mockFavorites = makeFakeOffers();

      mockAxiosAdapter.onGet(APIRoute.Favorite).reply(200, mockFavorites);

      await store.dispatch(fetchFavorites());

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const fetchFavoritesFulfilled = emittedActions.at(1) as ReturnType<typeof fetchFavorites.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        fetchFavorites.pending.type,
        fetchFavorites.fulfilled.type,
        ]);

      expect(fetchFavoritesFulfilled.payload).toEqual(mockFavorites);

      });
  });

  it('should dispatch "fetchFavorites.pending", "fetchFavorites.rejected", when server response 400', async () => {
    mockAxiosAdapter.onGet(APIRoute.Favorite).reply(400, []);

    await store.dispatch(fetchFavorites());
    const actions = extractActionsTypes(store.getActions());

    expect(actions).toEqual([
      fetchFavorites.pending.type,
      fetchFavorites.rejected.type,
      ]);
    });

    describe('fetchFavorites', () => {

      it('should dispatch "fetchReviewsData.pending", "fetchReviewsData.fulfilled", when server response 200', async () => {
        const mockReviews = makeFakeReviews();
        const id = idMock;

        mockAxiosAdapter.onGet(`${APIRoute.Comments}/${id}`).reply(200, mockReviews);

        await store.dispatch(fetchReviewsData(id));

        const emittedActions = store.getActions();
        const extractedActionsTypes = extractActionsTypes(emittedActions);
        const fetchReviewsFulfilled = emittedActions.at(1) as ReturnType<typeof fetchReviewsData.fulfilled>;

        expect(extractedActionsTypes).toEqual([
          fetchReviewsData.pending.type,
          fetchReviewsData.fulfilled.type,
          ]);

        expect(fetchReviewsFulfilled.payload).toEqual(mockReviews);

        });
    });

    it('should dispatch "fetchReviewsData.pending", "fetchReviewsData.rejected", when server response 400', async () => {
      const id = idMock;
      mockAxiosAdapter.onGet(`${APIRoute.Comments}/${id}`).reply(400, []);

      await store.dispatch(fetchReviewsData(id));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchReviewsData.pending.type,
        fetchReviewsData.rejected.type,
        ]);
      });
});
