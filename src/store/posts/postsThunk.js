import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchUserByPosts = createAsyncThunk(
  'posts/fetchByPostsData',
  async () => {
    const response = await axios.get('http://localhost:8080/api/posts');
    return response.data;
  },
);

export default fetchUserByPosts;
