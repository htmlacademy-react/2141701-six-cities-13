import CardPlace from '../card-place/card-place';
import {Offer} from '../../types/offer';

type CardListProps = {
  currentOffers: Offer[];
  cardNameClass: string;
};

function CardList({currentOffers, cardNameClass}: CardListProps) {
  return (
    <>{currentOffers.map((offer) => <CardPlace key={offer.id} offer={offer} cardNameClass={cardNameClass}/>)}</>

  );
}

export default CardList;
