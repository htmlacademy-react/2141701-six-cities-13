import {ChangeEvent, useState, useEffect} from 'react';
import {fetchPostReview} from '../../store/api-actions';
import { useAppDispatch, useAppSelector } from '../../hooks';
import {ratingTitles, ReviewLength} from '../../constants';
import { setLoadingData } from '../../store/review-process/review-process.selector';

type FormProps = {
  offerId: string | undefined;
}

function Form({offerId}: FormProps) {
  const initialState = {
    rating: 0,
    review: '',
  };


const [buttonDisable, setButtonDisabled] = useState(true);
const[formData, setFormData] = useState(initialState);
const isSending = useAppSelector(setLoadingData);
const dispatch = useAppDispatch();


  const handleFieldChange = (evt: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
    const {name, value} = evt.target;
    setFormData({...formData, [name]: name === 'rating' ? window.parseInt(value) : value });
  };

  const formDataCheckLength = formData.review.length >= ReviewLength.Min && formData.review.length < ReviewLength.Max;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setButtonDisabled(true);
    dispatch(fetchPostReview({
      id: offerId,
      rating: Number(formData.rating),
      comment: formData.review,
      onSuccess: () => setFormData(initialState)
    }));
  };


  useEffect(() => {
    if (formData.rating >= 1 && formDataCheckLength) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [formData.rating, formData.review]);

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleSubmit}>
                  <label className="reviews__label form__label" htmlFor="review">
                Your review
                  </label>
             <div className="reviews__rating-form form__rating">
        {[5, 4, 3, 2, 1].map((ratingValue) => (
          <div key={ratingValue}>
            <input
              onChange={handleFieldChange}
              className="form__rating-input visually-hidden"
              name="rating"
              value={ratingValue}
              id={`${ratingValue}-stars`}
              type="radio"
              checked={formData.rating === ratingValue}
              disabled={isSending}
            />
            <label
              htmlFor={`${ratingValue}-stars`}
              className="reviews__rating-label form__rating-label"
              title={ratingTitles[ratingValue as keyof typeof ratingTitles]}
            >
              <svg className="form__star-image" width={37} height={33} style={ratingValue < formData.rating ? { fill: '#ff9000' } : undefined}>
                <use xlinkHref="#icon-star" />
              </svg>
            </label>
          </div>
        ))}
             </div>
             {formData.review.length > 0 && !formDataCheckLength ? (
    <p className="form__error" style={{ color: '#FF0000' }}>
      Текст отзыва должен содержать от 50 до 300 символов.
    </p>
  ) : null}
                  <textarea
                  onChange={handleFieldChange}
                    className="reviews__textarea form__textarea"
                    id="review"
                    name="review"
                    placeholder="Tell how was your stay, what you like and what can be improved"
                    value={formData.review}
                  />
                  <div className="reviews__button-wrapper">
                    <p className="reviews__help">
                  To submit review please make sure to set{' '}
                      <span className="reviews__star">rating</span> and describe
                  your stay with at least{' '}
                      <b className="reviews__text-amount">50 characters</b>.
                    </p>
                    <button
                      className="reviews__submit form__submit button"
                      type="submit"
                      disabled={buttonDisable}
                    >
                  Submit
                    </button>
                  </div>
    </form>
  );
}

export default Form;
