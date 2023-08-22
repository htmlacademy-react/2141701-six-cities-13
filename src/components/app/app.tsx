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
import { useAppDispatch, useAppSelector} from '../../hooks';
import { checkAuthAction, fetchOffersData } from '../../store/api-actions';
import {getAuthorizationStatus} from '../../store/user-process/user-process.selector';
import ErrorPage from '../../pages/error-page/error-page';
import { ErrorLoading } from '../../store/offers-process/offers-process.selector';

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const hasError = useAppSelector(ErrorLoading);

  useEffect(() => {
    dispatch(fetchOffersData());
    dispatch(checkAuthAction());
   }, [dispatch]);

if(hasError) {
  return <ErrorPage/>;
}
  return (
    <>
    <ScrollToTop/>
    <Routes>
      <Route path={AppRoute.Main} element={<WelcomePage authorizationStatus={authorizationStatus}/>}/>
      <Route path={AppRoute.Login} element={<LoginPage/>}/>
      <Route path={AppRoute.Favorites} element={
      <PrivateRoute authorizationStatus={authorizationStatus}>
        <FavoritesPage />
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
