import {useAppDispatch} from '../../hooks/index';
import cn from 'classnames';
import { Link } from 'react-router-dom';

import {changeCity} from '../../store/action';
import { AppRoute } from '../../constants';
import {CITIES} from '../../constants';
import { City } from '../../types/city';

type CityListProps = {
  currentCity: City;
}

function CityList({currentCity}: CityListProps) {
  const dispatch = useAppDispatch();

  const changeCityHandler = (city: City) => {
    dispatch(changeCity(city));
  };

  return (
    <section className="locations container">
    <ul className="locations__list tabs__list">
      {CITIES.map((city) => (
        <li key={city.name} className="locations__item" >
          <Link className={cn('locations__item-link tabs__item',
           { 'tabs__item--active': city === currentCity})} to={AppRoute.Main}
           onClick={()=>changeCityHandler(city)}
          >
            <span>{city.name}</span>
          </Link>
        </li>
      ))}
    </ul>
    </section>
  );
}

export default CityList;
