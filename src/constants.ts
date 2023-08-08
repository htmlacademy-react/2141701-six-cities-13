import {City} from './types/city';
export const DEFAULT_SORT = 'Popular';

export const ALL_CITY_LIST = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
];

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

export const URL_MARKER_DEFAULT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

export const URL_MARKER_CURRENT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';

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
