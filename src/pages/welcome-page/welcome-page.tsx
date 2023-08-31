import { useState } from 'react';
import {useEffect} from 'react';

import {useAppSelector, useAppDispatch} from '../../hooks/index';
import CardList from '../../components/card-list/card-list';
import Map from '../../components/map/map';
import HeaderNavigation from '../../components/header-navigation/header-navigation';
import Header from '../../components/header/header';
import CityList from '../../components/city-list/city-list';
import SortedItems from '../../components/sorted-items/sorted-items';
import {Offer} from '../../types/offer';
import Preloader from '../../components/preloader/preloader';
import {setLoadingData, getAllSortTask, getCurrentSortTask, getAllOffers, getCurrentCity} from '../../store/offers-process/offers-process.selector';
import MainEmptyPage from '../main-empty-page/main-empty-page';
import {AuthorizationStatus, getLengthArrayOffers, modifyOffers} from '../../constants';
import {fetchOffersData } from '../../store/api-actions';
import {getAuthorizationStatus} from '../../store/user-process/user-process.selector';

function WelcomePage(): JSX.Element {
 const [currentOffer, setCurrentOffer] = useState<Offer | undefined>(undefined);
 const dispatch = useAppDispatch();

 const authorizationStatus = useAppSelector(getAuthorizationStatus);

  const currentCity = useAppSelector(getCurrentCity);
  const allOffers = useAppSelector(getAllOffers);
  const filteredOffers = allOffers.filter((item) => item.city.name === currentCity.name);
  const currentOffers = modifyOffers(filteredOffers);
  const currentSortTask = useAppSelector(getCurrentSortTask);
  const allSortTask = useAppSelector(getAllSortTask);

  const onHoverCurrentCard = (offerId: string | undefined) => {
    const card = currentOffers.find((item) => item.id === offerId);
    setCurrentOffer(card);
  };

  useEffect(() => {
    dispatch(fetchOffersData());
   }, [dispatch]);

  const isLoadingData = useAppSelector(setLoadingData);

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
              <b className="places__found">{getLengthArrayOffers(currentOffers, currentCity)}</b>
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
