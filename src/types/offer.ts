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
  owner: OwnerApartment [];
};

export type OwnerApartment = {
  id: string;
  name: string;
  avatar: string;
  status: boolean;
  };
