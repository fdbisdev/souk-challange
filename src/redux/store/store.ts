import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../slices/user';
import moviesReducer from '../slices/movies';

const store = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
  },
});

export default store;
