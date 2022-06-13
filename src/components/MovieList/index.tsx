/* eslint-disable react/jsx-no-bind */
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList } from 'react-native';
import { getPopularMovies, getUpcomingMovies } from '../../services/api';
import colors from '../../utils/colors';
import { IMovie, MovieArrayListProps } from '../../utils/interfaces';
import MovieCard from './MovieCard';

import { Container } from './styles';

function MovieList({ popular, upcoming }: IMovie) {
  const [upcomingMoviesList, setUpcomingMoviesList] = useState();
  const [popularMoviesList, setPopularMoviesList] = useState();
  const [loading, setLoading] = useState(true);

  const getMovieBannerBaseURL = 'https://image.tmdb.org/t/p/w500/';

  async function getMovieList() {
    const popularMoviesResponse: any = await getPopularMovies();
    setPopularMoviesList(popularMoviesResponse.data.results);

    const upcomingMoviesResponse: any = await getUpcomingMovies();
    setUpcomingMoviesList(upcomingMoviesResponse.data.results);

    setLoading(false);
  }

  useEffect(() => {
    getMovieList();
  }, []);

  if (loading) {
    return (
      <Container>
        <ActivityIndicator size="large" color={colors.white} />
      </Container>
    );
  }

  // eslint-disable-next-line react/no-unstable-nested-components
  function CardList({ item }: { item: MovieArrayListProps }) {
    return (
      <MovieCard
        movieBanner={getMovieBannerBaseURL + item.poster_path}
        movieDate={item.release_date}
        movieName={item.title}
        movieId={item.id}
      />
    );
  }

  return (
    <Container testID="movieList">
      {popular && !upcoming ? (
        <FlatList
          testID="popularList"
          data={popularMoviesList}
          keyExtractor={item => String(item.id)}
          numColumns={3}
          renderItem={CardList}
        />
      ) : (
        <FlatList
          testID="upcomingList"
          data={upcomingMoviesList}
          numColumns={3}
          keyExtractor={item => String(item.id)}
          renderItem={CardList}
        />
      )}
    </Container>
  );
}

export default MovieList;
