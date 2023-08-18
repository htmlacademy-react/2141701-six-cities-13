import { useAppDispatch } from '../../hooks';
import {BtnBookMarkSetting} from '../../types/bookmark-btn';
import { Offer } from '../../types/offer';
import {fetchFavoritesAction} from '../../store/api-actions';

type ButtonBookmarkProps ={
  offer: Offer | null;
  buttonSetting: BtnBookMarkSetting;
}

function ButtonBookmark({ buttonSetting, offer}: ButtonBookmarkProps) {
  const dispatch = useAppDispatch();

  const handleChangeFavoriteBtn = () => {
    const newStatus = offer?.isFavorite ? '0' : '1';
    const fetchActionPayload = { id: offer?.id, status: newStatus };
    dispatch(fetchFavoritesAction(fetchActionPayload));
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
                          <span className="visually-hidden">{offer?.isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
                  </button>
  );
}

export default ButtonBookmark;
