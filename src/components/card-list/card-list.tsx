import CardPlace from '../card-place/card-place';
import {Offer} from '../../types/offer';

type CardListProps = {
  offers: Offer[];
};

function CardList({offers}: CardListProps) {
  return (
    <>{offers.map((offer) => <CardPlace key={offer.id} offer={offer}/>)}</>

  );
}

export default CardList;
