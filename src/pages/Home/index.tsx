import React, { useEffect } from 'react';
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
  const [userName, setUserName] = React.useState('');
  const [popular, setPopular] = React.useState(false);
  const [upcoming, setUpcoming] = React.useState(true);

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
      <MovieList movieType={popular ? 'Popular' : 'Upcoming'} />
    </Container>
  );
}

export default Home;
