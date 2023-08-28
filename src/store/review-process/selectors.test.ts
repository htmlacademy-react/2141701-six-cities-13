import { makeFakeReviews } from './../../utils/mocks';
import { NameSpace } from './../../constants';
import { getCurrentReviews, LoadingData } from './review-process.selector';

describe('GameData selectors', () => {
  const mockReviews = makeFakeReviews();
  const state = {
    [NameSpace.Comments]: {
      reviews: mockReviews,
      isLoadingData: false,
    }
  };

  it('should return reviews from state', () => {
    const { reviews } = state[NameSpace.Comments];
    const result = getCurrentReviews(state);
    expect(result).toEqual(reviews);
  });

  it('should return data loading status', () => {
    const { isLoadingData } = state[NameSpace.Comments];
    const result = LoadingData(state);
    expect(result).toBe(isLoadingData);
  });
});
