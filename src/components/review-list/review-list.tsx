import ReviewItem from '../review-item/review-item';
import {Review} from '../../types/review';

type ReviewListProps = {
  reviews: Review[];
  children?: React.ReactNode | undefined;
};

function ReviewList({reviews, children}: ReviewListProps) {
  return (
    <section className="offer__reviews reviews">
    <h2 className="reviews__title">
      Reviews · <span className="reviews__amount">{reviews.length}</span>
    </h2>
    <ul className="reviews__list">
    <ReviewItem reviews={reviews}/>
    </ul>
    {children}
    </section>
   );
}

export default ReviewList;
