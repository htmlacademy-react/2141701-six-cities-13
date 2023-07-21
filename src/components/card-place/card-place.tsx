import {useState} from 'react';
import {Offer} from '../../types/offer';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../constants';

type CardPlaceProps = {
  offer: Offer;
};

function CardPlace({offer}: CardPlaceProps): JSX.Element {
  const {id, name, image, price, type, isPremium} = offer;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [currentCard, setCurrentCard] = useState('');
  return (
    <article key={id} className="cities__card place-card" onMouseOver={()=>setCurrentCard(id)}>
{isPremium && <div className="place-card__mark">
  <span>Premium</span>
              </div>}
<div className="cities__image-wrapper place-card__image-wrapper">
  <a href="#">
    <img
      className="place-card__image"
      src={image[0]}
      width={260}
      height={200}
      alt="Place image"
    />
  </a>
</div>
<div className="place-card__info">
  <div className="place-card__price-wrapper">
    <div className="place-card__price">
      <b className="place-card__price-value">€{price}</b>
      <span className="place-card__price-text">/&nbsp;night</span>
    </div>
    <button
      className="place-card__bookmark-button button"
      type="button"
    >
      <svg
        className="place-card__bookmark-icon"
        width={18}
        height={19}
      >
        <use xlinkHref="#icon-bookmark" />
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  </div>
  <div className="place-card__rating rating">
    <div className="place-card__stars rating__stars">
      <span style={{ width: '80%' }} />
      <span className="visually-hidden">Rating</span>
    </div>
  </div>
  <h2 className="place-card__name">
    <Link to={AppRoute.Offer}>
                  {name}
    </Link>
  </h2>
  <p className="place-card__type">{type}</p>
</div>
    </article>
  );
}

export default CardPlace;
