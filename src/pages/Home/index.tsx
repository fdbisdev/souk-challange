import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import MovieList from '../../components/MovieList';
import { IUser } from '../../utils/interfaces';

import {
  Container,
  Title,
  ButtonWrapper,
  SelectTypeButton,
  ButtonText,
} from './styles';

function Home() {
  const [userName, setUserName] = useState('');
  const [popular, setPopular] = useState(false);
  const [upcoming, setUpcoming] = useState(true);

  const { name } = useSelector((state: IUser) => state.user);

  const selectPopularMovies = () => {
    setPopular(oldState => !oldState);
    setUpcoming(oldState => !oldState);
  };

  const selectUpcomingMovies = () => {
    setUpcoming(oldState => !oldState);
    setPopular(oldState => !oldState);
  };

  useEffect(() => {
    setUserName(name);
  }, [name]);

  return (
    <Container>
      <Title>Olá, {userName}!</Title>
      <ButtonWrapper>
        <SelectTypeButton isSelected={upcoming} onPress={selectPopularMovies}>
          <ButtonText isSelected={upcoming}>Upcoming</ButtonText>
        </SelectTypeButton>
        <SelectTypeButton isSelected={popular} onPress={selectUpcomingMovies}>
          <ButtonText isSelected={popular}>Popular</ButtonText>
        </SelectTypeButton>
      </ButtonWrapper>
      <MovieList popular={popular} upcoming={upcoming} />
    </Container>
  );
}

export default Home;
