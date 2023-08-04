import{City} from '../types/city';

export type Offer = {
    id: string;
    title: string;
    type: string;
    price: number;
    city: {
    name: string;
    location: {
    latitude: number;
    longitude: number;
    zoom: number;
    };
  };
    location: {
    latitude: number;
    longitude: number;
    zoom: number;
    };
    isFavorite: false;
    isPremium: false;
    rating: number;
    previewImage: string;

};
export type Offers = Offer[];

export type Coordinates = {
  latitude: number;
  longitude: number;
  zoom: number;
}
export type OwnerApartment = {
  id: string;
  name: string;
  avatar: string;
  status: boolean;
  };

  export type Point = Pick<Offer, 'id' | 'coordinates'>;
  export type Points = Point[];
