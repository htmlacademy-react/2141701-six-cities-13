import ReviewItem from '../review-item/review-item';
import {Review} from '../../types/review';
import { sortedReviews, updatedReviews } from '../../constants';

type ReviewListProps = {
  reviews: Review[];
  children?: React.ReactNode | undefined;
};

function ReviewList({reviews, children}: ReviewListProps) {
 const sortRe = sortedReviews(reviews);

 const reviewsForRender = updatedReviews(sortRe);

  return (
    <section className="offer__reviews reviews">
    <h2 className="reviews__title">
      Reviews · <span className="reviews__amount">{reviewsForRender.length}</span>
    </h2>
    <ul className="reviews__list">
    <ReviewItem reviews={reviewsForRender}/>
    </ul>
    {children}
    </section>
   );
}

export default ReviewList;
