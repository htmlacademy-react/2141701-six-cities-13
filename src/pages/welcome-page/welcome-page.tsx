import {useAppSelector} from '../../hooks/index';
import { useState } from 'react';

import CardList from '../../components/card-list/card-list';
import Map from '../../components/map/map';
import HeaderNavigation from '../../components/header-navigation/header-navigation';
import Header from '../../components/header/header';
import CityList from '../../components/city-list/city-list';
import SortedItems from '../../components/sorted-items/sorted-items';
import {Offer} from '../../types/offer';

function WelcomePage(): JSX.Element {
 const [currentOffer, setCurrentOffer] = useState<Offer | undefined>(undefined);

  const currentCity = useAppSelector((state) => state.currentCity);
  const allOffers = useAppSelector((state) => state.offers);
  const currentOffers = allOffers.filter((item) => item.city.title === currentCity);

  const currentSortTask = useAppSelector((state) => state.currentTaskSort);
  const allSortTask = useAppSelector((state) => state.taskSort);

  const onHoverCurrentCard = (offerId: string | undefined) => {
    const card = currentOffers.find((offer) => offer.id === offerId);
    setCurrentOffer(card);
  };

  return (
    <div className="page page--gray page--main">
      <Header>
        <HeaderNavigation/>
      </Header>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <CityList currentCity={currentCity}/>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{currentOffers.length} places to stay in {currentCity}</b>
              <SortedItems allSortTask={allSortTask} currentSortTask={currentSortTask}/>
              <div className="cities__places-list places__list tabs__content">
                <CardList onHoverCurrentCard={onHoverCurrentCard} currentSortTask={currentSortTask} currentOffers={currentOffers} cardNameClass={'cities'}/>
              </div>
            </section>
            <div className="cities__right-section">
             <Map currentOffers={currentOffers} selectedPoint={currentOffer} mapClassName={'cities__map'}/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default WelcomePage;
