import {Routes, Route} from 'react-router-dom';
import {useEffect} from 'react';

import ScrollToTop from '../../components/scroll-to-top/scroll-to-top';
import WelcomePage from '../../pages/welcome-page/welcome-page';
import LoginPage from '../../pages/login-page/login-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import OfferPage from '../../pages/offer-page/offer-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import PrivateRoute from '../private-route/private-route';
import {AppRoute} from '../../constants';
import {AuthorizationStatus} from '../../constants';
import {Offer} from '../../types/offer';
import { useAppDispatch, useAppSelector } from '../../hooks';
import Preloader from '../preloader/preloader';
import { checkAuthAction, fetchOffersData } from '../../store/api-actions';

type AppScreenProps = {
  offers: Offer[];
};

function App({ offers }: AppScreenProps): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchOffersData());
    dispatch(checkAuthAction());
  }, [dispatch]);

  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const isLoadingData = useAppSelector((state) => state.isLoadingData);

  if (authorizationStatus === AuthorizationStatus.Unknown || isLoadingData) {
    return (
      <Preloader/>
    );
  }

  return (
    <>
    <ScrollToTop/>
    <Routes>
      <Route path={AppRoute.Main} element={<WelcomePage/>}/>
      <Route path={AppRoute.Login} element={<LoginPage/>}/>
      <Route path={AppRoute.Favorites} element={
      <PrivateRoute authorizationStatus={authorizationStatus}>
        <FavoritesPage offers={offers} />
      </PrivateRoute>
      }
      />
      <Route path={`${AppRoute.Offer}/:id`} element={<OfferPage />}/>
      <Route path={AppRoute.NotFound} element={<NotFoundPage/>}/>
    </Routes>
    </>
  );
}

export default App;
