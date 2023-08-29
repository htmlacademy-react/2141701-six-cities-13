import { Link } from 'react-router-dom';

import {AppRoute} from '../../constants';
import {fetchFavorites, logoutAction, } from '../../store/api-actions';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getFavoritesData } from '../../store/favorites-process/favorites-process.selector';
import { useEffect } from 'react';
import { getUserEmail } from '../../services/userEmail';

function SignOut() {
const dispatch = useAppDispatch();
const favoriteOffers = useAppSelector(getFavoritesData);
const userEmail = getUserEmail();

useEffect(()=> {
dispatch(fetchFavorites());
}, [dispatch]);

  const handlerSignOut = () => {
    dispatch(logoutAction());
  };

  return (
    <>
      <li className="header__nav-item user">
    <Link
      className="header__nav-link header__nav-link--profile"
      to={AppRoute.Favorites}
    >
      <div className="header__avatar-wrapper user__avatar-wrapper"></div>
      <span className="header__user-name user__name">
        {userEmail}
      </span>
      <span className="header__favorite-count">{favoriteOffers.length}</span>
    </Link>
      </li>
    <li className="header__nav-item">
    <Link className="header__nav-link" to={AppRoute.Login} onClick={handlerSignOut}>
      <span className="header__signout">Sign out</span>
    </Link>
    </li>
    </>
  );
}

export default SignOut;
