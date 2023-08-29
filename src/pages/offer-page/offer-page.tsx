import { Helmet } from 'react-helmet-async';

import HeaderNavigation from '../../components/header-navigation/header-navigation';
import Header from '../../components/header/header';
import Map from '../../components/map/map';
import Form from '../../components/form/form';
import ReviewList from '../../components/review-list/review-list';
import CardList from '../../components/card-list/card-list';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useParams } from 'react-router-dom';
import {fetchOfferData, fetchOffersNearby, fetchReviewsData} from '../../store/api-actions';
import { useEffect} from 'react';
import {Offer} from '../../types/offer';
import Preloader from '../../components/preloader/preloader';
import { AuthorizationStatus, capitalize, getRandomObjects } from '../../constants';
import ButtonBookmark from '../../components/button-bookmark/button-bookmark';
import {ButtonSettingOfferItem} from '../../constants';
import {getCurrentOffer, LoadingData} from '../../store/offer-process/offer-process.select';
import {getOffersNearby} from '../../store/offers-nearby-process/offers-nearby-process.selector';
import {getCurrentSortTask, getCurrentCity} from '../../store/offers-process/offers-process.selector';
import {getAuthorizationStatus} from '../../store/user-process/user-process.selector';
import {getCurrentReviews} from '../../store/review-process/review-process.selector';


function OfferPage(): JSX.Element {
const offer = useAppSelector(getCurrentOffer);
const currentOffers = useAppSelector(getOffersNearby);
const currentSortTask = useAppSelector(getCurrentSortTask);
const currentCity = useAppSelector(getCurrentCity);
const authorizationStatus = useAppSelector(getAuthorizationStatus);
const reviews = useAppSelector(getCurrentReviews);
const isLoadingData = useAppSelector(LoadingData);

const randomArrayElements = getRandomObjects(currentOffers);
const currentArray = [...randomArrayElements, offer] as Offer[];

const dispatch = useAppDispatch();
const {id} = useParams();


useEffect(() => {
  if(id) {
   dispatch(fetchOfferData(id));
  dispatch(fetchOffersNearby(id));
  dispatch(fetchReviewsData(id));
  }
}, [id, dispatch]);

if (isLoadingData) {
  return <Preloader/>;
}

  return (
    <div className="page">
      <Helmet>
      <title>6 cities:{`${offer?.title ?? 'Offer'}`} </title>
      </Helmet>
      <Header>
        <HeaderNavigation/>
      </Header>
      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {offer?.images.map((item) => (<div key={item} className="offer__image-wrapper">
                <img
                  className="offer__image"
                  src={item}
                  alt="Photo studio"
                />
                                            </div>))}
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {offer?.isPremium &&
              <div className="offer__mark">
              <span>Premium</span>
              </div>}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
             {offer?.title}
                </h1>
                <ButtonBookmark buttonSetting={ButtonSettingOfferItem} offer={offer}/>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{ width: `${offer?.rating * 100 / 5}%` }} />
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{offer?.rating}</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">{capitalize(offer?.type)}</li>
                <li className="offer__feature offer__feature--bedrooms">
              {offer?.bedrooms} Bedrooms
                </li>
                <li className="offer__feature offer__feature--adults">
              Max {offer?.maxAdults} adults
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">{offer?.price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {offer?.goods.map((item) => <li key={item} className="offer__inside-item">{item}</li>)}
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                    <img
                      className="offer__avatar user__avatar"
                      src={offer?.host.avatarUrl}
                      width={74}
                      height={74}
                      alt="Host avatar"
                    />
                  </div>
                  <span className="offer__user-name">{offer?.host.name}</span>
                  <span className="offer__user-status">{offer?.host.isPro ? 'Pro' : ''}</span>
                </div>
                <div className="offer__description">
                  <p className="offer__text">
               {offer?.description}
                  </p>
                </div>
              </div>
              <ReviewList reviews={reviews}>
                {authorizationStatus === AuthorizationStatus.Auth && <Form offerId={id}/>}
              </ReviewList >
            </div>
          </div>
          <Map currentOffers={currentArray} selectedPoint={offer} currentCity={currentCity} mapClassName={'offer__map'} />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
          Other places in the neighbourhood
            </h2>
            <div className="near-places__list places__list">
             <CardList currentOffers={randomArrayElements} currentSortTask={currentSortTask} cardNameClass={'near-places'} />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default OfferPage;
