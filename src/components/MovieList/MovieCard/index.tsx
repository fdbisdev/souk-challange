import React, { useEffect, useState } from 'react';

import { useNavigation } from '@react-navigation/native';

import {
  Container,
  MovieBanner,
  MovieDate,
  MovieName,
  MovieDateWrapper,
} from './styles';
import { Movie, MovieDetailsProps } from '../../../utils/interfaces';

function MovieCard({ movieName, movieDate, movieBanner, movieId }: Movie) {
  const [dateFormatted, setDateFormatted] = useState(movieDate);

  const navigation = useNavigation<MovieDetailsProps['navigation']>();

  function formatDate() {
    const dateSplit = movieDate.split('-');
    setDateFormatted(`${dateSplit[2]}/${dateSplit[1]}/${dateSplit[0]}`);
  }

  function handlePressMovieCard() {
    navigation.navigate('MovieDetails', {
      movieName,
      movieDate,
      movieId,
      movieBanner,
    });
  }

  useEffect(() => {
    formatDate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container onPress={() => handlePressMovieCard()}>
      <MovieBanner source={{ uri: movieBanner }}>
        <MovieDateWrapper>
          <MovieDate>{dateFormatted}</MovieDate>
        </MovieDateWrapper>
      </MovieBanner>
      <MovieName>{movieName}</MovieName>
    </Container>
  );
}

export default MovieCard;
