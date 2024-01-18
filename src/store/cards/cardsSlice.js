import { createSlice } from '@reduxjs/toolkit';
import { cardsRequestAsync, filterRequestAsync } from './cardsAction';

const initialState = {
  loading: false,
  cards: [],
  cardsWithLike: [],
  error: '',
};

export const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    setLike: (state, action) => {
      const { id, newLikes, isLiked } = action.payload;
      const existingPhoto = state.cards.find(photo => photo.id === id);

      if (existingPhoto) {
        existingPhoto.likes = newLikes;
        existingPhoto['liked_by_user'] = isLiked;
      }
    },
    deleateCard: (state, action) => {
      const id = action.payload;
      state.cards = state.cards.filter(card => card.id !== id);
    },
  },
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
      })

      .addCase(filterRequestAsync.pending, (state) => {
        state.loading = true;
        state.error = '';
      })
      .addCase(filterRequestAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.cardsWithLike = action.payload;
        state.error = '';
      })
      .addCase(filterRequestAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      });
  }
});

export const cardsReducer = cardsSlice.reducer;
