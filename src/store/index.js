import { tokenMiddleware, tokenReducer } from './token/tokenReducer';
import { authReducer } from './auth/authReducer';
import { cardsReducer } from './cards/cardsSlice';
import { photoReducer } from './photo/photoSlice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    token: tokenReducer,
    auth: authReducer,
    cards: cardsReducer,
    photo: photoReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tokenMiddleware),
});
