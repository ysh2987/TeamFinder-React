import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLogin: false,
  userNickName: null,
  modalOpen: false,
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {},
  extraReducers: {},
});

// export const {} = loginSlice.actions;

export default loginSlice.reducer;
