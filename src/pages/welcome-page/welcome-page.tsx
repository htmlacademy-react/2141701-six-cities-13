import { useState } from 'react';

import CardList from '../../components/card-list/card-list';
import Map from '../../components/map/map';
import HeaderNavigation from '../../components/header-navigation/header-navigation';
import Header from '../../components/header/header';
import {Offer, Point} from '../../types/offer';
import {City} from '../../types/city';

type WelcomePageProps = {
  allCityList: string[];
  sortTypePlace: string[];
  offers: Offer[];
  city: City;
};

function WelcomePage({ allCityList, sortTypePlace, offers, city}: WelcomePageProps): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selectedPoint, setSelectedPoint] = useState<Point | undefined>(
    undefined
  );
  const points = offers.map(({id, coordinates}) => ({id, coordinates}));

  return (
    <div className="page page--gray page--main">
      <Header>
        <HeaderNavigation/>
      </Header>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              {allCityList.map((item) => (
                <li key={item} className="locations__item">
                  <a className="locations__item-link tabs__item" href="#">
                    <span>{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">312 places to stay in Amsterdam</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width={7} height={4}>
                    <use xlinkHref="#icon-arrow-select" />
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  {sortTypePlace.map((item) => (<li key={item}
                    className="places__option places__option--active"
                    tabIndex={0}
                                                >
                    {item}
                                                </li>))}
                </ul>
              </form>
              <div className="cities__places-list places__list tabs__content">
                <CardList offers={offers} cardNameClass={'cities'}/>
              </div>
            </section>
            <div className="cities__right-section">
             <Map city={city} points={points} selectedPoint={selectedPoint} mapClassName={'cities__map'}/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default WelcomePage;
