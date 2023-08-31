import { useAppDispatch } from '../../hooks';
import { fetchOffersData } from '../../store/api-actions';
import './error-button.css';


function ErrorButton() {
  const dispatch = useAppDispatch();

  return (
            <button onClick={() => {
dispatch(fetchOffersData());
}} type="button" className="error-btn"
            >
               To try one more time
            </button>
  );
}

export default ErrorButton;
