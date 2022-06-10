import { createSlice } from '@reduxjs/toolkit';

export const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    ratedMovies: [
      {
        movie: '',
        rate: 0,
      },
    ],
  },
  reducers: {
    addRatedMovie: (state, { payload }) => {
      state.ratedMovies.push(payload);
    },
  },
});

export const { addRatedMovie } = moviesSlice.actions;

export default moviesSlice.reducer;
