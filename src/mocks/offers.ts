import {Offer, Offers, OwnerApartment} from '../types/offer';

const ownerOne: OwnerApartment = {
  id: '57124697603',
name: 'Nick',
avatar: 'https://i.pravatar.cc/150?img=7',
status: true,
};

const ownerTwo: OwnerApartment = {
  id: '71256224636',
name: 'Mike',
avatar: 'https://i.pravatar.cc/150?img=3',
status: false,
};

const offerOne: Offer = {
  id: '61105856487',
  name: 'Place 1',
  location: 'Amsterdam',
  type: 'Apartment',
  image: ['https://i.pravatar.cc/150?img=1', 'https://i.pravatar.cc/150?img=2', 'https://i.pravatar.cc/150?img=7', 'https://i.pravatar.cc/150?img=2', 'https://i.pravatar.cc/150?img=3', 'https://i.pravatar.cc/150?img=8'],
  isPremium: true,
  rating: 4,
  description: ['3 Bedrooms', 'Max 4 adults'],
  price: 120,
  items: ['Wi-Fi',
    'Washing machine',
    'Towels',
    'Heating',
    'Coffee machine',
    'Baby seat',
    'Kitchen',
    'Dishwasher',
   'Cabel TV',
    'Fridge'],
  text: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
  coordinates: {
    latitude: 52.3909553943508,
  longitude: 4.85309666406198,
  zoom: 10
  },
  owner: [ownerOne],
};

const offerTwo: Offer = {
  id: '56261561659',
  name: 'Place 2',
  location: 'Amsterdam',
  type: 'Private room',
  image: ['https://i.pravatar.cc/150?img=2', 'https://i.pravatar.cc/150?img=1', 'https://i.pravatar.cc/150?img=7', 'https://i.pravatar.cc/150?img=2', 'https://i.pravatar.cc/150?img=3', 'https://i.pravatar.cc/150?img=8'],
  isPremium: false,
  rating: 4,
  description: ['2 Bedrooms', 'Max 3 adults'],
  price: 99,
  items: ['Wi-Fi',
    'Washing machine',
    'Towels',
    'Heating',
   'Cabel TV',
    'Fridge'],
  text: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
  coordinates: {
    latitude: 52.3609553943508,
  longitude: 4.85309666406198,
  zoom: 10
  },
  owner: [ownerTwo],
};

const offerThree: Offer = {
  id: '92425204092',
  name: 'Place 3',
  location: 'Paris',
  type: 'Apartment',
  image: ['https://i.pravatar.cc/150?img=7', 'https://i.pravatar.cc/150?img=2', 'https://i.pravatar.cc/150?img=7', 'https://i.pravatar.cc/150?img=2', 'https://i.pravatar.cc/150?img=3', 'https://i.pravatar.cc/150?img=8'],
  isPremium: true,
  rating: 4,
  description: ['1 Bedrooms', 'Max 2 adults'],
  price: 102,
  items: ['Wi-Fi',
    'Washing machine',
    'Towels',
    'Heating',
    'Coffee machine',
    'Baby seat',
    'Kitchen',
    'Dishwasher',
   'Cabel TV',
    'Fridge'],
  text: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
  coordinates: {
    latitude: 52.3909553943508,
  longitude: 4.929309666406198,
  zoom: 10
  },
  owner: [ownerOne],
};

const offerFour: Offer = {
  id: '51069206776',
  location: 'Cologne',
  name: 'Place 4',
  type: 'Private room',
  image: ['https://i.pravatar.cc/150?img=3','https://i.pravatar.cc/150?img=1', 'https://i.pravatar.cc/150?img=2', 'https://i.pravatar.cc/150?img=7', 'https://i.pravatar.cc/150?img=2', 'https://i.pravatar.cc/150?img=8'],
  isPremium: false,
  rating: 4,
  description: ['2 Bedrooms', 'Max 3 adults'],
  price: 100,
  items: ['Wi-Fi',
    'Washing machine',
    'Towels',
    'Heating',
    'Baby seat',
    'Kitchen',
   'Cabel TV',
    'Fridge'],
  text: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
  coordinates: {
    latitude: 52.3809553943508,
  longitude: 4.939309666406198,
  zoom: 10
  },
  owner: [ownerTwo],
};

export const offers: Offers = [offerOne, offerTwo, offerThree, offerFour];

