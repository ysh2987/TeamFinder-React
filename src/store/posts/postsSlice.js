import { createSlice } from '@reduxjs/toolkit';
import fetchUserByPosts from './postsThunk';

const initialState = {
  originalData: null,
  filterData: null,
  loading: false,
  error: false,
  sportsTypes: [0, 1, 2, 3, 4, 5, 6],
  cityTypes: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    sportsFilter: (state, action) => {
      if (state.sportsTypes.length === 7) {
        state.sportsTypes = [action.payload];
      } else {
        state.sportsTypes.push(action.payload);
      }
    },
    // increment: (state) => {
    //   state.value += 1
    // },
    // decrement: (state) => {
    //   state.value -= 1
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload
    // },
  },
  extraReducers: {
    [fetchUserByPosts.pending]: (state) => {
      state.loading = true;
      state.error = false;
      state.originalData = null;
      state.filterData = null;
    },
    [fetchUserByPosts.fulfilled]: (state, action) => {
      state.originalData = action.payload;
      state.filterData = action.payload;
      state.loading = false;
      state.error = false;
    },
    [fetchUserByPosts.rejected]: (state) => {
      state.loading = false;
      state.error = true;
      state.originalData = null;
      state.filterData = null;
    },
  },
});

export const { sportsFilter } = postsSlice.actions;

export default postsSlice.reducer;
