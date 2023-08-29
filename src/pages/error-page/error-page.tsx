import { useAppDispatch } from '../../hooks';
import { fetchOffersData } from '../../store/api-actions';
import './error-page.css';


function ErrorPage() {
  const dispatch = useAppDispatch();

  return (
    <div className="error-container">
            <h1>Failed to load offers.</h1>
            <button onClick={() => {
dispatch(fetchOffersData());
}} type="button" className="error-btn"
            >
               To try one more time
            </button>
    </div>

  );
}

export default ErrorPage;
