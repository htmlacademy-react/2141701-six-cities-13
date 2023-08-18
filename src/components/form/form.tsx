import {ChangeEvent, useState, useEffect} from 'react';
import {fetchPostReview} from '../../store/api-actions';
import { useAppDispatch } from '../../hooks';
import {ratingTitles} from '../../constants';

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
const dispatch = useAppDispatch();

  const handleFieldChange = (evt: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
    const {name, value} = evt.target;
    setFormData({...formData, [name]: value});
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(fetchPostReview({
      id: offerId,
      rating: Number(formData.rating),
      comment: formData.review
    }));
    setFormData(initialState);
  };

  useEffect(() => {
    if (formData.rating >= 1 && formData.review.length >= 50) {
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
            />
            <label
              htmlFor={`${ratingValue}-stars`}
              className="reviews__rating-label form__rating-label"
              title={ratingTitles[ratingValue as keyof typeof ratingTitles]}
            >
              <svg className="form__star-image" width={37} height={33}>
                <use xlinkHref="#icon-star" />
              </svg>
            </label>
          </div>
        ))}
             </div>
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
