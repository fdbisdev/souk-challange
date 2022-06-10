import React from 'react';
import { IMovie } from '../../utils/interfaces';

import { Container, Title } from './styles';

function MovieList({ movieType }: IMovie) {
  return (
    <Container>
      <Title>{movieType}</Title>
    </Container>
  );
}

export default MovieList;
