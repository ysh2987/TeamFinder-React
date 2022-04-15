import { createSlice } from '@reduxjs/toolkit';
import fetchByLogin from './loginThunk';

const initialState = {
  isLogin: false,
  userNickName: null,
  userId: null,
  modalOpen: false,
  loginRejected: false,
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    isModal: (state, action) => {
      state.modalOpen = action.payload;
    },
    logOut: () => initialState,
    loginInit: (state) => {
      state.loginRejected = false;
    },
  },
  extraReducers: {
    [fetchByLogin.pending]: (state) => {
      state.isLogin = false;
      state.userId = null;
      state.userNickName = null;
      state.loginRejected = false;
    },
    [fetchByLogin.fulfilled]: (state, action) => {
      if (action.payload.state) {
        state.isLogin = true;
        state.userId = action.payload.data.id;
        state.userNickName = action.payload.data.nickname;
        state.modalOpen = false;
      } else {
        state.loginRejected = true;
      }
    },
    [fetchByLogin.rejected]: () => {
      alert('잠시 후 다시 시도해주세요!');
    },
  },
});

export const { isModal, logOut, loginInit } = loginSlice.actions;

export default loginSlice.reducer;
