import { Helmet } from 'react-helmet-async';
import {useEffect} from 'react';
import { Link } from 'react-router-dom';

import HeaderNavigation from '../../components/header-navigation/header-navigation';
import Header from '../../components/header/header';
import { useAppDispatch, useAppSelector } from '../../hooks';
import Footer from '../../components/footer/footer';
import FavoriteItem from '../../components/favorite-item/favorite-item';
import { getFavoritesData} from '../../store/favorites-process/favorites-process.selector';
import FavoritesEmpty from '../../components/favorites-empty/favorites-empty';
import { fetchFavorites } from '../../store/api-actions';

function FavoritesPage() {
  const favoritesOffers = useAppSelector(getFavoritesData);
  const dispatch = useAppDispatch();
  const citiesFavoriteOffers = new Set(favoritesOffers?.map((offer) => offer.city.name));

  useEffect(() => {
    dispatch(fetchFavorites());
  }, [dispatch]);

  return (
    favoritesOffers.length ? (
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
            {Array.from(citiesFavoriteOffers).map((city) =>(
              <li className="favorites__locations-items" key={city}>
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <Link className="locations__item-link" to={`/${city}`}>
                      <span>{city}</span>
                    </Link>
                  </div>
                </div>
                <div className="favorites__places">
                  {favoritesOffers.map((offer) =>city === offer.city.name ? <FavoriteItem key={offer.id} offer={offer}/> : '')}
                </div>
              </li>
            )
            )}
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
