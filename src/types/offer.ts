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
    isFavorite: boolean;
    isPremium: boolean;
    rating: number;
    previewImage: string;
    description: string;
bedrooms: number;
goods: string [];
host: {
name: string;
avatarUrl: string;
isPro: boolean;
};
images: string[];
maxAdults: number;
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
