import { Helmet } from 'react-helmet-async';

import HeaderNavigation from '../../components/header-navigation/header-navigation';
import Header from '../../components/header/header';
import {Offer} from '../../types/offer';

type FavoritesPageProps = {
  offers: Offer[];
};

function FavoritesPage({offers}: FavoritesPageProps): JSX.Element {
  return (
    <div className="page">
      <Helmet>
      <title>6 cities: favorites</title>
      </Helmet>
      <Header>
        <HeaderNavigation/>
      </Header>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {offers.map ((offer) => (
                 <li key={offer.id} className="favorites__locations-items" >
                 <div className="favorites__locations locations locations--current">
                   <div className="locations__item">
                     <a className="locations__item-link" href="#">
                       {/* <span>{offer.location}</span> */}
                     </a>
                   </div>
                 </div>
                 <div className="favorites__places">
                   <article className="favorites__card place-card">
                   {offer.isPremium && <div className="place-card__mark">
                       <span>Premium</span>
                                       </div>}
                     <div className="favorites__image-wrapper place-card__image-wrapper">
                       <a href="#">
                         <img
                           className="place-card__image"
                          //  src={offer.image}
                           width={150}
                           height={110}
                           alt="Place image"
                         />
                       </a>
                     </div>
                     <div className="favorites__card-info place-card__info">
                       <div className="place-card__price-wrapper">
                         <div className="place-card__price">
                           <b className="place-card__price-value">€{offer.price}</b>
                           <span className="place-card__price-text">
                         /&nbsp;night
                           </span>
                         </div>
                         <button
                           className="place-card__bookmark-button place-card__bookmark-button--active button"
                           type="button"
                         >
                           <svg
                             className="place-card__bookmark-icon"
                             width={18}
                             height={19}
                           >
                             <use xlinkHref="#icon-bookmark" />
                           </svg>
                           <span className="visually-hidden">In bookmarks</span>
                         </button>
                       </div>
                       <div className="place-card__rating rating">
                         <div className="place-card__stars rating__stars">
                           <span style={{ width: '100%' }} />
                           <span className="visually-hidden">Rating</span>
                         </div>
                       </div>
                       <h2 className="place-card__name">
                         {/* <a href="#">{offer.name}</a> */}
                       </h2>
                       <p className="place-card__type">{offer.type}</p>
                     </div>
                   </article>
                 </div>
                 </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img
            className="footer__logo"
            src="img/logo.svg"
            alt="6 cities logo"
            width={64}
            height={33}
          />
        </a>
      </footer>
    </div>
  );


}

export default FavoritesPage;
