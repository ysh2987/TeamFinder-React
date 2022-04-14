import { configureStore } from '@reduxjs/toolkit';
import postsSlice from './posts/postsSlice';
import loginSlice from './login/loginSlice';

export const store = configureStore({
  reducer: {
    posts: postsSlice,
    login: loginSlice,
  },
});
