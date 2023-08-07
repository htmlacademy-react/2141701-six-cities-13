import {Routes, Route} from 'react-router-dom';

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
import {City} from '../../types/city';
import {Reviews} from '../../types/review';
import { useAppSelector } from '../../hooks';
import Preloader from '../preloader/preloader';

type AppScreenProps = {
  offers: Offer[];
  city: City;
  reviews: Reviews;
};


function App({ offers, city, reviews }: AppScreenProps): JSX.Element {
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
      <Route path={AppRoute.Offer} element={<OfferPage offers={offers} reviews={reviews} city={city}/>}/>
      <Route path={AppRoute.NotFound} element={<NotFoundPage/>}/>
    </Routes>
    </>
  );
}

export default App;
