import { createSlice } from '@reduxjs/toolkit';
import { cardsRequestAsync } from './cardsAction';

const initialState = {
  loading: false,
  cards: [],
  error: '',
};

export const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(cardsRequestAsync.pending, (state) => {
        state.loading = true;
        state.error = '';
      })
      .addCase(cardsRequestAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.cards = action.payload;
        state.error = '';
      })
      .addCase(cardsRequestAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      });
  }
});

export const cardsReducer = cardsSlice.reducer;
