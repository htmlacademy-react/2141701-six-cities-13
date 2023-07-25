import {Review, Reviews} from '../types/review';

 const ReviewOne: Review = {
  id: '0b4f8770-841f-4cfa-b036-7fb6dc8aaeed',
  name: 'Tanya',
  avatar: 'https://i.pravatar.cc/150?img=20',
  rating: 4,
  text: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
  data: 'April 2019',
};

const ReviewTwo: Review = {
  id: 'fd7e0dc2-7eaa-4256-bb97-30805a511c7c',
  name: 'Anna',
  avatar: 'https://i.pravatar.cc/150?img=21',
  rating: 3,
  text: 'A quiet cozy and picturesque that hides behind a a river by the unique',
  data: 'March 2019',
};

export const allReviews: Reviews = [ReviewOne, ReviewTwo];
