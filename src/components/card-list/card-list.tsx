import CardPlace from '../card-place/card-place';
import {Offer} from '../../types/offer';
import useSort from '../../hooks/use-sort';

type CardListProps = {
  currentOffers: Offer[];
  cardNameClass: string;
  currentSortTask: string;
  handleHoverCurrentCard?: (offerId: string) => void;
};

function CardList({currentOffers, cardNameClass, currentSortTask, handleHoverCurrentCard}: CardListProps) {
  const sortedArrayOffers = useSort(currentSortTask, currentOffers);

  return (
    <>{sortedArrayOffers.map((offer) => <CardPlace key={offer.id} offer={offer} cardNameClass={cardNameClass} handleHoverCurrentCard={handleHoverCurrentCard}/>)}</>
  );

}

export default CardList;
