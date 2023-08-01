import { useDispatch} from 'react-redux';
import cn from 'classnames';
import { Link } from 'react-router-dom';

import {changeCity} from '../../store/action';
import { AppRoute } from '../../constants';
import {ALL_CITY_LIST} from '../../constants';

type CityListProps = {
  currentCity: string;
}

function CityList({currentCity}: CityListProps) {
  const dispatch = useDispatch();

  const changeCityHandler = (city: string) => {
    dispatch(changeCity(city));
  };

  return (
    <section className="locations container">
    <ul className="locations__list tabs__list">
      {ALL_CITY_LIST.map((city) => (
        <li key={city} className="locations__item" >
          <Link className={cn('locations__item-link tabs__item',
           { 'tabs__item--active': city === currentCity})} to={AppRoute.Main}
           onClick={()=>changeCityHandler(city)}
          >
            <span>{city}</span>
          </Link>
        </li>
      ))}
    </ul>
    </section>
  );
}

export default CityList;
