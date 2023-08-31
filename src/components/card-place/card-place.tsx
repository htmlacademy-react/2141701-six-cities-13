import {Offer} from '../../types/offer';
import { Link } from 'react-router-dom';
import { AppRoute, capitalize, convertRating } from '../../constants';
import ButtonBookmark from '../../components/button-bookmark/button-bookmark';
import {ButtonSettingPlaceCard} from '../../constants';

type CardPlaceProps = {
  offer: Offer;
  cardNameClass: string;
 handleHoverCurrentCard?: (offerId: string) => void;
};

function CardPlace({offer, cardNameClass, handleHoverCurrentCard}: CardPlaceProps): JSX.Element {
  const {id, title, previewImage, price, type, isPremium, rating} = offer;

   return (
    <article key={id} className={`${cardNameClass}__card place-card`} onMouseOver={()=> handleHoverCurrentCard && handleHoverCurrentCard(id)}
     onMouseLeave={()=>handleHoverCurrentCard && handleHoverCurrentCard('')}
    >
{isPremium && <div className="place-card__mark">
  <span>Premium</span>
              </div>}
<div className="cities__image-wrapper place-card__image-wrapper">
  <Link to={`${AppRoute.Offer}/${id}`}>
    <img
      className="place-card__image"
      src={previewImage}
      width={260}
      height={200}
      alt="Place image"
    />
  </Link>
</div>
<div className="place-card__info">
  <div className="place-card__price-wrapper">
    <div className="place-card__price">
      <b className="place-card__price-value">€{price}</b>
      <span className="place-card__price-text">/&nbsp;night</span>
    </div>
    <ButtonBookmark buttonSetting={ButtonSettingPlaceCard} offer={offer}/>
  </div>
  <div className="place-card__rating rating">
    <div className="place-card__stars rating__stars">
      <span style={ {width: convertRating(rating)}}/>
      <span className="visually-hidden">Rating</span>
    </div>
  </div>
  <h2 className="place-card__name">
    <Link to={`${AppRoute.Offer}/${id}`}>
                  {title}
    </Link>
  </h2>
  <p className="place-card__type">{capitalize(type)}</p>
</div>
    </article>
  );
}

export default CardPlace;
