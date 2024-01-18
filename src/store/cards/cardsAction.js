import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ACCESS_KEY } from '../../api/constants';
import { URL_API } from '../../api/constants';

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

    return axios.get(`${URL_API}photos?per_page=9`, {
      headers,
    })
      .then(({ data }) => {
        const cards = data;

        return cards;
      })
      .catch((error) => ({ error: error.message }));
  }
);

export const likeRequestAsync = createAsyncThunk(
  'like/axios',
  async ({ id, method }, { getState }) => {
    const token = getState().token.token;

    if (!token) return {};

    try {
      await axios(`${URL_API}photos/${id}/like`, {
        method: `${method}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return {};
    } catch (error) {
      return { error: error.message };
    }
  }
);

export const filterRequestAsync = createAsyncThunk(
  'filter/axios',
  (username, { getState }) => {
    const token = getState().token.token;

    if (!token || !username) return;

    return axios.get(`${URL_API}users/${username}/likes`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(({ data }) => {
        const cardsWithLike = data;

        return cardsWithLike;
      })
      .catch((error) => ({ error: error.message }));
  }
);
