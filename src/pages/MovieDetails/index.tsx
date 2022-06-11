/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';

import { ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Movie } from '../../utils/interfaces';
import { Container, LoadingContainer, DetailsContainer, Title } from './styles';

function MovieDetails({ movieName, movieDate, movieId, movieBanner }: Movie) {
  const [loading, setLoading] = useState(true);

  return (
    <Container>
      {loading ? (
        <LoadingContainer>
          <ActivityIndicator size="large" color="#fff" />
        </LoadingContainer>
      ) : (
        <DetailsContainer>
          <Title>{movieName}</Title>
        </DetailsContainer>
      )}
    </Container>
  );
}

export default MovieDetails;
