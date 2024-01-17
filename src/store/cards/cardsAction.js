import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ACCESS_KEY } from '../../api/constants';

export const cardsRequestAsync = createAsyncThunk(
  'cards/axios',
  (_, { getState }) => {
    const token = getState().token.token;

    const headers = {
      'Authorization': `Client-ID ${ACCESS_KEY}`,
    };

    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }

    return axios.get(`https://api.unsplash.com/photos?per_page=9`, {
      headers,
    })
      .then(({ data }) => {
        console.log('data: ', data);
        const cards = data;

        return cards;
      })
      .catch((error) => ({ error: error.message }));
  }
);
