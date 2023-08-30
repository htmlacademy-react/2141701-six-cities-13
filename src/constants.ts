/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/no-empty-function */
import { BtnBookMarkSetting } from './types/bookmark-btn';
import {City} from './types/city';
import { Offer } from './types/offer';
import { Review } from './types/review';

export const SORT_TYPE_PLACE = [
  'Popular',
  'Price: low to high',
  'Price: high to low',
  'Top rated first',
];

export enum AppRoute {
  Login = '/login',
  Main = '/',
  Favorites = '/favorites',
  Offer = '/offer',
  NotFound = '*'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'Unknown',
}

export enum APIRoute {
  Login = '/login',
  Logout = '/logout',
  Offers = '/offers',
  Favorite = '/favorite',
  Comments = '/comments'
}

export const makeScrollMock = window.scrollTo = () => {};

export const URL_MARKER_DEFAULT =
'img/pin.svg';

export const URL_MARKER_CURRENT =
'img/pin-active.svg';

export enum ReviewLength {
  Min = 50,
  Max = 300
}

  export const CITIES: City[] = [
    {
      name: 'Paris',
      location: {
        latitude: 48.864716,
        longitude: 2.349014,
        zoom: 12,
      },
    },
    {
      name: 'Cologne',
      location: {
        latitude: 50.935173,
        longitude: 6.953101,
        zoom: 12,
      },
    },
    {
      name: 'Brussels',
      location: {
        latitude: 50.8505,
        longitude: 4.3488,
        zoom: 12,
      },
    },
    {
      name: 'Amsterdam',
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 12,
      },
    },
    {
      name: 'Hamburg',
      location: {
        latitude: 53.551086,
        longitude: 9.993682,
        zoom: 12,
      },
    },
    {
      name: 'Dusseldorf',
      location: {
        latitude: 51.233334,
        longitude: 6.783333,
        zoom: 12,
      },
    },
  ];

  export const ratingTitles = {
    5: 'perfect',
    4: 'good',
    3: 'not bad',
    2: 'badly',
    1: 'poor',
  };

export const ButtonSettingPlaceCard: BtnBookMarkSetting = {
  className: 'place-card__bookmark-button button',
  width: 18,
  height: 19,
  classActive: 'place-card__bookmark-button--active',
};

export const ButtonSettingOfferItem: BtnBookMarkSetting = {
  className: 'offer__bookmark-button button',
  width: 31,
  height: 33,
  classActive: 'place-card__bookmark-button--active',
};

export enum NameSpace {
  Favorites = 'FAVORITES',
  Offer = 'OFFER',
  Offers = 'OFFERS',
  User = 'USER',
  Comments = 'COMMENTS',
  OfferNearby = 'OFFER_NEARBY',
}

export function getRandomItem<T> (array: T[]): T {
const randomIndex = Math.floor(Math.random() * array.length);
return array[randomIndex];
}


export function sortedReviews(array: Review[]) {
  const sortedArray = [...array].sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    }
    if (a.date > b.date) {
      return -1;
    }
    return 0;
  });

  return sortedArray.slice(0, 10);
}


export function updatedReviews(array: Review[]) {
return array.map((item) => {
  const date = new Date(item.date);
  const year = date.getFullYear();

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const month = monthNames[date.getMonth()];

  const formattedDate = `${month} ${year}`;

  return {
    ...item,
    date: formattedDate
  };
});
}

export function capitalize (text: string | undefined) {
  if (text === undefined) {
    return '';
  }
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}


export function getLengthArrayOffers (currentOffers: Offer[], currentCity: City) {
  if(currentOffers.length !== 0 && currentOffers.length > 1){
    return `${currentOffers.length} places to stay in ${currentCity.name}`;
  } if (currentOffers.length === 0) {
    return 'No places to stay available';
  } else {
   return `${currentOffers.length} place to stay in ${currentCity.name}`;
  }
}

export function getRandomObjects<T>(array: T[]): T[] {
  const shuffledArray = array.slice();
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray.slice(0, 3);
}

export function modifyOffers(offers: Offer[]): Offer[] {
  const modifiedOffers = offers.map((offer) => {
      if (offer.type === 'room') {
          return { ...offer, type: 'Private Room'};
      }
      return offer;
  });
  return modifiedOffers;
}

export function modifyOffer(offer: Offer | null): Offer | null {
  if (offer?.type === 'room') {
      return { ...offer, type: 'Private Room' };
  }
  return offer;
}

export function convertRating(rating: number): string {
 return `${Math.round(rating) * 100 / 5}%`;
}


export function getImages(offer: Offer | null): string[] | null {
  let arr: string[] | null = null;

  if (offer?.images) {
      arr = offer.images.slice(0, 6);
  }

  return arr;
}
