import { createSlice } from '@reduxjs/toolkit';
import { IMovieRated } from '../../utils/interfaces';

export const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    ratedMovies: [],
  },
  reducers: {
    addRatedMovie: (state, { payload }) => {
      let ratedChanged = false;
      // eslint-disable-next-line array-callback-return
      state.ratedMovies.map((movie: IMovieRated) => {
        if (movie.movie === payload.movie) {
          // eslint-disable-next-line no-param-reassign
          movie.rate = payload.rate;
          ratedChanged = true;
        }
      });
      if (!ratedChanged) {
        state.ratedMovies.push(payload);
      }
    },
  },
});

export const { addRatedMovie } = moviesSlice.actions;

export const selectRatedMovies = (state: any) => state.movies.ratedMovies;

export default moviesSlice.reducer;
