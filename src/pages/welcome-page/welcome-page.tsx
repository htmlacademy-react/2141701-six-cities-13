import { useState } from 'react';

import {useAppSelector} from '../../hooks/index';
import CardList from '../../components/card-list/card-list';
import Map from '../../components/map/map';
import HeaderNavigation from '../../components/header-navigation/header-navigation';
import Header from '../../components/header/header';
import CityList from '../../components/city-list/city-list';
import SortedItems from '../../components/sorted-items/sorted-items';
import {Offer} from '../../types/offer';
import Preloader from '../../components/preloader/preloader';
import {LoadingData, getAllSortTask, getCurrentSortTask, getAllOffers, getCurrentCity} from '../../store/offers-process/offers-process.selector';
import MainEmptyPage from '../main-empty-page/main-empty-page';
import {AuthorizationStatus} from '../../constants';

type WelcomePageProps = {
  authorizationStatus: AuthorizationStatus;
}

function WelcomePage({authorizationStatus}: WelcomePageProps): JSX.Element {
 const [currentOffer, setCurrentOffer] = useState<Offer | undefined>(undefined);

  const currentCity = useAppSelector(getCurrentCity);
  const allOffers = useAppSelector(getAllOffers);
  const currentOffers = allOffers.filter((item) => item.city.name === currentCity.name);
  const currentSortTask = useAppSelector(getCurrentSortTask);
  const allSortTask = useAppSelector(getAllSortTask);

  const onHoverCurrentCard = (offerId: string | undefined) => {
    const card = currentOffers.find((item) => item.id === offerId);
    setCurrentOffer(card);
  };

  const isLoadingData = useAppSelector(LoadingData);

  if (authorizationStatus === AuthorizationStatus.Unknown || isLoadingData) {
    return (
      <Preloader/>
    );
  }

  return (
    <div>
    {allOffers.length ?
      (<div className="page page--gray page--main">
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
              <b className="places__found">{currentOffers.length} places to stay in {currentCity.name}</b>
              <SortedItems allSortTask={allSortTask} currentSortTask={currentSortTask}/>
              <div className="cities__places-list places__list tabs__content">
                <CardList onHoverCurrentCard={onHoverCurrentCard} currentSortTask={currentSortTask} currentOffers={currentOffers} cardNameClass={'cities'}/>
              </div>
            </section>
            <div className="cities__right-section">
             <Map currentOffers={currentOffers} selectedPoint={currentOffer} mapClassName={'cities__map'} currentCity={currentCity}/>
            </div>
          </div>
        </div>
      </main>
       </div>)
      : <MainEmptyPage/>}
    </div>
  );
}

export default WelcomePage;
