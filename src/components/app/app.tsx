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

type AppScreenProps = {
  allCityList: string[];
  sortTypePlace: string[];
};

function App({ allCityList, sortTypePlace }: AppScreenProps): JSX.Element {
  return (
    <>
    <ScrollToTop/>
    <Routes>
      <Route path={AppRoute.Main} element={<WelcomePage allCityList={allCityList} sortTypePlace={sortTypePlace} />}/>
      <Route path={AppRoute.Login} element={<LoginPage/>}/>
      <Route path={AppRoute.Favorites} element={
      <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
        <FavoritesPage/>
      </PrivateRoute>
      }
      />
      <Route path={`${AppRoute.Offer}/:id`} element={<OfferPage/>}/>
      <Route path={AppRoute.NotFound} element={<NotFoundPage/>}/>
    </Routes>
    </>

  );
}

export default App;
