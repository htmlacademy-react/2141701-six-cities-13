import { useNavigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../hooks';
import {BtnBookMarkSetting} from '../../types/bookmark-btn';
import { Offer } from '../../types/offer';
import {fetchFavoritesAction} from '../../store/api-actions';
import { getAuthorizationStatus } from '../../store/user-process/user-process.selector';
import { AppRoute, AuthorizationStatus } from '../../constants';

type ButtonBookmarkProps ={
  offer: Offer | null;
  buttonSetting: BtnBookMarkSetting;
}

function ButtonBookmark({ buttonSetting, offer}: ButtonBookmarkProps) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
 const isLoggedIn = useAppSelector(getAuthorizationStatus);
const AuthStatus = isLoggedIn === AuthorizationStatus.Auth;

  const handleChangeFavoriteBtn = () => {
    if (AuthStatus) {
      const newStatus = offer?.isFavorite ? '0' : '1';
      const fetchActionPayload = { id: offer?.id, status: newStatus };
      dispatch(fetchFavoritesAction(fetchActionPayload));
    } else {
      navigate(AppRoute.Login);
    }
    };

  return (
                  <button
                   onClick={handleChangeFavoriteBtn}
                          className={`${buttonSetting.className} ${offer?.isFavorite ? buttonSetting.classActive : ''}`}
                          type="button"
                  >
                          <svg
                            className="place-card__bookmark-icon"
                             width={buttonSetting.width}
                             height={buttonSetting.height}
                          >
                            <use xlinkHref="#icon-bookmark" />
                          </svg>
                          <span className="visually-hidden"></span>
                  </button>
  );
}

export default ButtonBookmark;
