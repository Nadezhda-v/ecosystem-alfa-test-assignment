import { createSlice } from '@reduxjs/toolkit';
import { photoRequestAsync } from './photoAction';

const initialState = {
  status: '',
  photo: [],
  error: '',
};

export const photoSlice = createSlice({
  name: 'photo',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(photoRequestAsync.pending, (state) => {
        state.status = 'loading';
        state.error = '';
      })
      .addCase(photoRequestAsync.fulfilled, (state, action) => {
        state.status = 'loaded';
        state.photo = action.payload;
        state.error = '';
      })
      .addCase(photoRequestAsync.rejected, (state, action) => {
        state.status = 'error';
        state.error = action.payload;
      });
  }
});

export const photoReducer = photoSlice.reducer;
