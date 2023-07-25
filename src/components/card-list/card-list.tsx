import CardPlace from '../card-place/card-place';
import {Offer} from '../../types/offer';

type CardListProps = {
  offers: Offer[];
  cardNameClass: string;
};

function CardList({offers, cardNameClass}: CardListProps) {
  return (
    <>{offers.map((offer) => <CardPlace key={offer.id} offer={offer} cardNameClass={cardNameClass}/>)}</>

  );
}

export default CardList;
