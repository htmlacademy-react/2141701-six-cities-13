export type Offer = {
  id: string;
  name: string;
  location: string;
  type: string;
  image: string[];
  isPremium: boolean;
  rating: number;
  description: string[];
  price: number;
  items: string[];
  text: string;
  coordinates: Coordinates;
  owner: OwnerApartment [];
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
