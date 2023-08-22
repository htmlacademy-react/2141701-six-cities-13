import {createSlice } from '@reduxjs/toolkit';

import {ReviewsInitialState} from '../../types/initialState';
import {fetchReviewsData, fetchPostReview} from '../api-actions';
import {NameSpace} from '../../constants';

const initialState: ReviewsInitialState = {
  reviews: [],
  isLoadingData: false,
};

export const reviewProcess = createSlice({
  name: NameSpace.Comments,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
    .addCase(fetchReviewsData.fulfilled, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(fetchReviewsData.rejected, (state) => {
      state.reviews = [];
    })
    .addCase(fetchPostReview.pending, (state) => {
      state.isLoadingData = true;
    });
  }
});
