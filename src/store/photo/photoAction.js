import axios from 'axios';
import { URL_API, ACCESS_KEY } from '../../api/constants';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const photoRequestAsync = createAsyncThunk(
  'photo/axios',
  (id, { getState }) => {
    const token = getState().token.token;
    const headers = {
      Authorization: `Client-ID ${ACCESS_KEY}`,
    };

    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }

    return axios(`${URL_API}photos/${id}`, {
      headers,
    })
      .then(({ data }) => {
        const photo = data;

        return photo;
      })
      .catch((error) => ({ error: error.message }));
  }
);
