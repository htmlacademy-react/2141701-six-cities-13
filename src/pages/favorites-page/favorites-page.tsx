import { Helmet } from 'react-helmet-async';

import HeaderNavigation from '../../components/header-navigation/header-navigation';
import Header from '../../components/header/header';
import { useAppSelector } from '../../hooks';
import Footer from '../../components/footer/footer';
import FavoriteItem from '../../components/favorite-item/favorite-item';
import { getFavoritesData, LoadingData } from '../../store/favorites-process/favorites-process.selector';
import FavoritesEmpty from '../../components/favorites-empty/favorites-empty';
import Preloader from '../../components/preloader/preloader';

function FavoritesPage() {
  const favoritesOffer = useAppSelector(getFavoritesData);
  const isDataLoadingFavorites = useAppSelector(LoadingData);

  if(isDataLoadingFavorites) {
   return <Preloader/>;
  }

  // const dispatch = useAppDispatch();

  // useEffect(() => {
  //   dispatch(fetchFavorites());
  // }, [dispatch]);

  return (
    favoritesOffer.length ? (
      <div className="page">
      <Helmet>
      <title>6 cities: favorites</title>
      </Helmet>
      <Header>
        <HeaderNavigation />
      </Header>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {favoritesOffer.map((offer) => <FavoriteItem key={offer.id} offer={offer}/>)}
            </ul>
          </section>
        </div>
      </main>
  <Footer/>
      </div>
    )
    : <FavoritesEmpty/>
  );


}

export default FavoritesPage;
