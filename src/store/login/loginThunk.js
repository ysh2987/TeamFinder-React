import { createAsyncThunk } from '@reduxjs/toolkit';
import client from '../../service/axios';

const fetchByLogin = createAsyncThunk(
  'users/fetchByLogin',
  async (userData) => {
    console.log(userData);
    const response = await client.post('/users', {
      id: userData.id,
      pw: userData.pw,
    });
    return response.data;
  },
);

export default fetchByLogin;
